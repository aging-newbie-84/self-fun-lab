import React, { useMemo } from 'react';
import {
    Bike,
    BookOpen,
    Compass,
    Trees,
    Lightbulb,
    Moon,
    CircleDot
} from 'lucide-react';
import clsx from 'clsx';

/**
 * ArchetypeTotem - The visual heartbeat of the player's profile.
 * Displays an iconic representative of the dominant tendency with reactive animations.
 */
const ArchetypeTotem = ({ tendencies, size = 48, className }) => {
    const activeProfile = useMemo(() => {
        if (!tendencies) return null;

        const { momentum, stillness, expansion, constraint, clarity, ambiguity } = tendencies;

        const map = [
            { id: 'doer', val: momentum, icon: Bike, color: '#F4C97E', anim: 'totem-spin' },
            { id: 'thinker', val: stillness, icon: BookOpen, color: '#A5C9E8', anim: 'totem-sway' },
            { id: 'explorer', val: expansion, icon: Compass, color: '#9DE8B5', anim: 'totem-rotate' },
            { id: 'keeper', val: constraint, icon: Trees, color: '#E8A5A5', anim: 'totem-pulse' },
            { id: 'questioner', val: clarity, icon: Lightbulb, color: '#FFF9C4', anim: 'totem-glow' },
            { id: 'mystery-keeper', val: ambiguity, icon: Moon, color: '#C5A5E8', anim: 'totem-fade' }
        ];

        // Find max value
        const maxVal = Math.max(...map.map(m => m.val));

        // If all values are close to 0.5, we are "Balanced"
        const isBalanced = map.every(m => m.val > 0.4 && m.val < 0.6);

        if (isBalanced) {
            return {
                id: 'balancer',
                icon: CircleDot,
                color: '#FFFFFF',
                anim: 'totem-breathe',
                intensity: 'moderate',
                label: 'The Balancer'
            };
        }

        const dominant = map.find(m => m.val === maxVal);

        // Calculate intensity tier based on dominance
        let intensity = 'very-subtle';
        if (maxVal >= 0.8) intensity = 'intense';
        else if (maxVal >= 0.7) intensity = 'strong';
        else if (maxVal >= 0.6) intensity = 'moderate';
        else if (maxVal >= 0.5) intensity = 'subtle';

        return {
            ...dominant,
            intensity,
            label: dominant.id.charAt(0).toUpperCase() + dominant.id.slice(1).replace('-', ' ')
        };
    }, [tendencies]);

    if (!activeProfile) return null;

    const Icon = activeProfile.icon;

    return (
        <div className={clsx("flex flex-col items-center justify-center gap-2", className)}>
            <div
                className={clsx(
                    "transition-all duration-1000",
                    activeProfile.anim,
                    activeProfile.intensity
                )}
                style={{ color: activeProfile.color }}
            >
                <Icon size={size} strokeWidth={1.5} />
            </div>

            {/* Optional label for debug or subtle UI */}
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-40 text-white translate-y-2">
                {activeProfile.label}
            </span>
        </div>
    );
};

export default ArchetypeTotem;
