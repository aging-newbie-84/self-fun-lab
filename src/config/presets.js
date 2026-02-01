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
        sceneId: "living_room",
        question: "Family function tonight. Your grandfather wants you to come along.",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "2.1_a", text: "Go with him and meet the family", response: "You're showing up for family. Expanding your circle.", valueImpact: { expansion: 1.3, clarity: 1.1 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.8 } },
            { id: "2.1_b", text: "Make an excuse to stay home", response: "You're keeping things simple and sticking to yourself.", valueImpact: { constraint: 1.4, stillness: 1.2 }, backdropShift: { skyRatio: 0.1, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "3.5",
        sceneId: "bedroom",
        question: "Someone says something rude to you. How do you react?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.5, clarity: 0.9 },
        choices: [
            { id: "3.5_a", text: "Snap back immediately", response: "You reacted in the moment. Pure momentum.", valueImpact: { momentum: 1.5, ambiguity: 1.2 }, backdropShift: { particleSpeed: 'fast', colorTemperature: 0.8 } },
            { id: "3.5_b", text: "Stay calm and think before speaking", response: "You chose self-control. Clarity and stillness.", valueImpact: { stillness: 1.6, clarity: 1.4 }, backdropShift: { particleSpeed: 'stagnant', colorTemperature: 0.4 } }
        ]
    },
    {
        id: "4.1",
        sceneId: "temple",
        question: "You're bored at home alone. What do you do?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.7, clarity: 0.8 },
        choices: [
            { id: "4.1_a", text: "Start a creative project or code", response: "You're building something. Expansion through creation.", valueImpact: { expansion: 1.4, momentum: 1.2 }, backdropShift: { skyRatio: 0.7, clarity: 1.0 } },
            { id: "4.1_b", text: "Just scroll and chill", response: "Accepting the quiet. Sticking with what's easy.", valueImpact: { stillness: 1.3, constraint: 1.5 }, backdropShift: { skyRatio: 0.2, clarity: 0.6 } }
        ]
    },
    {
        id: "5.1",
        sceneId: "rooftop",
        question: "Your friends went to a movie without calling you. What now?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.4, clarity: 0.7 },
        choices: [
            { id: "5.1_a", text: "Ask them why you were excluded", response: "You're confronting the issue. Seeking clarity.", valueImpact: { momentum: 1.3, clarity: 1.5 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.6 } },
            { id: "5.1_b", text: "Pretend it's fine and say nothing", response: "Keeping the peace internally. Still and ambiguous.", valueImpact: { stillness: 1.4, ambiguity: 1.4 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "6.7",
        sceneId: "lane_golden",
        question: "Last choice. Which version of you are you showing the world today?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "6.7_a", text: "Be yourself, even if it's different", response: "Authentic and bold. You're expanding as yourself.", valueImpact: { expansion: 1.6, clarity: 1.5 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.9, clarity: 1.0 } },
            { id: "6.7_b", text: "Be the athlete they expect - the safe role", response: "Meeting expectations. Sticking to the plan.", valueImpact: { constraint: 1.5, stillness: 1.3 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.4, clarity: 0.9 } }
        ]
    },
    // --- ADDITIONAL DIVERSE SCENARIOS ---
    {
        id: "1.4",
        sceneId: "bedroom",
        question: "Homework is piling up, but friends are calling. What's the priority?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.4, clarity: 1.0 },
        choices: [
            { id: "1.4_a", text: "Finish homework first", response: "Responsibilities first. You chose focus and constraint.", valueImpact: { constraint: 1.4, clarity: 1.3 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.5 } },
            { id: "1.4_b", text: "Meet friends now, work later", response: "Going for the fun. Momentum over structure.", valueImpact: { momentum: 1.4, expansion: 1.2 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.7 } }
        ]
    },
    {
        id: "2.5",
        sceneId: "lane",
        question: "A friend you haven't seen in months wants to catch up. Do you make the effort?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.5, clarity: 0.7 },
        choices: [
            { id: "2.5_a", text: "Plan a big meetup to reconnect", response: "Bridges built. You're expanding your social world.", valueImpact: { expansion: 1.5, momentum: 1.3 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.6 } },
            { id: "2.5_b", text: "Let it fade naturally", response: "Accepting life as it is. Still and focused on the present.", valueImpact: { stillness: 1.4, constraint: 1.3 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "3.2",
        sceneId: "temple",
        question: "There's a volunteer event at a local shelter. Do you go?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "3.2_a", text: "Go and spend time helping out", response: "Stepping out of your bubble. High expansion and momentum.", valueImpact: { expansion: 1.5, momentum: 1.4 }, backdropShift: { skyRatio: 0.7, colorTemperature: 0.8 } },
            { id: "3.2_b", text: "Stay home where it's comfortable", response: "Sticking to your safe space. Deep stillness.", valueImpact: { stillness: 1.5, constraint: 1.4 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "3.4",
        sceneId: "bedroom",
        question: "You're trying to fix your sleep schedule. It's late. What do you do?",
        initialBackdrop: { skyRatio: 0.2, colorTemperature: 0.3, clarity: 1.0 },
        choices: [
            { id: "3.4_a", text: "Force yourself to go to bed now", response: "Self-discipline in action. Constraint and clarity.", valueImpact: { constraint: 1.5, clarity: 1.4 }, backdropShift: { skyRatio: 0.1, colorTemperature: 0.2 } },
            { id: "3.4_b", text: "Stay up and finish your video", response: "Following the moment. Mystery and momentum.", valueImpact: { momentum: 1.3, mystery: 1.2 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "4.2",
        sceneId: "living_room",
        question: "You're stuck on a difficult task. How do you find the answer?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.5, clarity: 0.6 },
        choices: [
            { id: "4.2_a", text: "Ask someone for help immediately", response: "Collaborating to solve it. Expansion and momentum.", valueImpact: { expansion: 1.3, momentum: 1.2 }, backdropShift: { skyRatio: 0.6, clarity: 0.9 } },
            { id: "4.2_b", text: "Struggle through it alone", response: "Finding your own way. Stillness and focus.", valueImpact: { stillness: 1.4, constraint: 1.5 }, backdropShift: { skyRatio: 0.2, clarity: 0.4 } }
        ]
    },
    {
        id: "5.5",
        sceneId: "school_bus",
        question: "Family is pushing you to be the best at sports. How do you feel?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "5.5_a", text: "Try your hardest to meet their goals", response: "Chasing the objective. Momentum and constraint.", valueImpact: { momentum: 1.4, constraint: 1.3 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.7 } },
            { id: "5.5_b", text: "Tell them you just want to be happy", response: "Choosing your own path. Expansion and mystery.", valueImpact: { expansion: 1.5, mystery: 1.4 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.5 } }
        ]
    },
    {
        id: "5.8",
        sceneId: "rooftop",
        question: "A close relationship is ending. How do you handle it?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.3, clarity: 0.5 },
        choices: [
            { id: "5.8_a", text: "Fight to save the relationship", response: "Putting in the work. High momentum.", valueImpact: { momentum: 1.6, expansion: 1.2 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.6 } },
            { id: "5.8_b", text: "Accept it and move on", response: "Letting go. Stillness and closure.", valueImpact: { stillness: 1.5, clarity: 1.4 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.2 } }
        ]
    },
    {
        id: "6.3",
        sceneId: "lane",
        question: "You have a hobby some people find weird. Do you talk about it?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.6, clarity: 0.7 },
        choices: [
            { id: "6.3_a", text: "Talk openly about what you love", response: "Owning your identity. Expansion and clarity.", valueImpact: { expansion: 1.4, clarity: 1.5 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.8 } },
            { id: "6.3_b", text: "Keep it to yourself", response: "A private passion. Constraint and mystery.", valueImpact: { constraint: 1.5, mystery: 1.4 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.4 } }
        ]
    }
];
