import valuesConfig from '../config/values.json';

export const generateReflection = (state) => {
    const { tendencies } = state;
    const statements = [];

    // 1. Analyze Dominant Values
    const sortedValues = Object.entries(tendencies)
        .sort(([, a], [, b]) => b - a); // Descending

    const topValue = sortedValues[0];
    const secondValue = sortedValues[1];

    const topValueKey = topValue[0];
    const topValueScore = topValue[1];
    const secondValueKey = secondValue[0];

    // 2. Determine Archetype Name
    let archetype = "The Balanced";

    // Combinations
    if (topValueKey === 'momentum' && secondValueKey === 'expansion') archetype = "The Vanguard";
    else if (topValueKey === 'expansion' && secondValueKey === 'momentum') archetype = "The Vanguard";

    else if (topValueKey === 'stillness' && secondValueKey === 'constraint') archetype = "The Anchor";
    else if (topValueKey === 'constraint' && secondValueKey === 'stillness') archetype = "The Anchor";

    else if (topValueKey === 'clarity' && secondValueKey === 'constraint') archetype = "The Architect";
    else if (topValueKey === 'constraint' && secondValueKey === 'clarity') archetype = "The Architect";

    else if (topValueKey === 'ambiguity' && secondValueKey === 'expansion') archetype = "The Dreamer";
    else if (topValueKey === 'expansion' && secondValueKey === 'ambiguity') archetype = "The Dreamer";

    else if (topValueKey === 'momentum' && secondValueKey === 'clarity') archetype = "The Seeker";
    else if (topValueKey === 'clarity' && secondValueKey === 'momentum') archetype = "The Seeker";

    else if (topValueKey === 'stillness' && secondValueKey === 'ambiguity') archetype = "The Observer";
    else if (topValueKey === 'ambiguity' && secondValueKey === 'stillness') archetype = "The Observer";

    // Fallbacks based on top value if no combo matches perfectly
    else {
        if (topValueKey === 'momentum') archetype = "The Kinetic";
        if (topValueKey === 'stillness') archetype = "The Silent";
        if (topValueKey === 'expansion') archetype = "The Voyager";
        if (topValueKey === 'constraint') archetype = "The Hermit";
        if (topValueKey === 'clarity') archetype = "The Witness";
        if (topValueKey === 'ambiguity') archetype = "The Nomad";
    }

    // 3. Poetic Statements
    if (topValueKey === 'momentum') statements.push("You chose to move forward again and again.");
    else if (topValueKey === 'stillness') statements.push("You found strength in pausing and observing.");
    else if (topValueKey === 'expansion') statements.push("You kept pushing the world's boundaries.");
    else if (topValueKey === 'constraint') statements.push("You chose depth over distance.");
    else if (topValueKey === 'clarity') statements.push("You sought answers at every turn.");
    else if (topValueKey === 'ambiguity') statements.push("You moved freely through the mist.");

    if (tendencies.momentum > 0.6 || tendencies.expansion > 0.6) {
        statements.push("The world opened up with you, becoming vast and bright.");
    } else if (tendencies.stillness > 0.6 || tendencies.constraint > 0.6) {
        statements.push("The world quieted down, becoming intimate and focused.");
    } else if (tendencies.ambiguity > 0.6) {
        statements.push("The edges softened, leaving room for mystery.");
    } else {
        statements.push("The world found its center in your presence.");
    }

    statements.push("That is real. That is you.");

    return {
        archetype,
        statements,
        scores: tendencies
    };
};
