import type { Translations } from "./types";

const en: Translations = {
    nav: {
        about: "About me",
        projects: "Projects",
        contact: "Contact"
    },
    title: "Portfolio | Agustín Palma",
    description: "Portfolio of Agustin Palma, frontend web developer",
    aboutTitle: "Hello, I'm Agustín.",
    aboutDescription: "Aspiring frontend web developer. Passionate about technology.",
    hobbiesTitle: "Besides coding, I also enjoy:",
    hobby1: "• Playing video games.",
    hobby2: "• Consuming multimedia content.",
    hobby3: "• Listening to music.",
    formacion: {
        title: 'Courses and Certifications',
        content1: {
            title: 'Argentina Programa 4.0 - Initial Web Development.',
            description: 'This was my first course in Web Development, where I learned HTML, CSS, and JavaScript, the basics of UI/UX, and the use of Figma.',
        },
        time1: 'March 2023',
        content2: {
            title: 'Argentina Programa 4.0 - React.js Web Development.',
            description: 'This was the second part of the course, where I learned my first JavaScript library, React.js.',
        },
        time2: 'November 2023',
    },
    technologies : {
        title: 'Knowledge in various technologies and languages',
        box1: {
            title: 'Markup and Style Languages',
        },
        box2: {
            title: 'Programming Languages',
        },
        box3: {
            title: 'Libraries and Frameworks',
        },
        box4: {
            title: 'Preprocessors and Styling Tools',
        },
        box5: {
            title: 'Version Control and Collaboration',
        },
    },
    projects : {
        title: 'Projects',
        first: {
            content: {
                title: 'ExplorAR.',
                description: 'This project was developed in collaboration with a team of three people. Its main objective is to offer trips to various tourist destinations in Argentina.',
            },
            links: {
                1: {
                    title: 'View live project',
                },
                2 : {
                    title: 'View source code',
                },
            },
        },
        second: {
            content: {
                title: 'Ice Cream Shop.',
                description: 'I developed this project while learning CSS, focusing specifically on Grid Layout. I am especially proud of the aesthetic result.',
            },
            links: {
                1: {
                    title: 'View live project',
                },
                2 : {
                    title: 'View source code',
                },
            },
        },
        third: {
            content: {
                title: 'Prime Car.',
                description: 'Car dealership. In this project, I challenged myself to use GSAP for small animations and to implement a double image slider.',
            },
            links: {
                1: {
                    title: 'View live project',
                },
                2 : {
                    title: 'View source code',
                },
            },
        },
    },
    contact: {
        title: 'You can contact me at:',
    },
    footer: {
        description: '© 2024 Developed by Agustín Palma. All rights reserved.',
        links: {
            1: {
                title: 'Download CV in Spanish',
            },
            2: {
                title: 'Download CV in English',
            },
        },
    },
};
export default en;
