export const PRESETS = [
    // --- CATEGORY 1: AFTER-ACTIVITY ---
    {
        id: "1.1",
        sceneId: "school_bus",
        question: "School is out. The sun is dipping low. Where does your energy go?",
        initialBackdrop: { skyRatio: 0.4, particleDirection: "down", particleSpeed: "slow", colorTemperature: 0.5, clarity: 0.7 },
        choices: [
            { id: "1.1_a", text: "Head to a friend's place for snacks", response: "The day continues. You choose the warmth of shared momentum.", valueImpact: { momentum: 1.2, expansion: 0.8 }, backdropShift: { skyRatio: 0.5, particleDirection: "up", colorTemperature: 0.7 } },
            { id: "1.1_b", text: "Go straight home to your room", response: "A quiet retreat. You reclaim your own space in stillness.", valueImpact: { stillness: 1.2, constraint: 0.8 }, backdropShift: { skyRatio: 0.3, particleDirection: "none", colorTemperature: 0.4 } }
        ]
    },
    {
        id: "1.2",
        sceneId: "lane",
        question: "You see two groups of friends down the street. Which crowd pulls you in today?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "1.2_a", text: "Meet study-focused friends for homework", response: "You seek growth and clarity. The future feels a little more defined.", valueImpact: { expansion: 1.2, clarity: 1.1 }, backdropShift: { skyRatio: 0.4, clarity: 1.0 } },
            { id: "1.2_b", text: "Hang with the mischievous crew", response: "You embrace the unpredictable. The moment is all that matters.", valueImpact: { constraint: 0.8, ambiguity: 1.2 }, backdropShift: { skyRatio: 0.7, clarity: 0.5 } }
        ]
    },
    {
        id: "1.3",
        sceneId: "badminton",
        question: "Your body is tired but the evening is young. How do you spend these last hours?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "1.3_a", text: "Go to the gym or play badminton", response: "You push through the fatigue, finding a second wind in movement.", valueImpact: { momentum: 1.3, expansion: 0.9 }, backdropShift: { skyRatio: 0.6, particleSpeed: "fast", colorTemperature: 0.7 } },
            { id: "1.3_b", text: "Watch TV or play video games", response: "You let the day settle, choosing the soft comfort of rest.", valueImpact: { stillness: 1.3, constraint: 1.1 }, backdropShift: { skyRatio: 0.2, particleSpeed: "slow", colorTemperature: 0.4 } }
        ]
    },
    {
        id: "1.4",
        sceneId: "bedroom",
        question: "Responsibilities are piling up. Do you tackle them now or let them wait?",
        initialBackdrop: { skyRatio: 0.2, colorTemperature: 0.4, clarity: 0.9 },
        choices: [
            { id: "1.4_a", text: "Finish your homework and chores first", response: "You find clarity in order. The path ahead is cleared of static.", valueImpact: { constraint: 1.3, clarity: 1.2 }, backdropShift: { skyRatio: 0.4, clarity: 1.0 } },
            { id: "1.4_b", text: "Prioritize what you want to do instead", response: "You choose your own expansion. The rules can wait for a while.", valueImpact: { expansion: 1.3, ambiguity: 1.1 }, backdropShift: { skyRatio: 0.8, clarity: 0.6 } }
        ]
    },
    {
        id: "1.5",
        sceneId: "living_room",
        question: "The afternoon is a blank canvas. Do you create something or consume content?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "1.5_a", text: "Try a new creative project or experiment", response: "You expand your world by adding to it. Effort becomes expression.", valueImpact: { expansion: 1.4, momentum: 1.1 }, backdropShift: { skyRatio: 0.7, colorTemperature: 0.7 } },
            { id: "1.5_b", text: "Watch a movie or scroll YouTube", response: "You settle into stillness, letting the world's stories carry you.", valueImpact: { constraint: 1.1, stillness: 1.4 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "1.6",
        sceneId: "bedroom",
        question: "The silence feels heavy. Do you reach out to someone or stay private?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.4, clarity: 0.7 },
        choices: [
            { id: "1.6_a", text: "Call or message a friend to catch up", response: "You break the solitude. Expansion comes through shared breath.", valueImpact: { expansion: 1.2, momentum: 1.1 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.6 } },
            { id: "1.6_b", text: "Keep to yourself and process alone", response: "You protect your inner stillness. Reflection is a quiet necessity.", valueImpact: { constraint: 1.2, stillness: 1.3 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.2 } }
        ]
    },
    {
        id: "1.7",
        sceneId: "car",
        question: "An opportunity to go somewhere exciting appears. Do you go out or stay home?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "1.7_a", text: "Go watch a movie or hang out at a cafe", response: "You catch the momentum. The world is waiting outside the door.", valueImpact: { expansion: 1.3, momentum: 1.2 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.7 } },
            { id: "1.7_b", text: "Have a quiet night in by yourself", response: "You reclaim your stillness. Home is the anchor for your energy.", valueImpact: { constraint: 1.3, stillness: 1.4 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "1.8",
        sceneId: "bedroom",
        question: "The screen is calling. Do you lose yourself in it or do something real?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.4, clarity: 0.6 },
        choices: [
            { id: "1.1_a", text: "Engage in real-world activity or gym", response: "You reclaim your momentum. Focus returns to the physical.", valueImpact: { momentum: 1.4, clarity: 1.2 }, backdropShift: { skyRatio: 0.6, clarity: 0.9 } },
            { id: "1.8_b", text: "Stay glued to your screen after school", response: "The ambiguity of the scroll takes hold. Time blurs in the blue light.", valueImpact: { stillness: 1.1, ambiguity: 1.4 }, backdropShift: { skyRatio: 0.2, clarity: 0.3 } }
        ]
    },

    // --- CATEGORY 2: SOCIAL MOMENTS ---
    {
        id: "2.1",
        sceneId: "temple",
        question: "A family elder asks you to attend a wedding or function. Do you join them?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.6, clarity: 1.0 },
        choices: [
            { id: "2.1_a", text: "Go and meet the relatives with them", response: "You bridge the gap. Shared history provides a sense of clarity.", valueImpact: { expansion: 1.2, clarity: 1.3 }, backdropShift: { skyRatio: 0.7, colorTemperature: 0.8 } },
            { id: "2.1_b", text: "Skip the event and stay home", response: "You set a boundary. You protect your own expansion.", valueImpact: { constraint: 1.2, ambiguity: 1.1 }, backdropShift: { skyRatio: 0.1, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "2.2",
        sceneId: "badminton",
        question: "A training session or club meeting is coming up. Do you join a group or practice solo?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.6, clarity: 0.9 },
        choices: [
            { id: "2.2_a", text: "Participate in group sports or tuition", response: "The collective energy fuels your expansion. You grow through others.", valueImpact: { expansion: 1.3, momentum: 1.1 }, backdropShift: { skyRatio: 0.7, particleDirection: 'up' } },
            { id: "2.2_b", text: "Practice alone to focus on yourself", response: "You find strength in constraint. The quiet work is where precision lives.", valueImpact: { constraint: 1.3, stillness: 1.2 }, backdropShift: { skyRatio: 0.3, particleDirection: 'none' } }
        ]
    },
    {
        id: "2.3",
        sceneId: "field",
        question: "Local kids are playing in the neighborhood. Do you join the mixed-age game?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.7, clarity: 0.9 },
        choices: [
            { id: "2.3_a", text: "Jump in and play with the local boys", response: "You embrace the chaos. Expansion is found in new intersections.", valueImpact: { expansion: 1.4, momentum: 1.3 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.8 } },
            { id: "2.3_b", text: "Skip it - it's not your usual group", response: "You preserve your energy. Stillness is a choice to wait for your own.", valueImpact: { constraint: 1.4, stillness: 1.4 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.6 } }
        ]
    },
    {
        id: "2.4",
        sceneId: "school_bus",
        question: "A group trip is being organized with people you don't know well. Do you go?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "2.4_a", text: "Go on the trip and get to know them", response: "You step into the unknown. Expansion is often uncomfortable at first.", valueImpact: { expansion: 1.5, clarity: 1.1 }, backdropShift: { skyRatio: 0.8, clarity: 0.9 } },
            { id: "2.4_b", text: "Prefer traveling with close friends only", response: "You find safety in constraint. Clarity is found in familiar faces.", valueImpact: { constraint: 1.5, ambiguity: 0.9 }, backdropShift: { skyRatio: 0.3, clarity: 0.7 } }
        ]
    },
    {
        id: "2.5",
        sceneId: "junction",
        question: "Friends who moved away are inviting you to meet far off. Do you make the effort?",
        initialBackdrop: { skyRatio: 0.7, colorTemperature: 0.6, clarity: 0.7 },
        choices: [
            { id: "2.5_a", text: "Plan and travel to see distant friends", response: "You bridge the miles with momentum. The effort honors the past.", valueImpact: { momentum: 1.4, expansion: 1.3 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.8 } },
            { id: "2.5_b", text: "Let those friendships naturally fade", response: "You accept the constraint of distance. Stillness settles between you.", valueImpact: { stillness: 1.4, constraint: 1.3 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.4 } }
        ]
    },

    // --- CATEGORY 3: CHALLENGE / UNCERTAINTY ---
    {
        id: "3.1",
        sceneId: "temple",
        question: "An unfamiliar religious ritual or practice is suggested. Do you participate?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.5, clarity: 0.6 },
        choices: [
            { id: "3.1_a", text: "Follow the prayers and learn the ritual", response: "You seek clarity in tradition. Momentum starts with the first step.", valueImpact: { momentum: 1.2, clarity: 1.4 }, backdropShift: { skyRatio: 0.6, clarity: 1.0 } },
            { id: "3.1_b", text: "Stay in your comfort zone spiritually", response: "You find stillness in what you know. Ambiguity is left outside the gate.", valueImpact: { stillness: 1.2, ambiguity: 1.2 }, backdropShift: { skyRatio: 0.1, clarity: 0.4 } }
        ]
    },
    {
        id: "3.2",
        sceneId: "field",
        question: "A chance to volunteer for a difficult community task arises. Do you step up?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "3.2_a", text: "Volunteer even if it's uncomfortable", response: "You push your momentum. Growth is the expansion of your empathy.", valueImpact: { momentum: 1.5, expansion: 1.3 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.7 } },
            { id: "3.2_b", text: "Decline and stay in your comfort bubble", response: "You choose stillness. Constraint protects you from the unknown burden.", valueImpact: { stillness: 1.5, constraint: 1.3 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.5 } }
        ]
    },
    {
        id: "3.3",
        sceneId: "badminton",
        question: "You're learning a new skill. Do you need exact rules or your own way?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "3.3_a", text: "Follow the master's steps exactly", response: "You seek clarity in tradition. The proven path is your foundation.", valueImpact: { clarity: 1.5, constraint: 1.2 }, backdropShift: { skyRatio: 0.4, clarity: 1.0 } },
            { id: "3.3_b", text: "Experiment and see what happens", response: "You embrace the ambiguity. The mystery of trial is where you grow.", valueImpact: { ambiguity: 1.5, expansion: 1.2 }, backdropShift: { skyRatio: 0.6, clarity: 0.5 } }
        ]
    },
    {
        id: "3.4",
        sceneId: "bedroom",
        question: "A friend suggests a radical change to your habits (sleep/food). Do you try it?",
        initialBackdrop: { skyRatio: 0.2, colorTemperature: 0.4, clarity: 0.7 },
        choices: [
            { id: "3.4_a", text: "Disrupt your schedule and try it", response: "You force the momentum. Change is the catalyst for expansion.", valueImpact: { momentum: 1.3, expansion: 1.2 }, backdropShift: { skyRatio: 0.5, colorTemperature: 0.6 } },
            { id: "3.4_b", text: "Stick to the routine you already know", response: "You find stillness in the familiar. Constraint provides consistency.", valueImpact: { stillness: 1.4, constraint: 1.5 }, backdropShift: { skyRatio: 0.1, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "3.5",
        sceneId: "lane",
        question: "Someone is irritating you. Do you control your reaction or snap back?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.6, clarity: 0.9 },
        choices: [
            { id: "3.5_a", text: "Keep calm and stay respectful", response: "You find clarity in your own silence. Stillness is a superior choice.", valueImpact: { stillness: 1.6, clarity: 1.4 }, backdropShift: { skyRatio: 0.3, clarity: 1.0, colorTemperature: 0.4 } },
            { id: "3.5_b", text: "Snap back and react naturally", response: "You release the momentum. The ambiguity of the conflict flares.", valueImpact: { momentum: 1.4, ambiguity: 1.3 }, backdropShift: { skyRatio: 0.7, clarity: 0.3, colorTemperature: 0.8 } }
        ]
    },
    {
        id: "3.6",
        sceneId: "rooftop",
        question: "You want to test a new habit to see if it works. Do you commit to a trial?",
        initialBackdrop: { skyRatio: 0.7, colorTemperature: 0.7, clarity: 0.6 },
        choices: [
            { id: "3.6_a", text: "Commit to a 2-week trial and track results", response: "You drive the momentum. Clarity is earned through the experiment.", valueImpact: { momentum: 1.4, clarity: 1.5 }, backdropShift: { skyRatio: 0.4, clarity: 1.0 } },
            { id: "3.6_b", text: "Don't risk changing what works", response: "You choose stillness. Stillness protects the constraint of the known.", valueImpact: { stillness: 1.4, constraint: 1.4 }, backdropShift: { skyRatio: 0.9, clarity: 0.5 } }
        ]
    },
    {
        id: "3.7",
        sceneId: "bridge",
        question: "You've made a mistake. Do you analyze it deeply or move forward fast?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.5, clarity: 0.5 },
        choices: [
            { id: "3.7_a", text: "Analyze what went wrong exactly", response: "You demand clarity from the failure. Stillness allows for real wisdom.", valueImpact: { stillness: 1.4, clarity: 1.5 }, backdropShift: { skyRatio: 0.3, clarity: 1.0 } },
            { id: "3.7_b", text: "Forget it and focus on the next match", response: "You maintain the momentum. The past is left in the ambiguity of dusk.", valueImpact: { momentum: 1.5, ambiguity: 1.3 }, backdropShift: { skyRatio: 0.8, clarity: 0.3 } }
        ]
    },
    {
        id: "3.8",
        sceneId: "bridge",
        question: "A massive, time-demanding opportunity appears. Do you sacrifice comfort for growth?",
        initialBackdrop: { skyRatio: 0.8, colorTemperature: 0.7, clarity: 0.9 },
        choices: [
            { id: "3.8_a", text: "Sacrifice comfort and commit fully", response: "You push your momentum to the limit. Expansion is born from pressure.", valueImpact: { momentum: 1.7, expansion: 1.5 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.9 } },
            { id: "3.8_b", text: "Maintain your current balance instead", response: "You find stillness in the sustainable. Constraint keeps you steady.", valueImpact: { stillness: 1.7, constraint: 1.5 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.5 } }
        ]
    },

    // --- CATEGORY 4: ALONE TIME ---
    {
        id: "4.1",
        sceneId: "living_room",
        question: "Boredom is setting in. Do you pick up a project or a screen?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "4.1_a", text: "Journal or work on a skill you want", response: "You expand through effort. Every action is a building block.", valueImpact: { expansion: 1.4, momentum: 1.2 }, backdropShift: { skyRatio: 0.7, colorTemperature: 0.7 } },
            { id: "4.1_b", text: "Look at your phone or scroll social media", response: "You settle into stillness. The ambiguity of the digital world takes over.", valueImpact: { constraint: 1.1, ambiguity: 1.4 }, backdropShift: { skyRatio: 0.1, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "4.2",
        sceneId: "bedroom",
        question: "You're stuck on a personal problem. Do you talk to someone or think it through?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.4, clarity: 0.6 },
        choices: [
            { id: "4.2_a", text: "Call a friend or family member for advice", response: "Expansion comes through connection. Clarity is found in other voices.", valueImpact: { expansion: 1.3, clarity: 1.2 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.6 } },
            { id: "4.2_b", text: "Journal and process it privately", response: "Stillness provides the space. Constraint allows you to focus inward.", valueImpact: { stillness: 1.5, constraint: 1.4 }, backdropShift: { skyRatio: 0.1, colorTemperature: 0.2 } }
        ]
    },
    {
        id: "4.3",
        sceneId: "rooftop_golden",
        question: "The whole day is free. Do you plan it meticulously or let it flow?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.7, clarity: 0.9 },
        choices: [
            { id: "4.3_a", text: "Plan the day in advance and execute", response: "You drive the momentum. Clarity is found in the structure.", valueImpact: { momentum: 1.4, clarity: 1.4 }, backdropShift: { skyRatio: 0.3, clarity: 1.0 } },
            { id: "4.3_b", text: "Flow through the day without a plan", response: "You choose stillness. Stillness allows for the expansion of chance.", valueImpact: { stillness: 1.4, expansion: 1.4 }, backdropShift: { skyRatio: 0.8, clarity: 0.4 } }
        ]
    },
    {
        id: "4.4",
        sceneId: "rooftop_twilight",
        question: "Loneliness is creeping in. Do you fight it by calling someone or sit with it?",
        initialBackdrop: { skyRatio: 0.8, colorTemperature: 0.4, clarity: 0.5 },
        choices: [
            { id: "4.4_a", text: "Organize a meetup or call people", response: "You break the solitude with momentum. Expansion is a social act.", valueImpact: { momentum: 1.4, expansion: 1.3 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.6 } },
            { id: "4.4_b", text: "Sit with it and process the feeling", response: "You find stillness in the solitude. Stillness is where you meet yourself.", valueImpact: { stillness: 1.6, constraint: 1.4 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.2 } }
        ]
    },
    {
        id: "4.5",
        sceneId: "bedroom",
        question: "Difficult homework is in front of you. Do you seek help or figure it out?",
        initialBackdrop: { skyRatio: 0.2, colorTemperature: 0.4, clarity: 1.0 },
        choices: [
            { id: "4.5_a", text: "Ask friends or tutors for help", response: "You seek clarity through others. Expansion comes from shared knowledge.", valueImpact: { expansion: 1.2, clarity: 1.5 }, backdropShift: { skyRatio: 0.5, clarity: 1.0 } },
            { id: "4.5_b", text: "Struggle through it on your own first", response: "You find strength in constraint. The ambiguity of the struggle is growth.", valueImpact: { constraint: 1.5, ambiguity: 1.3 }, backdropShift: { skyRatio: 0.7, clarity: 0.4 } }
        ]
    },

    // --- CATEGORY 5: CONFLICT / HARD FEELINGS ---
    {
        id: "5.1",
        sceneId: "rooftop",
        question: "Your friends left you out of a plan. Do you ask them why, or keep quiet?",
        initialBackdrop: { skyRatio: 0.6, colorTemperature: 0.4, clarity: 0.7 },
        choices: [
            { id: "5.1_a", text: "Ask them why you were left out", response: "You break the silence with momentum. Clarity is worth the friction.", valueImpact: { momentum: 1.4, clarity: 1.4 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.6 } },
            { id: "5.1_b", text: "Let it go, stay at peace", response: "You find stillness in the center. Constraint protects your pride.", valueImpact: { stillness: 1.5, constraint: 1.4 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "5.2",
        sceneId: "lane_dusk",
        question: "Gossip about you is spreading. Do you clear your name or let it fade?",
        initialBackdrop: { skyRatio: 0.8, colorTemperature: 0.3, clarity: 0.4 },
        choices: [
            { id: "5.2_a", text: "Confront them about speaking behind you", response: "You seize the momentum. Clarity is the weapon against rumors.", valueImpact: { momentum: 1.5, clarity: 1.6 }, backdropShift: { skyRatio: 0.6, clarity: 1.0 } },
            { id: "5.2_b", text: "Don't engage - the truth will surface", response: "You find stillness in patience. Any ambiguity is temporary.", valueImpact: { stillness: 1.6, ambiguity: 1.4 }, backdropShift: { skyRatio: 0.3, clarity: 0.2 } }
        ]
    },
    {
        id: "5.3",
        sceneId: "rooftop_twilight",
        question: "A friend shared your secret. Do you get angry or try to understand them?",
        initialBackdrop: { skyRatio: 0.8, colorTemperature: 0.4, clarity: 0.6 },
        choices: [
            { id: "5.3_a", text: "Tell them off for the betrayal", response: "You release the energy. Momentum is restored through expression.", valueImpact: { momentum: 1.5, clarity: 1.3 }, backdropShift: { skyRatio: 0.5, colorTemperature: 0.7 } },
            { id: "5.3_b", text: "Assume it was immaturity, not malice", response: "You find stillness in wisdom. Stillness allows for the ambiguity of intent.", valueImpact: { stillness: 1.6, ambiguity: 1.5 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "5.4",
        sceneId: "school_bus",
        question: "Physical distance is pulling your friend group apart. Do you fight it?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "5.4_a", text: "Express frustration and try to meet", response: "You push against the constraint. Momentum is your bridge.", valueImpact: { momentum: 1.4, expansion: 1.4 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.7 } },
            { id: "5.4_b", text: "Accept that circumstances change", response: "You find stillness in the flow. Stillness is how you handle loss.", valueImpact: { stillness: 1.5, constraint: 1.4 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "5.5",
        sceneId: "bedroom",
        question: "Family is pushing you toward a goal you don't want. Do you meet it or push back?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.5, clarity: 0.9 },
        choices: [
            { id: "5.5_a", text: "Try to meet the high expectations", response: "You find clarity in the goal. Constraint is the fuel for discipline.", valueImpact: { constraint: 1.6, clarity: 1.4 }, backdropShift: { skyRatio: 0.1, clarity: 1.0 } },
            { id: "5.5_b", text: "Follow your own happiness instead", response: "You choose expansion. Your path is built by the steps you own.", valueImpact: { expansion: 1.7, ambiguity: 1.5 }, backdropShift: { skyRatio: 0.9, clarity: 0.5 } }
        ]
    },
    {
        id: "5.7",
        sceneId: "bridge",
        question: "Something feels deeply unfair despite your hard work. How do you respond?",
        initialBackdrop: { skyRatio: 0.8, colorTemperature: 0.6, clarity: 0.7 },
        choices: [
            { id: "5.7_a", text: "Fight for change and demand coaching", response: "You demand the momentum. Clarity is the start of justice.", valueImpact: { momentum: 1.6, clarity: 1.5 }, backdropShift: { skyRatio: 1.0, colorTemperature: 0.9 } },
            { id: "5.7_b", text: "Accept that effort doesn't always win", response: "You find stillness in reality. Constraint is the boundary of life.", valueImpact: { stillness: 1.7, constraint: 1.6 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "5.8",
        sceneId: "rooftop_twilight",
        question: "A close relationship is ending. Do you fight to save it or move on?",
        initialBackdrop: { skyRatio: 0.9, colorTemperature: 0.3, clarity: 0.4 },
        choices: [
            { id: "5.8_a", text: "Fight to save the relationship", response: "You seize the momentum. Clarity is found in the final conversation.", valueImpact: { momentum: 1.6, clarity: 1.5 }, backdropShift: { skyRatio: 0.6, colorTemperature: 0.6 } },
            { id: "5.8_b", text: "Grieve privately and start fresh", response: "You find stillness in the end. Stillness allows for the next beginning.", valueImpact: { stillness: 1.7, ambiguity: 1.6 }, backdropShift: { skyRatio: 1.0, colorTemperature: 0.2 } }
        ]
    },

    // --- CATEGORY 6: AUTHENTICITY / IDENTITY ---
    {
        id: "6.1",
        sceneId: "living_room",
        question: "You're around family and feel the urge to mask. Do you show your real self?",
        initialBackdrop: { skyRatio: 0.4, colorTemperature: 0.6, clarity: 0.9 },
        choices: [
            { id: "6.1_a", text: "Show your real, messy personality", response: "You break the constraint. Clarity is found in being honest.", valueImpact: { clarity: 1.5, expansion: 1.4 }, backdropShift: { skyRatio: 0.8, clarity: 1.0 } },
            { id: "6.1_b", text: "Be who they expect you to be", response: "You choose the safety of the role. Stillness hides the mystery.", valueImpact: { stillness: 1.4, ambiguity: 1.5 }, backdropShift: { skyRatio: 0.1, clarity: 0.6 } }
        ]
    },
    {
        id: "6.2",
        sceneId: "lane_golden",
        question: "Everyone is following a hollow trend. Do you speak up or stay silent?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.6, clarity: 0.8 },
        choices: [
            { id: "6.2_a", text: "Say it's dumb and own your opinion", response: "You choose clarity. Authenticity is a quiet rebellion.", valueImpact: { clarity: 1.6, expansion: 1.3 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.9, clarity: 1.0 } },
            { id: "6.2_b", text: "Keep your thoughts private to fit in", response: "You find stillness in the ambiguity. Stillness is your armor.", valueImpact: { stillness: 1.5, ambiguity: 1.5 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.3, clarity: 0.7 } }
        ]
    },
    {
        id: "6.3",
        sceneId: "bedroom",
        question: "You're interested in something niche (psychology/finance). Do you go public?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.5, clarity: 0.8 },
        choices: [
            { id: "6.3_a", text: "Talk openly about your interest", response: "You expand the circle. Clarity allows for real connection.", valueImpact: { expansion: 1.5, clarity: 1.6 }, backdropShift: { skyRatio: 0.7, clarity: 1.0 } },
            { id: "6.3_b", text: "Pursue it privately and don't tell anyone", response: "You protect the mystery. Constraint is where deep work is done.", valueImpact: { constraint: 1.5, ambiguity: 1.7 }, backdropShift: { skyRatio: 0.1, clarity: 0.4 } }
        ]
    },
    {
        id: "6.4",
        sceneId: "lane_golden",
        question: "You changed your mind about something big. Do you own it or hide it?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.7, clarity: 0.7 },
        choices: [
            { id: "6.4_a", text: "Explain that you used to be wrong", response: "You embrace the clarity of change. Growth is an act of courage.", valueImpact: { clarity: 1.7, momentum: 1.4 }, backdropShift: { skyRatio: 0.9, clarity: 1.0 } },
            { id: "6.4_b", text: "Shift silently without explaining why", response: "You find stillness in the transition. Some changes are quiet.", valueImpact: { stillness: 1.6, ambiguity: 1.5 }, backdropShift: { skyRatio: 0.3, colorTemperature: 0.4 } }
        ]
    },
    {
        id: "6.5",
        sceneId: "lane",
        question: "People find something weird about you. Do you defend it or apologize?",
        initialBackdrop: { skyRatio: 0.5, colorTemperature: 0.6, clarity: 0.7 },
        choices: [
            { id: "6.5_a", text: "Defend it - it's just who you are", response: "You seize the momentum. Clarity is the weapon of the individual.", valueImpact: { momentum: 1.5, clarity: 1.7 }, backdropShift: { skyRatio: 0.8, colorTemperature: 0.8 } },
            { id: "6.5_b", text: "Apologize and try to blend in better", response: "You choose stillness. Stillness hides the edges that don't fit.", valueImpact: { stillness: 1.5, constraint: 1.6 }, backdropShift: { skyRatio: 0.2, colorTemperature: 0.3 } }
        ]
    },
    {
        id: "6.6",
        sceneId: "lane_dusk",
        question: "Distance yourself from toxic peers or stay connected?",
        initialBackdrop: { skyRatio: 0.8, colorTemperature: 0.4, clarity: 0.5 },
        choices: [
            { id: "6.6_a", text: "Step back even if it's lonely", response: "You choose the clarity of solitude. Expansion requires cutting dead weight.", valueImpact: { expansion: 1.6, clarity: 1.7 }, backdropShift: { skyRatio: 0.4, colorTemperature: 0.2 } },
            { id: "6.6_b", text: "Stay cool with everyone despite toxic vibes", response: "You find stillness in neutrality. Ambiguity allows you to survive.", valueImpact: { stillness: 1.5, ambiguity: 1.6 }, backdropShift: { skyRatio: 0.9, colorTemperature: 0.5 } }
        ]
    },
    {
        id: "6.7",
        sceneId: "badminton_quiet",
        question: "Your interests differ from your sports peers. Do you show your full self?",
        initialBackdrop: { skyRatio: 0.3, colorTemperature: 0.5, clarity: 0.7 },
        choices: [
            { id: "6.7_a", text: "Be the athlete and the intellectual", response: "You choose expansion. Your identity is a multifaceted clarity.", valueImpact: { expansion: 1.7, clarity: 1.6 }, backdropShift: { skyRatio: 0.7, clarity: 0.9 } },
            { id: "6.7_b", text: "Be the athlete they expect you to be", response: "You find stillness in the role. Constraint is where performance sits.", valueImpact: { stillness: 1.6, constraint: 1.7 }, backdropShift: { skyRatio: 0.1, clarity: 0.4 } }
        ]
    }
];
