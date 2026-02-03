import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import stateTracker from '../engines/StateTracker';

const TraitSlider = ({ leftLabel, rightLabel, value, onChange, delay = 0 }) => {
    return (
        <div
            className="mb-10 animate-fade-in"
            style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
        >
            <div className="flex justify-between items-end mb-4 px-1">
                <span className="text-[10px] tracking-[0.2em] font-display uppercase text-white/40">{leftLabel}</span>
                <span className="text-[10px] tracking-[0.2em] font-display uppercase text-white/40">{rightLabel}</span>
            </div>

            <div className="relative flex items-center group">
                {/* Custom Track Background */}
                <div className="absolute w-full h-[2px] bg-white/10 rounded-full overflow-hidden transition-all group-hover:bg-white/20">
                    <div
                        className="h-full bg-white/30 transition-all duration-300"
                        style={{ width: `${value * 100}%` }}
                    />
                </div>

                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    className="relative w-full h-8 bg-transparent appearance-none cursor-pointer z-10 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                               [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full 
                               [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,255,255,0.5)]
                               [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-black
                               [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 
                               [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full 
                               [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-black"
                />
            </div>

            <div className="flex justify-between px-1 mt-3">
                <span className={clsx(
                    "font-display text-xs transition-colors duration-500",
                    value < 0.4 ? "text-white/80" : "text-white/20"
                )}>
                    (More {leftLabel})
                </span>
                <span className={clsx(
                    "font-display text-xs transition-colors duration-500",
                    value > 0.6 ? "text-white/80" : "text-white/20"
                )}>
                    (More {rightLabel})
                </span>
            </div>
        </div>
    );
};

const OnboardingScreen = ({ onComplete }) => {
    const [traits, setTraits] = useState({
        momentum: 0.5,
        expansion: 0.5,
        clarity: 0.5
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const updateTrait = (key, val) => {
        setTraits(prev => ({ ...prev, [key]: val }));
    };

    const handleStart = () => {
        const initialImpact = {
            momentum: traits.momentum,
            stillness: 1 - traits.momentum,
            expansion: traits.expansion,
            constraint: 1 - traits.expansion,
            clarity: traits.clarity,
            ambiguity: 1 - traits.clarity
        };
        onComplete(initialImpact);
    };

    const handleSkip = () => {
        onComplete(null);
    };

    return (
        <div className={clsx(
            "absolute inset-0 z-40 bg-black/40 backdrop-blur-sm flex flex-col items-center px-6 pt-safe pb-safe transition-all duration-[1500ms] cubic-bezier(0.23, 1, 0.32, 1) overflow-y-auto",
            isVisible ? "opacity-100" : "opacity-0"
        )}>
            {/* Cinematic Grain Overlays */}
            <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none" />
            <div className="fixed inset-0 cinematic-vignette opacity-60 pointer-events-none" />

            <div className="max-w-md w-full glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden my-auto shrink-0">
                {/* Decorative pulse element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse-glow" />

                <div className="relative z-10">
                    <header className="mb-8 md:mb-12 text-center md:text-left">
                        <h2 className="font-display text-4xl md:text-5xl text-white mb-2 tracking-tight">Know yourself?</h2>
                        <p className="text-white/40 font-display text-sm md:text-base tracking-wide">Adjust these to fit your current state.</p>
                    </header>

                    <div className="space-y-2">
                        <TraitSlider
                            leftLabel="Stillness"
                            rightLabel="Action"
                            value={traits.momentum}
                            onChange={(v) => updateTrait('momentum', v)}
                            delay={0.2}
                        />

                        <TraitSlider
                            leftLabel="Deep Focus"
                            rightLabel="Exploring"
                            value={traits.expansion}
                            onChange={(v) => updateTrait('expansion', v)}
                            delay={0.4}
                        />

                        <TraitSlider
                            leftLabel="Mystery"
                            rightLabel="Clarity"
                            value={traits.clarity}
                            onChange={(v) => updateTrait('clarity', v)}
                            delay={0.6}
                        />
                    </div>

                    <div className="flex flex-col gap-4 mt-8 md:mt-12 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                        <button
                            onClick={handleStart}
                            className="w-full bg-white text-black py-4 rounded-xl font-display font-medium tracking-widest uppercase text-[11px] md:text-xs 
                                       hover:bg-neutral-200 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            Begin Discovery
                        </button>
                        <button
                            onClick={handleSkip}
                            className="w-full py-2 text-white/30 hover:text-white font-display tracking-[0.3em] uppercase text-[9px] transition-all duration-500"
                        >
                            Skip to discover
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom footnote */}
            <footer className="mt-8 mb-8 relative z-10 animate-fade-in shrink-0" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                <p className="text-white/20 text-[10px] tracking-[.4em] uppercase font-display">Quiet Forks v1.0 • Bhubaneswar</p>
            </footer>
        </div>
    );
};

export default OnboardingScreen;
