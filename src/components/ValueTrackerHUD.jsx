import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

const ValueDot = ({ active, color }) => (
    <div
        className={clsx(
            "w-[6px] h-[6px] rounded-full transition-all duration-700",
            active ? color : "bg-white/10"
        )}
    />
);

const ValueTrackerHUD = ({ tendencies, visible }) => {
    // Persistent position state: Default to bottom-right
    const [position, setPosition] = useState({ x: null, y: null });
    const [isDragging, setIsDragging] = useState(false);
    const hudRef = useRef(null);
    const dragOffset = useRef({ x: 0, y: 0 });

    const values = [
        { label: 'DO', level: tendencies.momentum || 0, color: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' },
        { label: 'WIDE', level: tendencies.expansion || 0, color: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' },
        { label: 'CLEAR', level: tendencies.clarity || 0, color: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]' }
    ];

    const handlePointerDown = (e) => {
        if (!hudRef.current) return;
        setIsDragging(true);

        const rect = hudRef.current.getBoundingClientRect();
        dragOffset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };

        // Prevent default touch behaviors
        if (e.pointerType === 'touch') {
            // hudRef.current.setPointerCapture(e.pointerId);
        }
    };

    useEffect(() => {
        const handlePointerMove = (e) => {
            if (!isDragging) return;

            const newX = e.clientX - dragOffset.current.x;
            const newY = e.clientY - dragOffset.current.y;

            // Constrain to viewport
            const padding = 16;
            const rect = hudRef.current.getBoundingClientRect();
            const minX = padding;
            const maxX = window.innerWidth - rect.width - padding;
            const minY = padding;
            const maxY = window.innerHeight - rect.height - padding;

            setPosition({
                x: Math.max(minX, Math.min(newX, maxX)),
                y: Math.max(minY, Math.min(newY, maxY))
            });
        };

        const handlePointerUp = () => {
            if (!isDragging) return;
            setIsDragging(false);

            // Snap to nearest corner (WhatsApp style)
            const rect = hudRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const padding = 24;
            const snapPoints = [
                { x: padding, y: padding + 80 }, // Top-left (offset for controls)
                { x: window.innerWidth - rect.width - padding, y: padding + 80 }, // Top-right
                { x: padding, y: window.innerHeight - rect.height - padding }, // Bottom-left
                { x: window.innerWidth - rect.width - padding, y: window.innerHeight - rect.height - padding } // Bottom-right
            ];

            let nearest = snapPoints[0];
            let minDist = Infinity;

            snapPoints.forEach(p => {
                const dist = Math.sqrt(Math.pow(centerX - (p.x + rect.width / 2), 2) + Math.pow(centerY - (p.y + rect.height / 2), 2));
                if (dist < minDist) {
                    minDist = dist;
                    nearest = p;
                }
            });

            setPosition(nearest);
        };

        if (isDragging) {
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
        }

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isDragging]);

    // Initial position on mount (if screen size available)
    useEffect(() => {
        if (position.x === null) {
            const padding = 24;
            // Default to bottom right
            setPosition({
                x: window.innerWidth - 200 - padding, // Approximate width
                y: window.innerHeight - 150 - padding  // Approximate height
            });
        }
    }, []);

    const style = position.x !== null ? {
        left: position.x,
        top: position.y,
        margin: 0,
        position: 'fixed'
    } : {};

    return (
        <div
            ref={hudRef}
            onPointerDown={handlePointerDown}
            style={style}
            className={clsx(
                "z-[100] flex flex-col gap-2 md:gap-4 p-4 md:p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 transition-all duration-500",
                isDragging ? "scale-105 shadow-2xl cursor-grabbing opacity-90" : "cursor-grab shadow-lg",
                visible ? "opacity-100" : "opacity-0 pointer-events-none translate-y-4",
                !isDragging && "transition-[left,top,opacity,transform,background-color] duration-500 cubic-bezier(0.23, 1, 0.32, 1)"
            )}
        >
            {/* Drag Handle Indicator */}
            <div className="flex justify-center mb-1 opacity-20 group">
                <div className="w-8 h-1 bg-white rounded-full group-hover:opacity-100 transition-opacity" />
            </div>

            <span className="text-[9px] text-white/30 tracking-[0.3em] uppercase font-display mb-1 select-none">Current Path</span>
            {values.map(v => (
                <div key={v.label} className="flex items-center justify-between gap-6 select-none">
                    <span className="text-[10px] text-white/60 tracking-widest font-display min-w-[40px]">{v.label}</span>
                    <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map(dot => {
                            const active = v.level >= (dot * 0.4);
                            return <ValueDot key={dot} active={active} color={v.color} />;
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ValueTrackerHUD;
