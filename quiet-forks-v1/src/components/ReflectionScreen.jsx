import React, { useEffect, useState } from 'react';
import { generateReflection } from '../engines/ReflectionGenerator';
import stateTracker from '../engines/StateTracker';
import { supabase } from '../lib/supabaseClient';
import clsx from 'clsx';

const ValuePair = ({ label, left, right, delay = 0 }) => (
    <div
        className="w-full mb-10 animate-fade-in"
        style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
    >
        <div className="flex justify-between items-end mb-4 px-1">
            <span className={clsx(
                "text-[10px] tracking-[0.2em] font-display uppercase transition-colors duration-500",
                left > right ? "text-white/80" : "text-white/20"
            )}>
                {label.split(' vs ')[0]}
            </span>
            <span className={clsx(
                "text-[10px] tracking-[0.2em] font-display uppercase transition-colors duration-500",
                right > left ? "text-white/80" : "text-white/20"
            )}>
                {label.split(' vs ')[1]}
            </span>
        </div>
        <div className="h-[2px] w-full bg-white/5 rounded-full relative overflow-visible">
            {/* Center marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-3 bg-white/20 z-0" />

            {/* The Indicator */}
            <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-all duration-[2000ms] shadow-[0_0_15px_rgba(255,255,255,0.4)] border-2 border-black z-10"
                style={{
                    left: `${(left / (left + right)) * 100}%`,
                    transform: 'translate(-50%, -50%)'
                }}
            />

            {/* Left Fill */}
            <div
                className="absolute left-0 top-0 h-full bg-white/10 transition-all duration-[2000ms]"
                style={{ width: `${(left / (left + right)) * 100}%` }}
            />
        </div>
    </div>
);

const ReflectionScreen = ({ onRestart }) => {
    const [data, setData] = useState(null);
    const [showContent, setShowContent] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const result = generateReflection(stateTracker.state);
        setData(result);

        // Trigger save to Supabase
        saveReflection(result);

        const timer = setTimeout(() => setShowContent(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const saveReflection = async (reflectionData) => {
        try {
            setIsSaving(true);
            const { error } = await supabase
                .from('reflections')
                .insert([
                    {
                        archetype: reflectionData.archetype,
                        statements: reflectionData.statements,
                        scores: reflectionData.scores,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) console.error('Error saving reflection:', error);
        } catch (err) {
            console.error('Save failed:', err);
        } finally {
            setIsSaving(false);
        }
    };

    if (!data) return null;

    const { archetype, statements, scores } = data;

    return (
        <div className={clsx(
            "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pt-safe pb-safe bg-black overflow-y-auto",
            (() => {
                const tendencies = stateTracker.getTendencies();
                const maxVal = Math.max(...Object.values(tendencies));
                if (maxVal > 0.75) return "intensity-high";
                if (maxVal > 0.45) return "intensity-medium";
                return "intensity-subtle";
            })()
        )}>
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
            <div className="absolute inset-0 cinematic-vignette opacity-80 pointer-events-none" />

            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className={clsx(
                "relative z-10 w-full max-w-5xl transition-all duration-[1500ms] cubic-bezier(0.23, 1, 0.32, 1) my-auto",
                showContent ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
            )}>
                <div className="glass-panel rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative border border-white/10">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                    <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 md:gap-16 items-start">
                        <div className="space-y-12">
                            <header>
                                <p className="font-display text-white/50 tracking-[.2em] italic text-xl md:text-2xl mb-2 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                                    This time, you became...
                                </p>
                                <h1 className="font-display text-5xl md:text-8xl text-white tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                                    {archetype}
                                </h1>
                            </header>

                            <div className="space-y-6">
                                {statements.map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-white/80 font-display text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in"
                                        style={{ animationDelay: `${1.2 + i * 0.4}s`, animationFillMode: 'both' }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col h-full bg-white/5 p-6 md:p-8 rounded-3xl border border-white/5">
                            <div className="flex-grow">
                                <h3 className="font-display text-white/20 tracking-[.3em] uppercase text-[10px] mb-8 md:mb-12">Your Choosing Style</h3>
                                <div className="space-y-2">
                                    {scores.pairs.map((pair, i) => (
                                        <ValuePair
                                            key={i}
                                            label={pair.label}
                                            left={pair.left}
                                            right={pair.right}
                                            delay={1.5 + i * 0.2}
                                        />
                                    ))}
                                </div>
                            </div>

                            <footer className="mt-12 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'both' }}>
                                <button
                                    onClick={onRestart}
                                    className="w-full bg-white text-black py-4 rounded-xl font-display font-medium tracking-widest uppercase text-xs 
                                               hover:bg-neutral-200 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                >
                                    Begin Anew
                                </button>
                                <p className="mt-6 text-center text-white/10 text-[9px] tracking-[.4em] uppercase font-display">
                                    Quiet Forks • Experience v1.0 • {isSaving ? "Syncing..." : "Saved"}
                                </p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReflectionScreen;
