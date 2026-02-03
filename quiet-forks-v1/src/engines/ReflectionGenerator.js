import valuesConfig from '../config/values.json';

export const generateReflection = (state) => {
    const { tendencies } = state;
    const statements = [];

    // 1. Map to Relatable Terms
    const results = {
        do: tendencies.momentum || 0,
        think: tendencies.stillness || 0,
        wide: tendencies.expansion || 0,
        narrow: tendencies.constraint || 0,
        clear: tendencies.clarity || 0,
        mystery: tendencies.ambiguity || 0
    };

    // Determine Pair Leans
    const isDo = results.do >= results.think;
    const isWide = results.wide >= results.narrow;
    const isMystery = results.mystery >= results.clear;

    // 2. Determine Relatable Archetype (Identity)
    let archetype = "The Navigator";

    if (isDo && isWide) archetype = "The Explorer";
    else if (isDo && !isWide) archetype = "The Go-Getter";
    else if (!isDo && isWide) archetype = "The Observer";
    else if (!isDo && !isWide) archetype = "The Researcher";

    // 3. Narrative Construction (Based strictly on relatable .md)
    // Main behavior
    if (isDo) {
        statements.push("This session, you chose action over thinking.");
        statements.push("You went for things—your friends, new places, new ideas.");
        statements.push("You didn't wait for everything to make sense; you just tried it and saw what happened.");
    } else {
        statements.push("This session, you chose understanding over action.");
        statements.push("You asked questions before jumping in and wanted to know why before you moved forward.");
        statements.push("You took your time to process things and understand before acting.");
    }

    // Value system summary
    const summary = [];
    if (isDo) summary.push("says 'let's go' more than 'let me think'");
    else summary.push("is thoughtful and doesn't rush");

    if (isWide) summary.push("wants to try everything");
    else summary.push("masters what matters to you");

    statements.push(`You're becoming someone who ${summary[0]} and ${summary[1]}.`);

    // 4. Actionable Advice
    if (isDo) {
        statements.push("Next time, try pausing. See what you discover when you think first instead of acting first.");
    } else {
        statements.push("Next time, try going for something without understanding first. See what happens when you trust yourself to figure it out.");
    }

    return {
        archetype,
        statements,
        scores: {
            pairs: [
                { label: 'DO vs THINK', left: results.do, right: results.think },
                { label: 'WIDE vs NARROW', left: results.wide, right: results.narrow },
                { label: 'CLEAR vs MYSTERY', left: results.clear, right: results.mystery }
            ]
        }
    };
};
