import TasteTroopImg from "../assets/tastetroop.jpeg";
import ReactIcon from "../assets/React.svg";
import ReduxIcon from "../assets/Redux.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import HTMLIcon from "../assets/HTML5.svg";
import CSSIcon from "../assets/CSS3.svg";
import BootstrapIcon from "../assets/Bootstrap.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";
import GitIcon from "../assets/Git.svg";
import GitHubIcon from "../assets/GitHub.svg";
import WordpressIcon from "../assets/Wordpress.svg";
import SEOIcon from "../assets/SEO.svg";
import TKAImg from "../assets/tka.jpg";
import OneformaImg from "../assets/oneforma.jpg";
import BMImg from "../assets/bm.jpg";
import AudisankaraImg from "../assets/audisankara.jpeg";
import NikeImg from "../assets/nike.webp";
import HoobankImg from "../assets/hoobank.webp";
import NavraImg from "../assets/navra.webp";
import PortfolioImg from "../assets/Portfolio.webp";

export const userData = {
  name: "Muni Chandra Chimidi",
  location: "India💌",
  role: "Frontend Developer",
  role_desc:
    "Hi, I'm Muni Chandra, a Frontend Developer with hands-on experience in React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, and state management (Redux, Context API). I build responsive, user-centric web applications and bring additional SEO and digital marketing experience for business-focused development.",
  socials: {
    linkedin: "https://www.linkedin.com/in/munichandrach", // TODO: update if different
    github: "", // TODO: add your GitHub profile link
    email: "munichandrach3@gmail.com",
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in a range of modern frontend technologies that help me build responsive, user-centric web applications.",
    technologies: [
      // Programming Languages
      {
        id: 1,
        name: "JavaScript (ES6+",
        type: "Programming Language",
        image: JavaScriptIcon,
      },

      // Markup & Styling
      {
        id: 2,
        name: "HTML5",
        type: "Markup Language",
        image: HTMLIcon,
      },
      {
        id: 3,
        name: "CSS3",
        type: "Style Sheet Language",
        image: CSSIcon,
      },
      {
        id: 4,
        name: "Tailwind CSS",
        type: "CSS Framework",
        image: TailwindIcon,
      },
      {
        id: 5,
        name: "Bootstrap",
        type: "CSS Framework",
        image: BootstrapIcon,
      },

      // Frontend Libraries & State Management
      {
        id: 6,
        name: "React.js",
        type: "JavaScript Library",
        image: ReactIcon,
      },
      {
        id: 7,
        name: "Redux",
        type: "State Management",
        image: ReduxIcon, // placeholder
      },
      {
        id: 8,
        name: "Context API",
        type: "State Management",
        image: ReactIcon, // placeholder
      },

      // Tools & Platforms
      {
        id: 9,
        name: "Git",
        type: "Version Control",
        image: GitIcon,
      },
      {
        id: 10,
        name: "GitHub",
        type: "Code Hosting Platform",
        image: GitHubIcon,
      },
      {
        id: 11,
        name: "WordPress",
        type: "CMS / Web Platform",
        image: WordpressIcon, // placeholder
      },
      {
        id: 12,
        name: "SEO",
        type: "Search Engine Optimization",
        image: SEOIcon, // placeholder
      },
    ],
  },
  experienceData: {
    title: "Experience",
    desc: "A glimpse into my professional journey across frontend development, SEO, and digital marketing.",
    exp: [
      {
        id: 1,
        title: "Frontend Developer / Digital Marketing Team Lead",
        company: "The Knowledge Academy",
        location: "Remote / India",
        year: "Feb 2024 - Present",
        role: "Built scalable React components for sales portals, optimized landing pages with HTML, CSS, and Tailwind to improve speed and conversions, fixed UI/UX issues across devices, and increased organic leads and ROI through SEO and targeted ads.",
        image: TKAImg, // placeholder logo
      },
      {
        id: 2,
        title: "Frontend Developer Intern",
        company: "One Forma (Palette Interactive Payroll)",
        location: "Remote",
        year: "Sep 2023 - Dec 2023",
        role: "Built responsive web pages with HTML5, CSS3, and JavaScript, collaborated with developers to implement interactive UI features, debugged UI/UX issues, and gained practical Git/GitHub and Agile development experience.",
        image: OneformaImg, // placeholder logo
      },
      {
        id: 3,
        title: "Frontend Developer / SEO Analyst",
        company: "Lifeofalpha.com & Businessmavericks.org",
        location: "Remote",
        year: "Jan 2020 - Present",
        role: "Developed responsive WordPress blogs with modern UI, optimized frontend performance using caching and CDNs, conducted on-page SEO and content optimization to drive organic traffic, and monitored analytics for data-driven UI improvements.",
        image: BMImg, // placeholder logo
      },
      {
        id: 4,
        title: "Social Media Growth Expert",
        company: "Freelance",
        location: "Remote",
        year: "Nov 2018 - Present",
        role: "Planned and created content, managed communities, grew social media audiences, optimized posting strategies based on analytics, and implemented viral content techniques to increase engagement.",
        image: BMImg, // placeholder logo
      },
    ],
    edu: [
      {
        id: 1,
        degree: "B.Tech in Computer Science",
        institution: "Audisankara Institute of Technology, Gudur",
        year: "Aug 2018 - Feb 2023",
        image: AudisankaraImg,
      },
    ],
  },
  projectsData: {
    title: "Personal Projects",
    desc: "Code-powered designs in action.",
    projects: [
      {
        id: 1,
        name: "Nike Landing Page",
        description:
          "A modern, responsive Nike-themed landing page built with React and Tailwind CSS, focused on clean UI, smooth sections, and a strong brand-first layout.",
        techStack: ["JavaScript", "React", "Tailwind CSS", "Git", "GitHub"],
        image: NikeImg, // placeholder image
        github: "", // TODO: add Nike landing page GitHub repo link
        website: "", // TODO: add Nike landing page live site link
      },
      {
        id: 2,
        name: "HooBank Landing Page",
        description:
          "A fintech-style HooBank landing page with a component-based layout, responsive design, and clear CTAs for a smooth user experience.",
        techStack: ["JavaScript", "React", "Tailwind CSS", "Git", "GitHub"],
        image: HoobankImg,
        github: "", // TODO: add HooBank landing page GitHub repo link
        website: "", // TODO: add HooBank landing page live site link
      },
      {
        id: 3,
        name: "Navra Learning Center",
        description:
          "A clean and responsive learning center website built using HTML, CSS, and Git/GitHub. Designed to showcase tutoring services, subject offerings, and academic programs like CBSE, NIOS, STATE, and ICSE with a simple and user-friendly layout.",
        techStack: ["HTML", "CSS", "Git", "GitHub", "Responsive"],
        image: NavraImg, // TODO: replace with actual image import
        github: "", // TODO: add GitHub repo link
        website: "", // TODO: add live website link
      },
      {
        id: 4,
        name: "Portfolio Website (HTML & CSS)",
        description:
          "A fully responsive personal portfolio website built using HTML, CSS, and media queries. Designed to showcase projects, skills, and contact information with a clean layout and smooth responsiveness across all devices.",
        techStack: ["HTML", "CSS", "Media Queries", "Git", "GitHub"],
        image: PortfolioImg, // TODO: replace with your actual image import
        github: "https://github.com/munichandra33/My-Portfolio-Website",
        website: "https://munichandra33.github.io/My-Portfolio-Website/",
      },
    ],
  },
  contactData: {
    salutation: "Hi There",
    title: "Send me a message",
    subTitle: "Let's build your next frontend experience.",
    emailDesc: "Mail me at",
    linkedin: "Linkedin",
    github: "Github",
  },
};
