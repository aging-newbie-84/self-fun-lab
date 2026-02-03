import valuesConfig from '../config/values.json';

const STORAGE_KEY = 'qf_player_state_v1';

export const INITIAL_STATE = {
    tendencies: {
        momentum: 0.5,
        stillness: 0.5,
        expansion: 0.5,
        constraint: 0.5,
        clarity: 0.5,
        ambiguity: 0.5
    },
    history: {
        choices: [], // Array of choice IDs
        presets: [], // Array of preset IDs visited
        startTime: Date.now(),
        sessions: 0
    }
};

class StateTracker {
    constructor() {
        this.state = this.loadState();
    }

    loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.warn('LocalStorage unavailable', e);
        }
        return JSON.parse(JSON.stringify(INITIAL_STATE));
    }

    saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch (e) {
            console.warn('LocalStorage save failed', e);
        }
    }

    getTendencies() {
        return this.state.tendencies;
    }

    getHistory() {
        return this.state.history;
    }

    resetState() {
        this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
        this.saveState();
    }

    /**
     * Updates state based on a choice's value impact.
     * @param {Object} impact - e.g. { momentum: 1.0, expansion: 0.5 }
     * @param {String} choiceId - ID of choice made
     * @param {String} presetId - ID of preset question
     */
    processChoice(impact, choiceId, presetId) {
        // 1. Update history
        this.state.history.choices.push(choiceId);
        this.state.history.presets.push(presetId);

        // 2. Apply impact to tendencies
        // We use a weighted moving average approach or simple accumulation + normalization
        // The brief suggests: "Add impact... Normalize so values stay 0-1... Ensure opposite pairs balance"

        // Let's implement accumulation with normalization
        // Current tendency is 0-1. Impact is usually 0.8-1.3.
        // We treat tendency as a "mass" and add the new impact.

        // Algorithm:
        // For each pair (e.g. momentum/stillness):
        // rawMomentum = currentMomentum + (impact.momentum || 0)
        // rawStillness = currentStillness + (impact.stillness || 0)
        // total = rawMomentum + rawStillness
        // newMomentum = rawMomentum / total
        // newStillness = rawStillness / total

        valuesConfig.forEach(val => {
            // Only process if it's the primary of a pair (to avoid double processing)
            // Actually, we can just process every pair.
            // We need to identify pairs.
        });

        // Helper to find opposite
        const getOpposite = (id) => valuesConfig.find(v => v.id === id)?.opposite;

        // We iterate through all values used in impact
        // BUT we must ensure we update pairs together.

        const impactedPairs = new Set();
        Object.keys(impact).forEach(key => {
            const val = valuesConfig.find(v => v.id === key);
            if (val) {
                impactedPairs.add([val.id, val.opposite].sort().join('-'));
            }
        });

        impactedPairs.forEach(pairKey => {
            const [v1, v2] = pairKey.split('-');

            let rawV1 = this.state.tendencies[v1];
            let rawV2 = this.state.tendencies[v2];

            // Add impact (weight varies 0 - 1.3 usually)
            // Use a "learning rate" or mass. 
            // If we just add, it might swing too fast or too slow.
            // Brief says: "Add impact... Normalize".

            const impactV1 = impact[v1] || 0;
            const impactV2 = impact[v2] || 0;

            // To make it sticky but responsive, we assume current state has some "weight"
            // Let's say current state is result of N previous decisions.
            // But simple addition is robust.
            // We treat the current 0.5 as "1.0 mass" initially? No.
            // Let's just add to a running total? 
            // The state only stores 0-1.

            // Let's use a "Mass" approach.
            // Effective Mass = 2.0 (stability factor). 
            // New Value = (Old * Mass + Impact) / (Mass + ImpactTotal)
            // This keeps it bounded.

            // OR simpler: just add and re-normalize pair to sum 1.
            // Raw1 = Old1 + Impact1 * 0.1 (learning rate)
            // Raw2 = Old2 + Impact2 * 0.1
            // Norm = Raw1 / (Raw1 + Raw2)

            // Brief Example:
            // Before: mom 0.5, exp 0.5
            // Choice: mom +0.8, exp +0.6
            // Calculation: mom += (0.8/1.6)*0.2 = 0.6 ... This is a bit complex in brief.

            // Let's stick to the "Add and Normalize Pair" method.
            // It guarantees 0-1 and balance.

            // To prevent it getting stuck at 1.0 or 0.0 with infinite accumulation,
            // we can use a decay or just simple addition of "points" then convert to ratio.
            // But we only store the ratio.

            // Let's assume a "session weight" of 5.0 for the existing state.
            const inertia = 4.0;

            const weightedV1 = rawV1 * inertia + impactV1;
            const weightedV2 = rawV2 * inertia + impactV2;

            const total = weightedV1 + weightedV2;

            this.state.tendencies[v1] = weightedV1 / total;
            this.state.tendencies[v2] = weightedV2 / total;
        });

        this.saveState();
        return this.state.tendencies;
    }
}

export const listState = new StateTracker();
export default listState;
