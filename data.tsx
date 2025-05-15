import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Mail, Github, Phone, Banknote } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/thomasvetti/",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/thomas-vetti-usuga-301934364/",
    },
  
    {
        id: 4,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "https://mail.google.com/mail/?view=cm&fs=1&to=thomas.vetti@utp.edu.co"
    },
      {
        id: 5,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/thomasvetti"
    },
    
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    
    {
        id: 0,
        title: "Cursando  el programa de Tecnología en Desarrollo de Software. ",
        subtitle: "UTP.",
        description: "Formación en fundamentos técnicos como programación (Java/Python), estructuras de datos, algoritmos y bases de datos (SQL/NoSQL); desarrollo web/móvil con frontend (HTML/CSS/JS), backend (Node.js, frameworks) y apps híbridas; ingeniería de software (UML, metodologías ágiles, testing); e introducción a sistemas inteligentes (IA, machine learning y análisis de datos).",
        date: "+ 500 horas",
    },
    {
        id: 1,
        title: "Máster Completo en Java de cero a experto 2025",
        subtitle: "Udemy.",
        description: "Dominio de Java (POO, Spring Boot, JavaFX, JDBC) , con proyectos prácticos full-stack",
        date: "180 horas",
    },
    {
        id: 2,
        title: "Three.js, React Three Fiber, Drei, React Spring & More",
        subtitle: "Udemy.",
        description: "Desarrollo frontend con React, React Three Fiber (3D) y react-spring (animaciones), con proyectos prácticos.",
        date: "12.5 horas",
    },
    {
        id: 3,
        title: "The Complete Prompt Engineering for AI Bootcamp (2025)",
        subtitle: "Udemy.",
        description: "Dominio de Prompt Engineering para LLMs (ChatGPT, GPT-4), con técnicas aplicables a negocios y automatización.",
        date: "22.5 horas",
    },
    {
        id: 4,
        title: "The Complete PHP Full Stack Web Developer Bootcamp",
        subtitle: "Udemy.",
        description: "Desarrollo full-stack con PHP, Laravel y MySQL, incluyendo construcción de aplicaciones web completas. ",
        date: "61.5 horas",
    },
    {
       id: 5,
        title: "Máster en SQL Server: Desde Cero a Nivel Profesional (2025)",
        subtitle: "Udemy.",
        description: "Dominio en SQL Server (T-SQL, ETL, optimización)  con habilidades en diseño y administración de bases de datos empresariales. ",
        date: "16 horas",
    },
  
]

export const dataCounter = [
    {
        id: 0,
        endCounter: + 700,
        text: "Horas de práctica",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 4.5,
        text: "Promedio Estudiantil",
        lineRight: true,
        lineRightMobile: false,
    },
    
    {
        id: 2,
        endCounter: 25,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },

    {
        id: 3,
        endCounter: 12,
        text: "Tecnologías aprendidas",
        lineRight: false,
        lineRightMobile: false,
    }
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Aplicaciones web full-stack",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Phone />,
        title: "Desarrollo multiplataforma con React Native (iOS/Android",
    },
    {
        icon: <Banknote />,
        title: "Sistemas empresariales",
        description: "Software a medida para gestión de procesos (inventario, CRM) con Java o PHP",
    },
    {
        icon: <Book />,
        title: "Inteligencia Artificial aplicada",
        description: "Prompt engineering para negocios (mejora de interacciones con IA)",
    },
    {
        icon: <Rocket />,
        title: "Ciberseguridad básica",
        description: "Auditorías de código (vulnerabilidades comunes). ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Primer app móvil con React Native",
        image: "/iamgena.jpeg",
        urlGithub: "https://github.com/thomasvetti/proyecto_movil-master",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo de appi",
        image: "/image-2.png",
        urlGithub: "https://github.com/thomasvetti/ProgramacionWeb",
        urlDemo: "https://thomasvetti.github.io/ProgramacionWeb/",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.png",
        urlGithub: "https://github.com/thomasvetti/paginaweb.github.io",
        urlDemo: "https://thomasvetti.github.io/paginaweb.github.io/",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.png",
        urlGithub: "https://github.com/thomasvetti/miportafolioweb-",
        urlDemo: "https://thomasvetti.github.io/miportafolioweb-/",
    },
    
];

// export const dataTestimonials = [
//     {
//         id: 1,
//         name: "George Snow",
//         description:
//             "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
//         imageUrl: "/profile1.png",
//     },
//     {
//         id: 2,
//         name: "Juan Pérez",
//         description:
//             "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
//         imageUrl: "/profile2.png",
//     },
//     {
//         id: 3,
//         name: "María García",
//         description:
//             "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
//         imageUrl: "/profile3.png",
//     },
//     {
//         id: 4,
//         name: "Laura Snow",
//         description:
//             "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
//         imageUrl: "/profile4.png",
//     },
//     {
//         id: 5,
//         name: "Carlos Sánchez",
//         description:
//             "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
//         imageUrl: "/profile5.png",
//     },
//     {
//         id: 6,
//         name: "Antonio Martínez",
//         description:
//             "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
//         imageUrl: "/profile6.png",
//     },
// ];