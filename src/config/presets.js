export const PRESETS = [
    // --- CATEGORY 1: AFTER-ACTIVITY ---
    {
        id: "1.1",
        sceneId: "school_bus",
        question: "School is out. The sun is dipping low. Where does your energy go?",
        initialBackdrop: { skyRatio: 0.4, particleDirection: "down", particleSpeed: "slow", colorTemperature: 0.5, clarity: 0.7 },
        choices: [
            { id: "1.1_a", text: "Head to a friend's place for snacks", response: "The day continues. You choose the warmth of shared space.", valueImpact: { momentum: 1.0, expansion: 1.2 }, backdropShift: { skyRatio: 0.5, particleDirection: "up", colorTemperature: 0.7 } },
            { id: "1.1_b", text: "Scroll YouTube at home", response: "A quiet retreat. The world outside slows down.", valueImpact: { stillness: 1.1, constraint: 1.0 }, backdropShift: { skyRatio: 0.3, particleDirection: "none", colorTemperature: 0.4 } }
        ]
    },
    {
        id: "1.2",
        sceneId: "badminton",
        question: "Who holds your focus tonight? The court or the classroom?",
        initialBackdrop: { skyRatio: 0.3, particleDirection: "none", particleSpeed: "slow", colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "1.2_a", text: "Meet studies-oriented friends for homework", response: "You seek clarity in numbers and shared goals.", valueImpact: { clarity: 1.2, constraint: 1.1 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.5, clarity: 1.0 } },
            { id: "1.2_b", text: "Meet sports-oriented friends at the court", response: "Expansion through play. The court holds your focus.", valueImpact: { expansion: 1.2, momentum: 1.3 }, backdropShift: { skyRatio: 0.6, particleDirection: "up", particleSpeed: "fast", colorTemperature: 0.8 } }
        ]
    },
    {
        id: "1.3",
        sceneId: "lane",
        question: "Your body feels the weight of the day. Do you push through or let go?",
        initialBackdrop: { skyRatio: 0.6, particleDirection: "right", particleSpeed: "medium", colorTemperature: 0.7, clarity: 0.9 },
        choices: [
            { id: "1.3_a", text: "Go to the gym for a workout", response: "Momentum is a habit. You push against the air.", valueImpact: { momentum: 1.3, expansion: 1.1 }, backdropShift: { skyRatio: 0.7, particleDirection: "up", particleSpeed: "fast", colorTemperature: 0.9 } },
            { id: "1.3_b", text: "Come home and watch TV", response: "Stillness reclaimed. The screen is a window to rest.", valueImpact: { stillness: 1.2, constraint: 1.1 }, backdropShift: { skyRatio: 0.4, particleDirection: "none", colorTemperature: 0.5, clarity: 0.7 } }
        ]
    },
    {
        id: "1.4",
        sceneId: "bedroom",
        question: "Duty calls, but so does the world. Which voice do you answer first?",
        initialBackdrop: { skyRatio: 0.3, particleDirection: "none", particleSpeed: "slow", colorTemperature: 0.4, clarity: 1.0 },
        choices: [
            { id: "1.4_a", text: "Finish your homework before anything else", response: "Clarity comes from a finished task.", valueImpact: { clarity: 1.3, constraint: 1.2 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.5, clarity: 1.0 } },
            { id: "1.4_b", text: "Meet friends first, homework later", response: "You choose ambiguity. The night is still young.", valueImpact: { expansion: 1.3, ambiguity: 1.1 }, backdropShift: { skyRatio: 0.5, particleDirection: "up", colorTemperature: 0.7, clarity: 0.6 } }
        ]
    },
    {
        id: "1.5",
        sceneId: "bridge",
        question: "In the silence, do you build a world or watch one?",
        initialBackdrop: { skyRatio: 0.5, particleDirection: "right", particleSpeed: "slow", colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "1.5_a", text: "Build or make something creative", response: "Creation is an act of expansion. You leave a mark.", valueImpact: { expansion: 1.4, momentum: 1.2 }, backdropShift: { skyRatio: 0.8, particleDirection: "up", particleSpeed: "medium", colorTemperature: 0.9, clarity: 0.5 } },
            { id: "1.5_b", text: "Watch something on TV or streaming", response: "You absorb the world's stories in quiet constraint.", valueImpact: { stillness: 1.1, constraint: 1.3 }, backdropShift: { skyRatio: 0.5, particleDirection: "none", colorTemperature: 0.5, clarity: 0.9 } }
        ]
    },
    {
        id: "1.6",
        sceneId: "living_room",
        question: "The phone vibrates. Do you reach out to the world or stay in your own orbit?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.4, clarity: 0.9 },
        choices: [
            { id: "1.6_a", text: "Call up your friends and see what they're doing", response: "Connections spark. You choose expansion over isolation.", valueImpact: { expansion: 1.2, momentum: 1.1 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.7, particleSpeed: 'medium' } },
            { id: "1.6_b", text: "Don't call anyone, stay silent", response: "Stillness settled. You reclaim your own space.", valueImpact: { stillness: 1.3, constraint: 1.1 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.3, particleSpeed: 'slow' } }
        ]
    },

    // --- CATEGORY 2: SOCIAL MOMENTS ---
    {
        id: "2.1",
        sceneId: "temple",
        question: "A family elder asks for your presence. Is it a weight or a bridge?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.6, clarity: 1.0 },
        choices: [
            { id: "2.1_a", text: "Go to the function with grandfather", response: "You choose the ancestral path. Clarity through tradition.", valueImpact: { clarity: 1.2, expansion: 1.1 }, backdropShift: { skyRatio: 0.7, colorTemperature: 0.8 } },
            { id: "2.1_b", text: "Skip the function, stay home", response: "You prioritize personal constraint. The self-chosen boundary.", valueImpact: { constraint: 1.3, ambiguity: 1.1 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "2.2",
        sceneId: "badminton_quiet",
        question: "The club is gathering. Do you submerge in the group or find your own rhythm?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "2.2_a", text: "Participate in school sports or club games", response: "Momentum in a pack. You find energy in numbers.", valueImpact: { momentum: 1.4, expansion: 1.1 }, backdropShift: { skyRatio: 0.6, particleSpeed: 'fast', colorTemperature: 0.7 } },
            { id: "2.2_b", text: "Practice alone - solo trial", response: "Constraint leads to focus. You sharpen your own edge.", valueImpact: { constraint: 1.2, stillness: 1.3 }, backdropShift: { skyRatio: 0.3, particleSpeed: 'slow', clarity: 1.0 } }
        ]
    },
    {
        id: "2.5",
        sceneId: "car",
        question: "Old friends in distant cities reach out. Do you bridge the distance?",
        initialBackdrop: { skyRatio: 0.7, colorTemperature: 0.4, clarity: 0.7 },
        choices: [
            { id: "2.5_a", text: "Make the effort to bridge the distance", response: "You choose expansion across the map. Momentum through effort.", valueImpact: { expansion: 1.4, momentum: 1.3 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.6, clarity: 0.9 } },
            { id: "2.5_b", text: "Let those friendships fade naturally", response: "The still choice. You accept the shifting landscape of time.", valueImpact: { stillness: 1.4, constraint: 1.2 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.3, clarity: 1.0 } }
        ]
    },

    // --- CATEGORY 3: CHALLENGE / UNCERTAINTY ---
    {
        id: "3.5",
        sceneId: "bridge",
        question: "Provocation strikes. Do you fire back or let the heat dissipate?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.8, clarity: 0.6, particleSpeed: 'medium' },
        choices: [
            { id: "3.5_a", text: "Control your reaction and stay respectful", response: "Stillness as power. You hold your ground without a shout.", valueImpact: { stillness: 1.5, clarity: 1.2 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.5, clarity: 1.0, particleSpeed: 'slow' } },
            { id: "3.5_b", text: "Let your anger show if someone irritates you", response: "Momentum unleashed. You react with the intensity of the moment.", valueImpact: { momentum: 1.4, ambiguity: 1.1 }, backdropShift: { skyRatio: 0.8, colorTemperature: 1.0, particleSpeed: 'fast' } }
        ]
    },
    {
        id: "3.8",
        sceneId: "lane_dusk",
        question: "A transformation looms. It demands your comfort. Do you trade security for growth?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "3.8_a", text: "Sacrifice comfort for growth opportunity", response: "Expansion through fire. You step into the unknown.", valueImpact: { expansion: 1.5, momentum: 1.4 }, backdropShift: { skyRatio: 1.0, colorTemperature: 0.9, clarity: 0.4 } },
            { id: "3.8_b", text: "Maintain your current comfort level", response: "A choice of stillness and safe constraint.", valueImpact: { stillness: 1.3, constraint: 1.4 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.4, clarity: 1.0 } }
        ]
    },

    // --- CATEGORY 5: CONFLICT ---
    {
        id: "5.5",
        sceneId: "living_room",
        question: "The weight of expectation is heavy. Do you carry it or set it down?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.6, clarity: 0.9 },
        choices: [
            { id: "5.5_a", text: "Try to meet every family expectation", response: "Constraint as duty. You walk the paved path.", valueImpact: { constraint: 1.4, clarity: 1.3 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.5, clarity: 1.0 } },
            { id: "5.5_b", text: "Explain that you won't sacrifice happiness for medals", response: "Expansion through truth. You redefine the rules.", valueImpact: { expansion: 1.5, ambiguity: 1.2 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.7, clarity: 0.7 } }
        ]
    },
    {
        id: "5.8",
        sceneId: "bridge",
        question: "A bond is fraying. Do you fight for the thread or let it go?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.3, clarity: 0.5, particleDirection: 'down' },
        choices: [
            { id: "5.8_a", text: "Fight to save the relationship", response: "Momentum in love. You refuse to let the fire die.", valueImpact: { momentum: 1.4, expansion: 1.2 }, backdropShift: { skyRatio: 0.7, colorTemperature: 0.6, clarity: 0.8 } },
            { id: "5.8_b", text: "Accept that it's over and move on", response: "The still finality. You walk into the next chapter alone.", valueImpact: { stillness: 1.5, clarity: 1.4 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.2, clarity: 1.0 } }
        ]
    },

    // --- CATEGORY 6: IDENTITY ---
    {
        id: "6.2",
        sceneId: "rooftop",
        question: "The crowd believes one thing. You believe another. Do you speak?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.5, clarity: 0.7 },
        choices: [
            { id: "6.2_a", text: "Be vocal about what you actually believe", response: "Clarity of self. You stand apart from the noise.", valueImpact: { clarity: 1.5, momentum: 1.2 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.7, clarity: 1.0 } },
            { id: "6.2_b", text: "Keep your real opinions to yourself", response: "Ambiguity as armor. You observe from the shadows.", valueImpact: { ambiguity: 1.4, stillness: 1.2 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.4, clarity: 0.6 } }
        ]
    },
    {
        id: "6.7",
        sceneId: "lane_golden",
        question: "Final crossroads. Which version of 'You' remains?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "6.7_a", text: "Be yourself, not a copy of your peers", response: "Authentic expansion. You are the original of yourself.", valueImpact: { expansion: 1.6, clarity: 1.5 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.9, clarity: 1.0 } },
            { id: "6.7_b", text: "Be the athlete they expect - the safe role", response: "Comfortable constraint. You fulfill the image they love.", valueImpact: { constraint: 1.5, stillness: 1.3 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.4, clarity: 0.9 } }
        ]
    }
];
