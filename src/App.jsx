import React, { useState, useEffect } from 'react';
import EntryScreen from './components/EntryScreen';
import OnboardingScreen from './components/OnboardingScreen';
import ChoiceScreen from './components/ChoiceScreen';
import ReflectionScreen from './components/ReflectionScreen';
import BackdropRenderer from './components/BackdropRenderer';
import stateTracker from './engines/StateTracker';
import sequencer from './engines/PresetSequencer';
import audioEngine from './engines/AudioEngine';
import { PRESETS } from './config/presets';

const App = () => {
  const [phase, setPhase] = useState('entry'); // entry, onboarding, game, reflection
  const [currentPreset, setCurrentPreset] = useState(null);
  const [backdropState, setBackdropState] = useState({
    ...PRESETS[0].initialBackdrop,
    sceneId: PRESETS[0].sceneId
  });
  const [choicesVisible, setChoicesVisible] = useState(false);

  // Initialize Game
  const startGame = (initialTraits) => {
    // Load first preset
    const first = sequencer.getNextPreset({ presets: [] }, stateTracker.state.tendencies);
    setCurrentPreset(first);
    setBackdropState({
      ...first.initialBackdrop,
      sceneId: first.sceneId
    });
    setPhase('game');

    // Fade in choices after a moment
    setTimeout(() => setChoicesVisible(true), 1000);
  };

  const handleEntryComplete = async () => {
    // Init audio on first interaction (required by browsers)
    await audioEngine.init();
    audioEngine.startDrone('v1.0');
    setPhase('onboarding');
  };

  // Global click to unlock audio just in case
  useEffect(() => {
    const unlock = async () => {
      if (audioEngine.initialized) {
        audioEngine.startDrone('v1.0');
      }
      document.removeEventListener('pointerdown', unlock);
    };
    document.addEventListener('pointerdown', unlock);
    return () => document.removeEventListener('pointerdown', unlock);
  }, []);

  const handleOnboardingComplete = (traits) => {
    if (traits) {
      stateTracker.resetState();
      stateTracker.processChoice(traits, 'onboarding', 'onboarding');
    } else {
      stateTracker.resetState();
    }
    startGame();
  };

  const SESSION_LENGTH = 7;

  const handleChoice = (choiceId) => {
    const choice = currentPreset.choices.find(c => c.id === choiceId);

    if (choice) {
      // 1. Process Choice Logically
      stateTracker.processChoice(choice.valueImpact, choiceId, currentPreset.id);

      // 2. Visual Update (Backdrop shifts immediately as impact)
      if (choice.backdropShift) {
        setBackdropState(prev => ({
          ...prev,
          ...choice.backdropShift
        }));
      }

      // 3. Audio Scaling
      const history = stateTracker.state.history.presets;
      const progress = history.length / SESSION_LENGTH; // Calculate progress
      const tendencies = stateTracker.getTendencies();

      let targetTrack = 'v1.0';
      if (progress > 0.8 || tendencies.momentum > 0.8) targetTrack = 'v1.4';
      else if (progress > 0.5 || tendencies.momentum > 0.6) targetTrack = 'v1.3';
      else if (progress > 0.2 || tendencies.momentum > 0.4) targetTrack = 'v1.2';

      if (audioEngine.currentTrack !== targetTrack) {
        audioEngine.switchTrack(targetTrack);
      }

      // 4. THE FIX: Wait for user to read the remark
      // We keep 'choicesVisible' as TRUE so the ChoiceScreen stays rendered with the Remark.
      setTimeout(() => {
        // Start Fade Out of current screen
        setChoicesVisible(false);

        setTimeout(() => {
          // CHECK SESSION LENGTH
          if (history.length >= SESSION_LENGTH) {
            setPhase('reflection');
            audioEngine.switchTrack('v1.0');
            return;
          }

          const next = sequencer.getNextPreset(stateTracker.state.history, stateTracker.state.tendencies);
          if (next) {
            // Update Background and Preset
            setBackdropState(prev => ({
              ...prev,
              sceneId: next.sceneId,
              ...next.initialBackdrop
            }));
            setCurrentPreset(next);

            // Fade UI back in
            setChoicesVisible(true);
          } else {
            setPhase('reflection');
            audioEngine.switchTrack('v1.0');
          }
        }, 1000); // Wait for fade-out animation to finish

      }, 4500); // Keep remark on screen for 4.5 seconds
    }
  };

  const currentProgress = (stateTracker.state.history.presets.length / SESSION_LENGTH) * 100;

  const handleRestart = () => {
    stateTracker.state.history.presets = [];
    startGame();
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-neutral-bg select-none">
      {/* Background Layer */}
      <BackdropRenderer state={backdropState} />

      {/* UI Layers */}
      {phase === 'entry' && (
        <EntryScreen onComplete={handleEntryComplete} />
      )}

      {phase === 'onboarding' && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}

      {phase === 'game' && currentPreset && (
        <ChoiceScreen
          key={currentPreset.id}
          preset={currentPreset}
          onChoice={handleChoice}
          visible={choicesVisible}
          progress={currentProgress}
        />
      )}

      {phase === 'reflection' && (
        <ReflectionScreen onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;
