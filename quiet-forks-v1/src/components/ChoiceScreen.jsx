import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const ChoiceCard = ({ choice, onClick, delay }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "w-full p-6 p-y-8 rounded-2xl text-left transition-all duration-700 transform relative group overflow-hidden animate-fade-in-choice",
                "bg-white/5 border border-white/10 text-white backdrop-blur-md",
                "hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            )}
            style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

            <span className="font-display text-xl md:text-2xl block text-center relative z-10 tracking-wider">
                {choice.text}
            </span>
        </button>
    );
};

const ChoiceScreen = ({ preset, onChoice, onNext, onUndo, visible, progress = 0 }) => {
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

    const screenVisibilityClass = visible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-105 pointer-events-none";

    return (
        <div className={clsx(
            "absolute inset-0 z-20 flex flex-col transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1)",
            screenVisibilityClass
        )}>
            {/* Top Section: Progress indicator (Subtle) */}
            <div className="w-full pt-12 md:pt-16 px-6 md:px-8 pt-safe">
                <div className="max-w-md mx-auto mb-8 flex flex-col items-center gap-2 opacity-30">
                    <div className="w-full h-[1px] bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white transition-all duration-1000 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* 
        BOTTOM HALF (40% of screen) 
        As per MD: Breathing space, Statement, Choice Buttons
      */}
            <div className="mt-auto w-full min-h-[40vh] pb-12 md:pb-24 pb-safe px-6 md:px-12 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">

                {/* The Statement / Remark Area */}
                <div className="w-full max-w-2xl mx-auto mb-8 text-center bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 animate-fade-in-statement">
                    {!selectedId ? (
                        <h2 className="font-display text-2xl md:text-4xl text-white leading-relaxed tracking-tight drop-shadow-lg">
                            {preset.question}
                        </h2>
                    ) : (
                        <div className="space-y-6">
                            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed italic drop-shadow-xl animate-fade-in-statement">
                                "{preset.choices.find(c => c.id === selectedId)?.response}"
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 pt-2">
                                {Object.entries(preset.choices.find(c => c.id === selectedId)?.valueImpact || {}).map(([trait, value], i) => (
                                    <span
                                        key={trait}
                                        className="px-4 py-1.5 bg-white/10 border border-white/20 text-white/50 rounded-full text-[9px] tracking-[0.2em] uppercase font-display animate-score-pop"
                                        style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Choice Buttons Area */}
                <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
                    {!selectedId ? (
                        // INITIAL CHOICES
                        <div className="flex flex-col gap-4">
                            {preset.choices.map((choice, idx) => (
                                <ChoiceCard
                                    key={choice.id}
                                    choice={choice}
                                    onClick={() => handleChoice(choice.id)}
                                    delay={idx * 0.2 + 0.5} // Faster than the post-choice fade
                                />
                            ))}
                        </div>
                    ) : (
                        // POST-CHOICE ACTIONS
                        <div className="flex flex-col gap-4 animate-fade-in-buttons">
                            <button
                                onClick={onNext}
                                className="choice-button primary w-full h-[56px] rounded-full font-display text-lg tracking-widest uppercase transition-all hover:scale-[1.02] shadow-2xl active:scale-[0.98]"
                            >
                                DONE - MOVE TO NEXT
                            </button>

                            <button
                                onClick={onUndo}
                                className="choice-button secondary w-full h-[56px] rounded-full font-display text-lg tracking-widest uppercase transition-all hover:scale-[1.02] shadow-2xl active:scale-[0.98]"
                            >
                                TRY A DIFFERENT PATH
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChoiceScreen;
