import "jsr:@supabase/functions-js/edge-runtime.d.ts";

/**
 * generate-scenario - Supabase Edge Function
 * Acts as the bridge between Quiet Forks and the LLM.
 */

// We assume the user will set this in Supabase Vault/Secrets
const LLM_API_KEY = Deno.env.get('LLM_API_KEY') || Deno.env.get('OPENAI_API_KEY');

Deno.serve(async (req: Request) => {
    // Handle CORS
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
      Current Player Profile (Norm 0-1):
      - DO vs THINK balance: ${tendencies.momentum || 0.5} / ${tendencies.stillness || 0.5}
      - WIDE vs NARROW balance: ${tendencies.expansion || 0.5} / ${tendencies.constraint || 0.5}
      - CLEAR vs MYSTERY balance: ${tendencies.clarity || 0.5} / ${tendencies.ambiguity || 0.5}

      Recent Scene IDs: ${history.join(', ')}

      TASK:
      Generate ONE new, atmospheric scenario for this player.
      Tone: Solitary, poetic, grounded, relatable to Odia teenagers.
      Location: Use one of: school_bus, temple, lane, field, rooftop, bedroom, bridge, badminton.

      Return ONLY a JSON object:
      {
        "sceneId": "string",
        "question": "string",
        "initialBackdrop": { "skyRatio": 0-1, "colorTemperature": 0-1, "clarity": 0-1 },
        "choices": [
          { 
            "id": "a", 
            "text": "short action", 
            "response": "poetic result", 
            "valueImpact": { "momentum/stillness/expansion/etc": 1.2 }, 
            "backdropShift": { "skyRatio": 0-1 } 
          },
          { 
            "id": "b", 
            "text": "short alternative", 
            "response": "poetic result", 
            "valueImpact": { "momentum/stillness/expansion/etc": 1.2 }, 
            "backdropShift": { "skyRatio": 0-1 } 
          }
        ]
      }
    `;

        // Calling the LLM (Defaulting to OpenAI style)
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
        const scenario = JSON.parse(aiResult.choices[0].message.content);

        return new Response(JSON.stringify(scenario), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            status: 200,
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            status: 500,
        });
    }
});
