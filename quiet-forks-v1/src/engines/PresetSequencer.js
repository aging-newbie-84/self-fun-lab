import { PRESETS } from '../config/presets';
import { dynamicEngine } from './DynamicScenarioEngine';

class PresetSequencer {
    constructor() {
        this.presets = PRESETS;
    }

    /**
     * Selects the next preset with a mix of AI, curated presets, and jittering.
     */
    async getNextPreset(history, tendencies) {
        const playedIds = new Set(history.presets || []);

        // --- 1. THE AI CHANCE ---
        // Every 3rd turn, try to use the LLM for a truly unique variation
        const shouldTryAI = (playedIds.size + 1) % 3 === 0;

        if (shouldTryAI) {
            const aiScenario = await dynamicEngine.generateFromAI(tendencies, Array.from(playedIds));
            if (aiScenario) {
                // Ensure the AI scenario has a unique ID and is framed
                return dynamicEngine.frameScenario({
                    ...aiScenario,
                    id: `ai_${Date.now()}`
                }, tendencies);
            }
        }

        // --- 2. THE CURATED FALLBACK ---
        // Filter available curated presets
        const available = this.presets.filter(p => !playedIds.has(p.id));

        if (available.length === 0) {
            return null; // All scenarios played
        }

        // Pick a random curated preset
        const randomIndex = Math.floor(Math.random() * available.length);
        const basePreset = available[randomIndex];

        // Apply Jittering and Framing to the curated preset
        return dynamicEngine.frameScenario(basePreset, tendencies);
    }

    getPresetById(id) {
        return this.presets.find(p => p.id === id);
    }
}

export const sequencer = new PresetSequencer();
export default sequencer;
