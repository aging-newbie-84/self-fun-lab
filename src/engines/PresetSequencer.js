import { PRESETS } from '../config/presets';

class PresetSequencer {
    constructor() {
        this.presets = PRESETS;
    }

    /**
     * Selects the next preset based on history and randomness.
     * @param {Object} history - { presets: ['id1', 'id2'], ... }
     * @param {Object} tendencies - Current player tendencies
     * @returns {Object|null} The next preset object, or null if finished.
     */
    getNextPreset(history, tendencies) {
        const playedIds = new Set(history.presets || []);

        // Filter available
        const available = this.presets.filter(p => !playedIds.has(p.id));

        if (available.length === 0) {
            return null; // Game over / Reflection time
        }

        // Pick a random preset from the available pool
        const randomIndex = Math.floor(Math.random() * available.length);
        return available[randomIndex];
    }

    getPresetById(id) {
        return this.presets.find(p => p.id === id);
    }
}

export const sequencer = new PresetSequencer();
export default sequencer;
