import React, { useMemo } from 'react';
import { SCENE_MAP } from '../scenes/SceneLibrary';
import clsx from 'clsx';

// Enhanced Particle component with depth and organic feel
const ParticleLayer = ({ speed, direction, count, size, opacity, color, depth }) => {
    const particles = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
            delay: Math.random() * 10 + 's',
            duration: (Math.random() * 10 + 10) + 's',
            drift: (Math.random() - 0.5) * 50 // Organic side-to-side drift
        }));
    }, [count]);

    const speedMap = { slow: 30, medium: 15, fast: 8, still: 999 };
    const baseDuration = speedMap[speed] || 15;
    const dirClass = `particle-move-${direction || 'none'}`;
    const zIndex = depth === 'front' ? 'z-[25]' : depth === 'mid' ? 'z-[15]' : 'z-5';

    return (
        <div className={clsx("absolute inset-0 overflow-hidden pointer-events-none", zIndex)}>
            {particles.map(p => (
                <div
                    key={p.id}
                    className={clsx("absolute rounded-full", dirClass)}
                    style={{
                        left: p.left,
                        top: p.top,
                        width: size,
                        height: size,
                        backgroundColor: color,
                        opacity: opacity * p.scale,
                        filter: `blur(${depth === 'back' ? '2px' : '0px'})`,
                        transform: `scale(${p.scale})`,
                        animationDuration: `${parseFloat(p.duration) + baseDuration}s`,
                        animationDelay: `-${p.delay}`,
                        '--move-y': direction === 'up' ? '-120vh' : direction === 'down' ? '120vh' : '0',
                        '--move-x': direction === 'left' ? '-120vw' : direction === 'right' ? '120vw' : `${p.drift}px`,
                    }}
                />
            ))}
        </div>
    );
};

