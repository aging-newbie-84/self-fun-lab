import React, { useEffect, useState } from 'react';
import { generateReflection } from '../engines/ReflectionGenerator';
import stateTracker from '../engines/StateTracker';
import { supabase } from '../lib/supabaseClient';
import clsx from 'clsx';

const ValueBar = ({ label, value, delay = 0 }) => (
    <div
        className="w-full mb-6 animate-fade-in"
        style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
    >
        <div className="flex justify-between items-end mb-2 px-1">
            <span className="text-[10px] tracking-[0.2em] font-display uppercase text-white/40">{label}</span>
            <span className="text-[10px] tracking-[0.2em] font-display uppercase text-white/60">{Math.round(value * 100)}%</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
            <div
                className="h-full bg-white transition-all duration-[2000ms] ease-out animate-shimmer"
                style={{ width: `${value * 100}%` }}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
            <div className="absolute inset-0 cinematic-vignette opacity-80 pointer-events-none" />

            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className={clsx(
                "relative z-10 w-full max-w-4xl transition-all duration-[1500ms] cubic-bezier(0.23, 1, 0.32, 1)",
                showContent ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
            )}>
                {/* Main Glass Panel */}
                <div className="glass-panel rounded-[2.5rem] p-10 md:p-16 overflow-hidden relative border border-white/10">
                    {/* Decorative element */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-start">
                        {/* Left: Archetype & Poetry */}
                        <div className="space-y-12">
                            <header>
                                <p className="font-display text-white/30 tracking-[.5em] uppercase text-[10px] mb-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                                    Your Session Portrait
                                </p>
                                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-none animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                                    {archetype}
                                </h1>
                            </header>

                            <div className="space-y-8 pl-1 border-l border-white/10">
                                {statements.map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-white/70 font-display text-lg md:text-xl lg:text-2xl leading-relaxed italic animate-fade-in"
                                        style={{ animationDelay: `${1.2 + i * 0.4}s`, animationFillMode: 'both' }}
                                    >
                                        "{line}"
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Right: Statistics & Action */}
                        <div className="flex flex-col h-full">
                            <div className="flex-grow pt-4">
                                <h3 className="font-display text-white/20 tracking-[.3em] uppercase text-[10px] mb-8">Tendency Map</h3>
                                <div className="space-y-2">
                                    <ValueBar label="Momentum" value={scores.momentum} delay={1.5} />
                                    <ValueBar label="Stillness" value={scores.stillness} delay={1.7} />
                                    <ValueBar label="Expansion" value={scores.expansion} delay={1.9} />
                                    <ValueBar label="Clarity" value={scores.clarity} delay={2.1} />
                                </div>
                            </div>

                            <footer className="mt-16 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'both' }}>
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
