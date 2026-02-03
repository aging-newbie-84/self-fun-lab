import React, { useState, useEffect } from 'react';
import EntryScreen from './components/EntryScreen';
import OnboardingScreen from './components/OnboardingScreen';
import ChoiceScreen from './components/ChoiceScreen';
import ReflectionScreen from './components/ReflectionScreen';
import BackdropRenderer from './components/BackdropRenderer';
import ValueTrackerHUD from './components/ValueTrackerHUD';
import stateTracker from './engines/StateTracker';
import sequencer from './engines/PresetSequencer';
import audioEngine from './engines/AudioEngine';
import { PRESETS } from './config/presets';
import { Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';

const App = () => {
  const [phase, setPhase] = useState('entry'); // entry, onboarding, game, reflection
  const [currentPreset, setCurrentPreset] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Pick a random starting scene for the entry/onboarding phase
  const initialRandomIndex = Math.floor(Math.random() * PRESETS.length);
  const [backdropState, setBackdropState] = useState({
    ...PRESETS[initialRandomIndex].initialBackdrop,
    sceneId: PRESETS[initialRandomIndex].sceneId
  });
  const [choicesVisible, setChoicesVisible] = useState(false);

  // Initialize Game
  const startGame = async (initialTraits) => {
    // Load first preset
    const first = await sequencer.getNextPreset({ presets: [] }, stateTracker.state.tendencies);
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
    }
  };

  const handleNext = () => {
    const history = stateTracker.state.history.presets;
    setChoicesVisible(false);

    setTimeout(async () => {
      // CHECK SESSION LENGTH
      if (history.length >= SESSION_LENGTH) {
        setPhase('reflection');
        audioEngine.switchTrack('v1.0');
        return;
      }

      const next = await sequencer.getNextPreset(stateTracker.state.history, stateTracker.state.tendencies);
      if (next) {
        // Update Background and Preset
        setBackdropState(prev => ({
          ...prev,
          sceneId: next.sceneId,
          ...next.initialBackdrop
        }));
        setCurrentPreset(next);

        // Fade UI back in
        setTimeout(() => setChoicesVisible(true), 500);
      } else {
        setPhase('reflection');
        audioEngine.switchTrack('v1.0');
      }
    }, 1000); // Wait for fade-out animation to finish
  };

  const handleUndo = () => {
    // Basic undo: remove last history item and reset tendencies
    // This is a simplified version for the 'TRY A DIFFERENT PATH' button
    if (stateTracker.state.history.presets.length > 0) {
      stateTracker.state.history.presets.pop();
      stateTracker.recalculateTendencies();
      // Force re-render of current preset
      const current = currentPreset;
      setCurrentPreset(null);
      setTimeout(() => setCurrentPreset(current), 10);
    }
  };

  const currentProgress = (stateTracker.state.history.presets.length / SESSION_LENGTH) * 100;

  const handleRestart = () => {
    stateTracker.state.history.presets = [];
    startGame();
  };

  const toggleVolume = () => {
    const newMuted = audioEngine.toggleMute();
    setIsMuted(newMuted);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={clsx(
      "relative w-full h-dvh overflow-hidden select-none transition-colors duration-1000",
      darkMode ? "bg-black text-white" : "bg-neutral-bg text-neutral-text"
    )}>
      {/* Background Layer */}
      <div className={clsx(
        "absolute inset-0 transition-opacity duration-1000",
        (() => {
          const t = stateTracker.getTendencies();
          const maxVal = Math.max(...Object.values(t));
          if (maxVal > 0.75) return "intensity-high";
          if (maxVal > 0.45) return "intensity-medium";
          return "intensity-subtle";
        })()
      )}>
        <BackdropRenderer state={{ ...backdropState, tendencies: stateTracker.state.tendencies }} />
      </div>

      {/* Real-time HUD Layer (Draggable) */}
      <ValueTrackerHUD
        tendencies={stateTracker.state.tendencies}
        visible={phase === 'game' && choicesVisible}
      />

      {/* Global Controls */}
      <div className="fixed top-0 right-0 z-[100] flex gap-3 p-6 pt-safe pr-safe">
        <button
          onClick={toggleVolume}
          className="p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all active:scale-95"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX size={18} strokeWidth={2} />
          ) : (
            <Volume2 size={18} strokeWidth={2} />
          )}
        </button>
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all active:scale-95"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <Sun size={18} strokeWidth={2} />
          ) : (
            <Moon size={18} strokeWidth={2} />
          )}
        </button>
      </div>

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
          onNext={handleNext}
          onUndo={handleUndo}
          visible={choicesVisible}
          progress={currentProgress}
          tendencies={stateTracker.state.tendencies}
        />
      )}

      {phase === 'reflection' && (
        <ReflectionScreen onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;