const BackdropRenderer = ({ state }) => {
    const {
        sceneId,
        skyRatio = 0.5,
        colorTemperature = 0.5,
        clarity = 1.0,
        particleSpeed = 'medium',
        particleDirection = 'up',
        animationType: explicitAnimationType,
        tendencies = {} // Pass tendencies for reactive animations
    } = state || {};

    const SceneComponent = SCENE_MAP[sceneId] || SCENE_MAP['lane'];

    // Map sceneId to animation types (Semantic Layer)
    const animationType = explicitAnimationType || (() => {
        if (sceneId?.includes('temple')) return 'candle';
        if (sceneId?.includes('bedroom')) return 'candle';
        if (sceneId?.includes('bridge')) return 'smoke';
        if (sceneId?.includes('rooftop')) return 'pulse';
        if (sceneId?.includes('lane')) return 'smoke';
        return 'none';
    })();

    // 1. Identify "Living World" layers to activate
    const isOutdoor = !['bedroom', 'school_bus'].includes(sceneId);
    const hasWater = ['bridge', 'field'].includes(sceneId);
    const hasFabric = ['rooftop', 'temple'].includes(sceneId);
    const hasVehicles = ['lane', 'bridge', 'school_bus'].includes(sceneId);
    const isHot = colorTemperature < 0.6 && colorTemperature > 0.3 && isOutdoor;
    const hasPlants = ['field', 'lane', 'temple'].includes(sceneId);
    const isUrban = ['lane', 'rooftop'].includes(sceneId);

    // Dynamic Atmosphere Colors
    const morning = { top: '#E8D7C3', bottom: '#D4A574', accent: '#FFD700' };
    const evening = { top: '#1B2735', bottom: '#090A0F', accent: '#E8B85C' };
    const ethereal = { top: '#4A7C8C', bottom: '#1A2A3A', accent: '#4A90E2' };

    let theme = morning;
    if (colorTemperature > 0.7) theme = evening;
    else if (colorTemperature < 0.3) theme = ethereal;

    const blurAmount = (1 - clarity) * 12;
    const transformY = (skyRatio - 0.5) * 30 + '%';

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-2000 z-0 bg-neutral-900">
            {/* 1. Base Gradient Sky Layer */}
            <div
                className="absolute inset-0 transition-colors duration-2000"
                style={{
                    background: `linear-gradient(to bottom, ${theme.top}, ${theme.bottom})`,
                    opacity: 0.8
                }}
            />

            {/* Living World: Bird Transit (Deep Background) */}
            {isOutdoor && tendencies.expansion > 0.6 && (
                <div className="absolute top-[10%] left-0 w-full h-10 pointer-events-none z-[2] opacity-30">
                    <div className="animate-birds text-black text-[10px]">vvv</div>
                </div>
            )}

            {/* 2. Scene Layer with depth scaling */}
            <div
                className="absolute inset-0 w-full h-full transition-all duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1) origin-center"
                style={{
                    transform: `translateY(${transformY}) scale(${1 + (1 - clarity) * 0.2})`,
                    filter: `blur(${blurAmount}px) saturate(${0.5 + colorTemperature}) brightness(${0.8 + colorTemperature * 0.4})`,
                    opacity: 0.9
                }}
            >
                <div className={clsx(
                    "w-full h-full flex items-center justify-center transition-all duration-1000",
                    hasWater && "animate-water",
                    hasFabric && "animate-flag",
                    isHot && tendencies.stillness > 0.7 && "animate-heat",
                    hasPlants && "animate-sway",
                    ['field', 'rooftop', 'bridge'].includes(sceneId) && "animate-sweep",
                    ['lane', 'temple', 'school_bus'].includes(sceneId) && "animate-shadow"
                )}>
                    <SceneComponent />
                </div>
            </div>

            {/* Living World: Window Life (Urban background) */}
            {isUrban && (
                <div className="absolute inset-0 pointer-events-none z-[3] mix-blend-screen opacity-40">
                    {/* Simulated distant window flickers */}
                    <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-yellow-200 animate-window" />
                    <div className="absolute top-[45%] left-[30%] w-2 h-1 bg-yellow-100 animate-window" style={{ animationDelay: '-3s' }} />
                </div>
            )}

            {/* 3. Ambient Animation Layers (The Living Painting) */}
            {animationType === 'smoke' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
                    <div className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%] bg-gradient-to-tr from-white/5 to-transparent animate-smoke" />
                    <div className="absolute -right-1/4 -bottom-1/4 w-[150%] h-[150%] bg-gradient-to-bl from-white/5 to-transparent animate-smoke" style={{ animationDelay: '-7s' }} />
                </div>
            )}

            {animationType === 'candle' && (
                <div className="absolute inset-0 pointer-events-none z-[15] mix-blend-overlay">
                    <div className="absolute inset-0 bg-orange-500/10 animate-candle" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl animate-candle" />
                </div>
            )}

            {animationType === 'pulse' && (
                <div className="absolute inset-0 pointer-events-none z-[20] mix-blend-color-dodge">
                    <div className="absolute inset-0 bg-white/5 animate-pulse-vibe" />
                </div>
            )}

            {/* Living World: Passing Vehicles */}
            {hasVehicles && (
                <div className="absolute bottom-[20%] w-full h-px pointer-events-none z-[22]">
                    <div className="w-64 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-vehicle" />
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-vehicle" style={{ animationDelay: '-10s', animationDuration: '8s' }} />
                </div>
            )}

            {/* Living World: Screen Glow */}
            {sceneId === 'bedroom' && (
                <div className="absolute inset-0 pointer-events-none z-[23] mix-blend-screen">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500/5 animate-screen" />
                </div>
            )}

            {/* 4. Deep Background Particles */}
            <ParticleLayer
                count={30}
                size="4px"
                opacity={0.15}
                color={theme.accent}
                speed="slow"
                direction={particleDirection}
                depth="back"
            />

            {/* 5. Vivid Overlay Bloom */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light transition-all duration-2000"
                style={{
                    background: `radial-gradient(circle at 50% ${skyRatio * 100}%, ${theme.accent}44, transparent)`,
                    opacity: 0.4
                }}
            />

            {/* Character Silhouette Layer */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-10">
                <div
                    className={clsx(
                        "w-[280px] h-[450px] opacity-20 filter blur-[2px] transition-all duration-1000",
                        tendencies.momentum > 0.6 ? "animate-pulse" : "animate-pulse-gentle"
                    )}
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        maskImage: 'radial-gradient(ellipse at bottom, black 40%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at bottom, black 40%, transparent 70%)',
                    }}
                >
                    <div className="w-full h-full bg-black/60 rounded-t-[140px]" />
                </div>
            </div>

            {/* 6. Midground Particles */}
            <ParticleLayer
                count={20}
                size="2px"
                opacity={0.3}
                color="#FFFFFF"
                speed="medium"
                direction={particleDirection}
                depth="mid"
            />

            {/* 7. Foreground "Vibe" Particles */}
            <ParticleLayer
                count={40}
                size="3px"
                opacity={0.5}
                color="#FFFFFF"
                speed={particleSpeed}
                direction={particleDirection}
                depth="front"
            />

            {/* Cinematic Vignette, Grain & Power Flicker */}
            <div className={clsx(
                "absolute inset-0 pointer-events-none transition-opacity duration-1000",
                tendencies.mystery > 0.7 && "animate-power-flicker"
            )}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-50" />
                <div className="absolute inset-0 bg-noise opacity-[0.02]" />
            </div>
        </div>
    );
};

export default BackdropRenderer;
