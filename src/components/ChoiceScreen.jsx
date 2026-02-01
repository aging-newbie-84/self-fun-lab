import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const ChoiceCard = ({ choice, onClick, disabled, delay = 0 }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (disabled) return;
        setActive(true);
        setTimeout(() => {
            onClick();
        }, 250);
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={clsx(
                "w-full p-6 p-y-8 rounded-2xl text-left transition-all duration-700 transform relative group overflow-hidden animate-fade-in",
                "bg-white/5 border border-white/10 text-white backdrop-blur-md",
                "hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]",
                active && "scale-[0.97] bg-white/30 border-white/60",
                disabled && !active && "opacity-0 scale-95 pointer-events-none"
            )}
            style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
        >
            {/* Shimmer overlay for unselected state */}
            {!disabled && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            )}

            <span className="font-display text-xl md:text-2xl block text-center relative z-10 tracking-wider">
                {choice.text}
            </span>
        </button>
    );
};

const ChoiceScreen = ({ preset, onChoice, visible, progress = 0 }) => {
    const [selectedId, setSelectedId] = useState(null);

    // Reset selection when preset changes
    useEffect(() => {
        setSelectedId(null);
    }, [preset?.id]);

    if (!preset) return null;

    const handleChoice = (id) => {
        if (selectedId) return;
        setSelectedId(id);
        onChoice(id);
    };

    const screenVisibilityClass = visible ? "opacity-100" : "opacity-0 scale-105 pointer-events-none";

    return (
        <div className={clsx(
            "absolute inset-0 z-20 flex flex-col transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1)",
            screenVisibilityClass
        )}>
            {/* Top: Progress Bar & Question Area */}
            <div className={clsx(
                "w-full pt-16 pb-20 px-8 transition-all duration-1000 bg-gradient-to-b from-black/80 via-black/40 to-transparent",
                !selectedId ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20 scale-95"
            )}>
                {/* Progress Indicator */}
                <div className="max-w-md mx-auto mb-16 flex flex-col items-center gap-2">
                    <div className="flex justify-between w-full px-1 mb-2">
                        <span className="text-[10px] text-white/30 tracking-[0.4em] uppercase font-display">Journey</span>
                        <span className="text-[10px] text-white/30 tracking-[0.4em] uppercase font-display">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                        <div
                            className="h-full bg-white transition-all duration-1000 ease-out animate-shimmer"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white text-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)] leading-[1.3] max-w-5xl mx-auto tracking-tight">
                    {preset.question}
                </h2>
            </div>

            {/* Bottom: Choices/Response Area */}
            <div className="mt-auto w-full pb-32 px-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-auto">
                <div className="flex flex-col gap-6 max-w-2xl mx-auto transition-all duration-1000">
                    {selectedId ? (
                        <div className="text-center p-12 flex flex-col items-center justify-center min-h-[250px] gap-8 animate-fade-in">
                            <p className="font-display text-3xl md:text-5xl text-white drop-shadow-xl leading-snug tracking-heading">
                                {preset.choices.find(c => c.id === selectedId)?.response}
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {Object.entries(preset.choices.find(c => c.id === selectedId)?.valueImpact || {}).map(([trait, value], i) => (
                                    <span
                                        key={trait}
                                        className="px-6 py-2 bg-white/5 border border-white/10 text-white/70 rounded-full text-[10px] tracking-[0.3em] uppercase animate-score-pop backdrop-blur-md"
                                        style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {preset.choices.map((choice, idx) => (
                                <ChoiceCard
                                    key={choice.id}
                                    choice={choice}
                                    onClick={() => handleChoice(choice.id)}
                                    delay={0.5 + idx * 0.2}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChoiceScreen;
