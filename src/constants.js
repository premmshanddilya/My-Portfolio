// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import newtonschoolLogo from './assets/company_logo/favicon.png';

// Project Section Logo's
import moleGameLogo from './assets/work_logo/mole-game.png';
import csprepLogo from './assets/work_logo/doctor.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import imageSearchLogo from './assets/work_logo/image.png';
import npmLogo from './assets/work_logo/shopping.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: " Yatiken Software Solutions ",
      date: "September 2024 - December 2024",
      desc: `Assisted in frontend development tasks using HTML, CSS, JavaScript, and React.js.
             Shadowed senior developers to understand real-world project development.
             Learned about code optimization, debugging, and performance improvements`,
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJS",
        "BootStrap",
        "Tailwind",
      ],
      contact: "shivam@yatiken.com"
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Whac-A-Mole Game",
      description:
        "A fun and interactive browser-based game inspired by the classic Whac-A-Mole. Built with HTML, CSS, and JavaScript, this game challenges the player's reflexes by having them click on moles that randomly pop up from holes within a time limit.",
      image: moleGameLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/premmshanddilya/Mole-Game",
      webapp: "https://premmshanddilya.github.io/Mole-Game/",
    },
    {
      id: 1,
      title: "Doctor Booking Appointment",
      description:
        "The website Prescripto is a modern doctor appointment booking platform that allows users to find healthcare professionals and schedule visits easily. It features a clean UI, sections for searching doctors by specialization or location, and streamlined booking functionality. Ideal for clinics or startups building a digital health service.",
      image: csprepLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/premmshanddilya/Doctor-Booking-Appoinment",
      webapp: "https://doctor-booking-appoinment.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/premmshanddilya/Movie-web",
      webapp: "https://movie-web-sigma-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Shopping Web",
      description:
        "The website SHOP KARO is a sleek and user-friendly e-commerce platform that allows users to browse and purchase products with ease. It features a clean and responsive UI, a product catalog with various categories, and a simple shopping cart and checkout system. Designed for a smooth shopping experience, it's perfect for small businesses or developers showcasing a modern online store setup.",
      image: npmLogo,
      tags: ["React JS", "JavaScript", "CSS", "HTML"],
      github: "https://github.com/premmshanddilya/shopping-app",
      webapp: "https://shopping-app-eight-chi.vercel.app/",
    },
    {
      id: 4,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imageSearchLogo,
      tags: ["ReactJS", "JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/premmshanddilya/Image-Search-App",
      webapp: "https://image-search-app-tawny.vercel.app/",
    },
    {
      id: 5,
      title: "Whac-A-Mole Game",
      description:
        "A fun and interactive browser-based game inspired by the classic Whac-A-Mole. Built with HTML, CSS, and JavaScript, this game challenges the player's reflexes by having them click on moles that randomly pop up from holes within a time limit.",
      image: moleGameLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/premmshanddilya/Mole-Game",
      webapp: "https://premmshanddilya.github.io/Mole-Game/",
    },
  ];  