import React, { useEffect, useState } from 'react';
import bridgeImage from '../assets/bridge_new.png';
import clsx from 'clsx';

const EntryScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleStart = () => {
        setIsLeaving(true);
        setTimeout(() => onComplete(), 1200);
    };

    return (
        <div
            onClick={handleStart}
            className={clsx(
                "absolute inset-0 z-50 flex flex-col items-center justify-center text-white cursor-pointer transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1)",
                isLeaving ? "opacity-0 scale-[1.05]" : "opacity-100 scale-100"
            )}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bridgeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Cinematic Layers */}
            <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
            <div className="absolute inset-0 cinematic-vignette opacity-70 pointer-events-none" />

            <div className={clsx(
                "relative z-10 text-center px-6 transition-all duration-1000 delay-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                    What becomes of you?
                </h1>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-[1px] bg-white/30 animate-pulse-glow" />
                    <p className="font-display text-xs md:text-sm tracking-[0.5em] uppercase text-white/50 animate-pulse">
                        Tap anywhere to begin
                    </p>
                </div>
            </div>

            {/* Aesthetic Border Frame */}
            <div className="absolute inset-8 border border-white/5 pointer-events-none" />

            {/* Bottom Credits */}
            <footer className={clsx(
                "absolute bottom-12 left-0 w-full text-center transition-opacity duration-1000 delay-1000",
                isVisible ? "opacity-100" : "opacity-0"
            )}>
                <p className="text-[10px] tracking-[.8em] font-display uppercase text-white/20">A Quiet Forks Experience</p>
            </footer>
        </div>
    );
};

export default EntryScreen;
