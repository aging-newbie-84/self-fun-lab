import { supabase } from '../lib/supabaseClient';

/**
 * DynamicScenarioEngine - The core of the "Endless Variation" system.
 * Handles three layers of variety:
 * 1. LLM Generation (Deep variety via Supabase Edge Functions)
 * 2. Sentence Jittering (Micro-variety in static text)
 * 3. Reactive Framing (Adjusting scenarios based on player tendencies)
 */
class DynamicScenarioEngine {
    constructor() {
        this.useLLM = false; // Toggle for AI generation
        this.jitterPatterns = {
            "The sun is dipping low": [
                "The light is fading into amber",
                "Shadows are stretching long across the ground",
                "A golden haze settles over the horizon",
                "The sky is bruised with purple and gold"
            ],
            "School is out": [
                "The final bell has faded into silence",
                "The campus is emptying as the day ends",
                "Classrooms are locked, the air feels lighter",
                "The weight of the school day is behind you"
            ],
            "It's a quiet evening": [
                "Silence settled over the lane",
                "The neighborhood is held in a soft hush",
                "The evening air is still and expectant",
                "The world seems to have slowed down"
            ],
            "Friends are calling": [
                "Your phone buzzes with group chat energy",
                "Voices from the street reach your window",
                "The pull of the group is persistent today",
                "A notification pings, breaking your solitude"
            ]
        };
    }

    /**
     * Layer 1: Sentence Jittering
     * Replaces common phrases with atmospheric equivalents.
     */
    jitter(text) {
        let jitteredText = text;
        Object.keys(this.jitterPatterns).forEach(key => {
            if (jitteredText.includes(key)) {
                const options = this.jitterPatterns[key];
                const choice = options[Math.floor(Math.random() * options.length)];
                jitteredText = jitteredText.replace(key, choice);
            }
        });
        return jitteredText;
    }

    /**
     * Layer 2: Reactive Framing
     * Adjusts the tone of the scenario based on the player's current DO/THINK/WIDE balance.
     */
    frameScenario(scenario, tendencies) {
        const { momentum, stillness, expansion } = tendencies;
        let question = this.jitter(scenario.question);

        // If player is high MOMENTUM, make the question feel faster
        if (momentum > 0.7) {
            question = "Everything is moving fast. " + question;
        }
        // If player is high STILLNESS, make it feel more observational
        else if (stillness > 0.7) {
            question = "In the long silence, you notice something. " + question;
        }

        return {
            ...scenario,
            question
        };
    }

    /**
     * Layer 3: LLM Bridge (Auto LLM)
     * Calls a Supabase Edge Function to generate a scenario from scratch.
     */
    async generateFromAI(tendencies, history) {
        try {
            console.log("🛠️ DynamicEngine: Requesting AI Scenario...");
            const { data, error } = await supabase.functions.invoke('generate-scenario', {
                body: {
                    tendencies,
                    history: history.slice(-3), // only send last 3 for context
                    timestamp: new Date().toISOString()
                }
            });

            if (error) throw error;

            // Validate the AI response format
            if (data && data.question && data.choices) {
                console.log("✨ DynamicEngine: AI Scenario Received.");
                return data;
            }
            return null;
        } catch (err) {
            console.warn("⚠️ DynamicEngine: AI Bridge failed, falling back to Presets.", err.message);
            return null;
        }
    }
}

export const dynamicEngine = new DynamicScenarioEngine();
export default dynamicEngine;
