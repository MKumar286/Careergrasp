const coursesData = [
    { 
        id: 1, 
        title: "English Communication & Public Speaking Mastery", 
        desc: "Overcome hesitation, build vocabulary, and speak fluently in public and formal setups.", 
        duration: "24 Hours", 
        modules: "18 Modules", 
        price: "3499", 
        img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80", 
        overview: "Mastering public speaking and everyday English communication requires confidence and conversational fluidity." 
    },
    { 
        id: 2, 
        title: "Mind Programming & Goal Manifestation", 
        desc: "Subconscious alignment, affirmation routines, and structured visualization techniques.", 
        duration: "15 Hours", 
        modules: "10 Modules", 
        price: "2999", 
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80", 
        overview: "Unlock the power of your subconscious mind through structured visualization and affirmation routines." 
    },
    { 
        id: 3, 
        title: "Campus Recruitment & Aptitude Strategy", 
        desc: "Clear quantitative, logical reasoning, and HR interview screening rounds with speed math.", 
        duration: "40 Hours", 
        modules: "30 Modules", 
        price: "4999", 
        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80", 
        overview: "Crack company recruitment drives with precision, shortcut techniques, and numerical accuracy." 
    },
    { 
        id: 4, 
        title: "Corporate Soft Skills & Professional Etiquette", 
        desc: "Business email correspondence, workspace etiquette, and stakeholder negotiation tactics.", 
        duration: "20 Hours", 
        modules: "15 Modules", 
        price: "3999", 
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80", 
        overview: "Navigate corporate culture confidently with masterclass executive communication and business decorum." 
    },
    { 
        id: 5, 
        title: "Effective Study Habits & Exam Strategy for High School", 
        desc: "Active recall memory techniques, study schedules, and quick revision strategies.", 
        duration: "12 Hours", 
        modules: "8 Modules", 
        price: "1999", 
        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80", 
        overview: "Transform studying habits with active recall, spaced repetition, and mind mapping." 
    },
    { 
        id: 6, 
        title: "Presentation Skills & Visual Storytelling", 
        desc: "Design slide deck architecture and deliver compelling technical and business pitches.", 
        duration: "10 Hours", 
        modules: "7 Modules", 
        price: "2499", 
        img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80", 
        overview: "Turn complex technical or business data into compelling visual stories and audience-engaging decks." 
    },
    { 
        id: 7, 
        title: "Executive Leadership & Team Management", 
        desc: "Delegation frameworks, dispute resolution, and team alignment strategies.", 
        duration: "30 Hours", 
        modules: "20 Modules", 
        price: "5999", 
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80", 
        overview: "Transition smoothly from an individual contributor to a respected, high-performing team lead." 
    },
    { 
        id: 8, 
        title: "Grammar Foundations & Professional Vocabulary", 
        desc: "Master sentence structure, eliminate grammatical errors, and expand business vocabulary.", 
        duration: "16 Hours", 
        modules: "12 Modules", 
        price: "1499", 
        img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80", 
        overview: "Build absolute structural clarity in your written and spoken professional English." 
    },
    { 
        id: 9, 
        title: "Resume Building & Personal Branding", 
        desc: "Craft ATS-optimized resumes and build an impactful, recruiter-friendly LinkedIn profile.", 
        duration: "8 Hours", 
        modules: "5 Modules", 
        price: "1999", 
        img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80", 
        overview: "Write high-impact ATS-friendly resumes and leverage LinkedIn to attract top recruiter inquiries." 
    },
    { 
        id: 10, 
        title: "Critical Thinking & Decision Making", 
        desc: "Root-cause analysis, decision matrices, and cognitive bias elimination.", 
        duration: "14 Hours", 
        modules: "10 Modules", 
        price: "3299", 
        img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80", 
        overview: "Learn structured decision-making frameworks, 5 Whys, and cognitive bias elimination." 
    },
    { 
        id: 11, 
        title: "Time Management & Peak Productivity", 
        desc: "Eliminate procrastination using priority matrices, pomodoro focus, and time blocking.", 
        duration: "9 Hours", 
        modules: "6 Modules", 
        price: "1799", 
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80", 
        overview: "Implement Eisenhower matrices, GTD systems, and deep-work focus protocols into daily routines." 
    },
    { 
        id: 12, 
        title: "Interview Coaching & Mock Practice", 
        desc: "Simulated mock interviews with live evaluator scoring and STAR technique practice.", 
        duration: "18 Hours", 
        modules: "12 Modules", 
        price: "4499", 
        img: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=1000&q=80", 
        overview: "Master high-stakes technical and HR job interviews with STAR method answer formulations." 
    },
    { 
        id: 13, 
        title: "Academic Systems & School LMS Architecture", 
        desc: "Design structured learning management workflows and blended classroom curricula.", 
        duration: "25 Hours", 
        modules: "16 Modules", 
        price: "6499", 
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80", 
        overview: "Design modern blended learning curricula and incorporate LMS technology into educational institutions." 
    },
    { 
        id: 14, 
        title: "Emotional Intelligence for Career Growth", 
        desc: "Develop self-regulation, empathy, emotional resilience, and constructive interpersonal skills.", 
        duration: "12 Hours", 
        modules: "9 Modules", 
        price: "2799", 
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80", 
        overview: "Master EQ as the ultimate differentiator for workplace relationship management and career acceleration." 
    },
    { 
        id: 15, 
        title: "Group Discussion (GD) Mastery Program", 
        desc: "Initiate, summarize, and lead GD rounds in campus placement selection drives.", 
        duration: "11 Hours", 
        modules: "8 Modules", 
        price: "2199", 
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80", 
        overview: "Master tactical entry strategies, factual consensus building, and abstract topic preparation." 
    }
];
