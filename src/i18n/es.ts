import type { Translations } from "./types";

const es: Translations = {
    nav : {
        about: "Acerca de mi",
        projects: "Proyectos",
        contact: "Contacto"
    },
    title: "Portafolio | Agustín Palma",
    description: "Portafolio de Agustín Palma, desarrollador web frontend",
    aboutTitle: "Hola, soy Agustín.",
    aboutDescription: "Aspirante a Desarrollador web frontend. Apasionado por la tecnología.",
    hobbiesTitle: "Además de codificar, también disfruto de:",
    hobby1: "• Jugar Videojuegos.",
    hobby2: "• Consumir contenido multimedia.",
    hobby3: "• Escuchar música.",
    formacion: {
        title: 'Cursos y Certificaciones',
        content1: {
            title: 'Argentina Programa 4.0 - Desarrollo Web Inicial.',
            description: 'Este fue mi primer curso de Desarrollo Web, en el cual aprendí sobre HTML, CSS y JavaScript, también ví conceptos de UI/UX y principios de manejo de Figma.',
        },
        time1: 'Marzo 2023',
        content2: {
            title: 'Argentina Programa 4.0 - Desarrollo Web React.js',
            description: 'Este fue el segundo tramo del curso, donde conocí la primera biblioteca de JavaScript, React.js.',
        },
        time2: 'Noviembre 2023',
    },
    technologies : {
        title: 'Conocimiento en diversas Tecnologías y Lenguajes',
        box1: {
            title: 'Lenguajes de Marcado y Estilo',
        },
        box2: {
            title: 'Lenguajes de Programación',
        },
        box3: {
            title: 'Bibliotecas y Frameworks',
        },
        box4: {
            title: 'Preprocesadores y Herramientas de Estilo',
        },
        box5: {
            title: 'Control de Versiones y Colaboración',
        },
    },
    projects : {
        title: 'Proyectos',
        first: {
            content: {
                title: 'ExplorAR.',
                description: 'Este proyecto fue desarrollado en colaboración con un equipo de tres personas. Su objetivo principal es ofrecer viajes a diversos destinos turísticos en Argentina.',
            },
            links: {
                1: {
                    title: 'Ver proyecto en vivo',
                },
                2 : {
                    title: 'Ver código fuente',
                },
            },
        },
        second: {
            content: {
                title: 'Heladeria.',
                description: 'Desarrollé este proyecto mientras aprendía CSS, enfocándome específicamente en Grid Layout. Estoy especialmente orgulloso del resultado estético.',
            },
            links: {
                1: {
                    title: 'Ver proyecto en vivo',
                },
                2 : {
                    title: 'Ver código fuente',
                },
            },
        },
        third: {
            content: {
                title: 'Prime Car.',
                description: 'Concesionaria de autos. En este proyecto me desafié a usar GSAP para pequeñas animaciones y a implementar un doble slider de imágenes.',
            },
            links: {
                1: {
                    title: 'Ver proyecto en vivo',
                },
                2 : {
                    title: 'Ver código fuente',
                },
            },
        },
    },
    contact: {
        title: 'Podés comunicarte conmigo en:',
    },
    footer : {
        description: '© 2024 Desarrollado por Agustín Palma. Todos los derechos reservados.',
        links: {
            1: {
                title: 'Descargar CV en Español',
            },
            2: {
                title: 'Descargar CV en Inglés',
            },
        },
    },
};
export default es;