const QUIZ_DATA = {
  title: "TOEFL Complete Practice Test",
  description: "Structure, Listening, Reading, Speaking & Writing",
  totalTime: 5400, // 90 minutes in seconds
  questions: [
    // === STRUCTURE (Multiple Choice) ===
    {
      id: 1, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "The north pole _____ a latitude of 90 degrees north.",
      options: ["has", "is", "it has", "is having"],
      answer: 0,
      points: 10
    },
    {
      id: 2, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "_____ greyhound can reach speeds of over 45 miles per hour.",
      options: ["The fastest dog", "The fastest dog, the", "The fastest dog is the", "Dog is the fastest"],
      answer: 0,
      points: 10
    },
    {
      id: 3, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "The city of Montreal _____ on an island in the Saint Lawrence River.",
      options: ["is located", "it is located", "located", "which is located"],
      answer: 0,
      points: 10
    },
    {
      id: 4, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "_____ that the English settled in Jamestown in 1607.",
      options: ["In 1607", "It was", "That in 1607", "Because"],
      answer: 1,
      points: 10
    },
    {
      id: 5, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "Neither the students nor the teacher _____ ready for the exam.",
      options: ["were", "was", "are", "have been"],
      answer: 1,
      points: 10
    },
    {
      id: 6, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "The committee _____ its decision tomorrow morning.",
      options: ["will announces", "will announce", "announces", "is announce"],
      answer: 1,
      points: 10
    },
    {
      id: 7, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "It is essential that every student _____ the rules.",
      options: ["follows", "follow", "will follow", "has followed"],
      answer: 1,
      points: 10
    },
    {
      id: 8, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "The book that I borrowed from the library _____ very interesting.",
      options: ["are", "is", "were", "have been"],
      answer: 1,
      points: 10
    },
    {
      id: 9, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "Had it not been for the rain, we _____ the picnic.",
      options: ["would enjoy", "enjoyed", "would have enjoyed", "had enjoyed"],
      answer: 2,
      points: 10
    },
    {
      id: 10, type: "multiple_choice", section: "Structure",
      icon: "📝",
      text: "The man _____ you met yesterday is my professor.",
      options: ["who", "which", "whom", "whose"],
      answer: 2,
      points: 10
    },

    // === LISTENING (Audio Simulation) ===
    {
      id: 11, type: "listening", section: "Listening",
      icon: "🎧",
      audio_desc: "Listen to a conversation between two students discussing their research paper.",
      simulated_script: "Student A: 'I'm having trouble with the conclusion of my research paper.' Student B: 'Maybe you should restate your thesis and summarize the main points.'",
      text: "What is Student A's problem?",
      options: [
        "She cannot start her paper",
        "She is struggling with the conclusion",
        "She lost her research notes",
        "She doesn't understand the topic"
      ],
      answer: 1,
      points: 15
    },
    {
      id: 12, type: "listening", section: "Listening",
      icon: "🎧",
      audio_desc: "Listen to a short lecture about climate change.",
      simulated_script: "Professor: 'Carbon dioxide levels have risen dramatically since the industrial revolution, primarily due to fossil fuel combustion and deforestation.'",
      text: "According to the lecture, what is the primary cause of rising CO₂ levels?",
      options: [
        "Volcanic eruptions",
        "Fossil fuel combustion and deforestation",
        "Ocean evaporation",
        "Animal respiration"
      ],
      answer: 1,
      points: 15
    },
    {
      id: 13, type: "listening", section: "Listening",
      icon: "🎧",
      audio_desc: "Listen to an announcement at a university campus.",
      simulated_script: "Announcement: 'The library will be closed this Friday for annual maintenance. All books must be returned by Thursday 5 PM.'",
      text: "When is the deadline to return library books?",
      options: [
        "Friday morning",
        "Thursday 5 PM",
        "Saturday noon",
        "Wednesday evening"
      ],
      answer: 1,
      points: 15
    },
    {
      id: 14, type: "listening", section: "Listening",
      icon: "🎧",
      audio_desc: "Listen to a conversation between a student and an advisor.",
      simulated_script: "Advisor: 'You need 3 more credits to graduate. You can either take one 3-credit elective or two 1.5-credit seminars.'",
      text: "How many more credits does the student need to graduate?",
      options: ["2", "4", "3", "5"],
      answer: 2,
      points: 15
    },
    {
      id: 15, type: "listening", section: "Listening",
      icon: "🎧",
      audio_desc: "Listen to a professor discussing the water cycle.",
      simulated_script: "Professor: 'Evaporation, condensation, and precipitation are the three main stages of the water cycle. Each stage is interconnected.'",
      text: "Which of the following is NOT mentioned as a stage of the water cycle?",
      options: [
        "Evaporation",
        "Filtration",
        "Condensation",
        "Precipitation"
      ],
      answer: 1,
      points: 15
    },

    // === VIDEO PREVIEW ===
    {
      id: 16, type: "video", section: "Video",
      icon: "🎬",
      video_desc: "Watch this video clip showing a debate about renewable energy policy in the U.S. Senate.",
      video_thumbnail: "https://picsum.photos/seed/toefl1/800/450",
      text: "Based on the video, what is the main argument in favor of renewable energy?",
      options: [
        "It creates more jobs than fossil fuels",
        "It reduces long-term energy costs and carbon emissions",
        "It is easier to transport than oil",
        "It requires no government investment"
      ],
      answer: 1,
      points: 15
    },
    {
      id: 17, type: "video", section: "Video",
      icon: "🎬",
      video_desc: "Watch the documentary excerpt about the Amazon rainforest ecosystem.",
      video_thumbnail: "https://picsum.photos/seed/toefl2/800/450",
      text: "What percentage of Earth's oxygen does the Amazon produce, according to the video?",
      options: ["10%", "20%", "30%", "40%"],
      answer: 1,
      points: 15
    },
    {
      id: 18, type: "video", section: "Video",
      icon: "🎬",
      video_desc: "Watch this short video about the impact of social media on teenagers.",
      video_thumbnail: "https://picsum.photos/seed/toefl3/800/450",
      text: "What solution does the expert suggest for managing screen time?",
      options: [
        "Banning social media entirely",
        "Setting daily time limits and encouraging offline activities",
        "Creating new social media platforms",
        "Increasing parental surveillance"
      ],
      answer: 1,
      points: 15
    },
    {
      id: 19, type: "video", section: "Video",
      icon: "🎬",
      video_desc: "Watch this lecture clip on artificial intelligence in medicine.",
      video_thumbnail: "https://picsum.photos/seed/toefl4/800/450",
      text: "Which medical field is most discussed in relation to AI in the video?",
      options: ["Cardiology", "Radiology & Diagnostics", "Pediatrics", "Orthopedics"],
      answer: 1,
      points: 15
    },
    {
      id: 20, type: "video", section: "Video",
      icon: "🎬",
      video_desc: "Watch the video about urban planning and sustainable cities.",
      video_thumbnail: "https://picsum.photos/seed/toefl5/800/450",
      text: "What is one key feature of a sustainable city mentioned in the video?",
      options: [
        "Maximum use of private cars",
        "Integrated public transport and green spaces",
        "Tall skyscrapers with no parks",
        "Industrial zones in city centers"
      ],
      answer: 1,
      points: 15
    },

    // === READING (Multiple Choice with passage) ===
    {
      id: 21, type: "reading", section: "Reading",
      icon: "📖",
      passage: "Photosynthesis is the process by which green plants convert sunlight into food. Using carbon dioxide from the air and water from the soil, plants produce glucose and oxygen. This process takes place in the chloroplasts, which contain the green pigment chlorophyll.",
      text: "According to the passage, what do plants use to produce glucose?",
      options: [
        "Oxygen and nitrogen",
        "Carbon dioxide and water",
        "Glucose and sunlight",
        "Chlorophyll and glucose"
      ],
      answer: 1,
      points: 10
    },
    {
      id: 22, type: "reading", section: "Reading",
      icon: "📖",
      passage: "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres. It supports an enormous diversity of life and is one of the seven natural wonders of the world.",
      text: "How many individual reefs make up the Great Barrier Reef?",
      options: ["Over 900", "Over 1,500", "Over 2,900", "Over 3,500"],
      answer: 2,
      points: 10
    },
    {
      id: 23, type: "reading", section: "Reading",
      icon: "📖",
      passage: "The Industrial Revolution, which began in Britain in the late 18th century, transformed manufacturing through the use of steam power and machinery. This led to urbanization as people moved from rural areas to cities to find work in factories.",
      text: "What was a major social effect of the Industrial Revolution?",
      options: [
        "People moved from cities to rural areas",
        "Urbanization increased as people sought factory work",
        "Steam power reduced manufacturing",
        "Britain's population declined"
      ],
      answer: 1,
      points: 10
    },
    {
      id: 24, type: "reading", section: "Reading",
      icon: "📖",
      passage: "Sleep is essential for human health. During sleep, the body repairs tissues, consolidates memories, and releases hormones that regulate growth and appetite. Adults typically need 7-9 hours of sleep per night.",
      text: "According to the passage, how many hours of sleep do adults typically need?",
      options: ["5-6 hours", "6-7 hours", "7-9 hours", "9-11 hours"],
      answer: 2,
      points: 10
    },
    {
      id: 25, type: "reading", section: "Reading",
      icon: "📖",
      passage: "Vaccines work by training the immune system to recognize and fight specific pathogens. They contain weakened or inactivated forms of a virus or bacteria, which stimulate the body to produce antibodies without causing disease.",
      text: "What do vaccines contain to stimulate antibody production?",
      options: [
        "Strong, active forms of disease",
        "Weakened or inactivated pathogens",
        "Synthetic chemicals only",
        "Fully cured patients' blood"
      ],
      answer: 1,
      points: 10
    },

    // === SPEAKING (Record response - simulated) ===
    {
      id: 26, type: "speaking", section: "Speaking",
      icon: "🎤",
      prompt_image: "https://picsum.photos/seed/speak1/400/250",
      text: "Describe a time when you faced a major challenge and how you overcame it. Use specific details and examples in your response.",
      sample_answer: "One major challenge I faced was during my final year of university when I had to balance a part-time job with my thesis. I overcame it by creating a strict schedule, prioritizing tasks, and asking for help from my advisor when needed.",
      points: 20,
      min_words: 50
    },
    {
      id: 27, type: "speaking", section: "Speaking",
      icon: "🎤",
      prompt_image: "https://picsum.photos/seed/speak2/400/250",
      text: "Do you agree or disagree that technology has made our lives better? Provide specific reasons and examples to support your opinion.",
      sample_answer: "I strongly agree that technology has improved our lives. It has made communication instantaneous, healthcare more effective, and access to education available worldwide.",
      points: 20,
      min_words: 50
    },

    // === ESSAY (Written response) ===
    {
      id: 28, type: "essay", section: "Writing",
      icon: "✍️",
      text: "Some people believe that universities should focus on practical skills rather than theoretical knowledge. Do you agree or disagree? Write an essay of at least 150 words supporting your position with specific reasons and examples.",
      min_words: 150,
      points: 30
    },
    {
      id: 29, type: "essay", section: "Writing",
      icon: "✍️",
      text: "Many experts argue that climate change is the greatest threat facing humanity today. Write an essay discussing the causes and effects of climate change, and propose at least two realistic solutions. Your essay should be at least 150 words.",
      min_words: 150,
      points: 30
    },
    {
      id: 30, type: "essay", section: "Writing",
      icon: "✍️",
      text: "The rise of artificial intelligence is transforming the job market. Write an essay of at least 150 words discussing whether AI will create more jobs than it eliminates, using specific examples and evidence to support your argument.",
      min_words: 150,
      points: 30
    }
  ]
};
