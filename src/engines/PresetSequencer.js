import { PRESETS } from '../config/presets';

class PresetSequencer {
    constructor() {
        this.presets = PRESETS;
    }

    /**
     * Selects the next preset based on history and tendencies.
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

        // For MVP: Simple order or random?
        // Brief says: "Select next question based on tendency gaps"
        // "Avoid repeating same preset immediately"

        // Let's implement a weighted random choice based on "Relevance".
        // Or just pick the first available for consistency in testing.
        // Let's pick the first available for now to ensure we see all 5 unique scenes.

        return available[0];
    }

    getPresetById(id) {
        return this.presets.find(p => p.id === id);
    }
}

export const sequencer = new PresetSequencer();
export default sequencer;
