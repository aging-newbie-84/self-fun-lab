import "jsr:@supabase/functions-js/edge-runtime.d.ts";

/**
 * generate-scenario - Backup Version
 * This is the original version created on Feb 3, 2026.
 */

const LLM_API_KEY = Deno.env.get('LLM_API_KEY');

Deno.serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            }
        });
    }

    try {
        const { tendencies, history } = await req.json();

        const prompt = `
      You are an atmospheric writer for "Quiet Forks", an introspection game for teenagers set in Bhubaneswar, India.
      Current Player Profile:
      - MOMENTUM: ${tendencies.momentum || 0.5}
      - STILLNESS: ${tendencies.stillness || 0.5}
      - EXPANSION: ${tendencies.expansion || 0.5}

      Generate ONE new scenario. Return JSON: { "sceneId", "question", "initialBackdrop", "choices": [] }
    `;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${LLM_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{ role: 'system', content: 'You are a JSON-only narrator.' }, { role: 'user', content: prompt }],
                response_format: { type: "json_object" }
            }),
        });

        const aiResult = await response.json();
        return new Response(aiResult.choices[0].message.content, {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
});
