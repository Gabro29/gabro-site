export interface CVExperience {
    role: string;
    company: string;
    date: string;
    description: string | string[];
}
 
export interface CVEducation {
    degree: string;
    institution: string;
    date: string;
    description?: string;
    grade?: string;
    coursework?: string[];
}

export interface CVProject {
    title: string;
    role?: string;
    description: string | string[];
    techStack?: string[];
    link?: string;
    date?: string;
}

export interface CVAward {
    title: string;
    competition: string;
    date: string;
    description: string;
    techStack?: string[];
}

export interface CVSkillCategory {
    category: string;
    skills: string[];
}

export const cvData = {
    experiences: [
        {
            role: "Network & Embedded Engineer",
            company: "Apex Corse (Formula SAE)",
            date: "November 2023 - Present",
            description: [
                "Designing and developing a datalogger based on ESP32 with secure MQTTS communication and SD data storage.",
                "Implementing a reliable telemetry system with secure remote access and robust fault/crash handling.",
                "Integrating the platform with Docker and Grafana for real-time data processing and visualization."
            ],
        }
    ] as CVExperience[],
    education: [
        {
            degree: "Master Degree in Computer Engineering",
            institution: "Università degli Studi di Palermo",
            date: "Sept 2025 - Expected July 2027",
            coursework: ["Big Data", "Artificial Intelligence", "Computer Vision", "Natural Language Processing", "Blockchain"]
        },
        {
            degree: "Bachelor Degree in Innovation Engineering",
            grade: "110/110 cum laude",
            institution: "Università degli Studi di Palermo",
            date: "Sept 2022 - July 2025",
            coursework: ["Machine Learning", "Operating Systems", "Algorithms", "Statistical Analysis", "Database Systems", "Internet"]
        },
    ] as CVEducation[],
    projects: [
        {
            title: "Speaker at DevFest Mediterranean 2025",
            role: "Speaker",
            date: "December 2025",
            description: [
                "Held a talk titled 'The Illusion of control: managing the unpredictability of LLMs'.",
                "Discussed real-world risks of hallucination and presented architectural patterns for reliable AI integration."
            ],
            techStack: ["LLMs", "AI Architecture"],
        },
        {
            title: "Iperconnessi Podcast",
            role: "Host & Creator",
            date: "April 2024 - Present",
            description: [
                "Published 20+ episodes with growing audience engagement.",
                "Engaged listeners by discussing practical AI applications tailored to student needs.",
                "Collaborated and interviewed tech leaders."
            ],
            techStack: ["Podcast", "AI Communication"],
        },
        {
            title: "Vivere Ingegneria - Student Organization",
            role: "Teaching Assistant & Tutor",
            date: "April 2024 – Present",
            description: [
                "Taught and mentored over 700 students across multiple study groups.",
                "Delivered hands-on sessions and lectures in Python, Java, C, Internet fundamentals, Algorithms, Calculus, and Physics."
            ],
            techStack: ["Teaching", "Mentoring", "Communication"],
        },
        {
            title: "Qiskit Fall Fest Organizer",
            role: "Organizer",
            date: "November 2023",
            description: [
                "Organized and facilitated Qiskit Fall Fest, a global quantum computing event supported by IBM Quantum.",
                "Coordinated a presentation for 40+ students."
            ],
            techStack: ["Quantum Computing", "Event Management"],
        }
    ] as CVProject[],
    awards: [
        {
            title: "Second Place",
            competition: "Hack4Future Sicily - Hackathon on Climate Change",
            date: "May 2025",
            description: "Analyzed SIAS hourly rainfall data (2002-2023) to study regional disparities. Developed a machine learning model to project rainfall trends up to 2050.",
            techStack: ["Python", "Machine Learning", "Data Analysis", "Teamwork"]
        },
        {
            title: "Second Place",
            competition: "Alpine Climate Data Challenge for TELT",
            date: "February 2025",
            description: "Developed a custom climate model to predict environmental impacts. Created comprehensive datasets combining European climate data (1980-2024).",
            techStack: ["Python", "Machine Learning", "Data Analysis", "Teamwork"]
        }
    ] as CVAward[],
    skills: [
        {
            category: "Programming",
            skills: ["Python", "Java", "C", "R", "SQL", "Go"],
        },
        {
            category: "Data Science & AI",
            skills: ["NumPy", "Pandas", "Scikit-learn"],
        },
        {
            category: "Big Data",
            skills: ["Spark", "Hadoop", "MongoDB", "Neo4J"],
        },
        {
            category: "Full-stack",
            skills: ["Spring Boot", "FastAPI", "JavaScript", "HTML5", "CSS3"],
        },
        {
            category: "Tools",
            skills: ["Git", "Linux", "Docker"],
        },
        {
            category: "Languages",
            skills: ["Italian (Native)", "English (B1)"],
        },
    ] as CVSkillCategory[],
};
