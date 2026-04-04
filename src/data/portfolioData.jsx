// pictures of projects
import profileImg from "../assets/Portfolio.webp"
import loginImg from "../assets/preview1.webp"
import hometownImg from "../assets/hometown.webp"
import trackerImg from "../assets/lead_tracker.html.webp"
import blogImg from "../assets/Living the Social Life.webp"
import calculatorImg from "../assets/calculator.webp"
import certificateImg from "../assets/certificate.webp"
// social media links
import { FaGithub, FaFacebook, FaYoutube, FaLinkedin, FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const skills = [
    {id:1, name:"HTML5", level:95},
    {id:2, name:"CSS3", level:65},
    {id:3, name:"JavaScript", level: 35},
    {id:4, name:"Reactjs", level:25},
    {id:5, name:"TailwindCss", level:30},
    {id:6, name:"Git & Version Control", level: 40}
]

export const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Critical Thinking",
    "Technical Implementation",
    "Flexible"
]

export const projects = [
    {
        id:1, 
        image: profileImg, 
        alt:"portfolio img", 
        title: "Personal Portfolio (This site)", 
        description: "A simple yet effective portfolio website to showcase my skills built with React",
        tech: ["React hooks", "Theme switching", "Accessible, responsive & optimized"],
        demoLink:"#",
        gitLink: "https://github.com/OsonduGabriel"
    },
    {
        id:2, 
        image: loginImg, 
        alt:"login form", 
        title: "Login Form", 
        description: "Designed a styled login form for users",
        tech: ["HTML form elements", "CSS styling and layouts", "Accessibility"],
        demoLink:"https://gabriel-login-form.netlify.app/",
        gitLink: "https://github.com/OsonduGabriel"
    },
    {
        id:3, 
        image: hometownImg, 
        alt:"Hometown homepage site", 
        title: "Hometown homepage site", 
        description: "Designed a website for my hometown for tourist",
        tech: ["HTML", "CSS FLEXBOX", "Responsive design"],
        demoLink:"https://gabriel-hometwown.netlify.app/",
        gitLink: "https://github.com/OsonduGabriel"
    },
    {
        id:4, 
        image: trackerImg, 
        alt:"Lead Tracker extension", 
        title: "Lead Tracker extension", 
        description: "Designed a lead tracker extension to track leads in a site",
        tech: ["HTML and CSS", "JavaScript arrays and DOM manipulation", "API fetch"],
        demoLink:"https://gabriel-leadtracker-extension.netlify.app/",
        gitLink: "https://github.com/OsonduGabriel"
    },
    {
        id:5, 
        image: blogImg, 
        alt:"Blog site", 
        title: "Blog site", 
        description: "Blog website about life style",
        tech: ["HTML", "CSS FLEXBOX", "Responsive design"],
        demoLink:"https://osondu-blog-exercise.netlify.app/",
        gitLink: "https://github.com/OsonduGabriel"
    },
    {
        id:6, 
        image: calculatorImg, 
        alt:"Calculator App", 
        title: "Calculator App", 
        description: "Web app that performs mathematical operations",
        tech: ["HTML & CSS FLEXBOX", "Responsive design", "JavaScript"],
        demoLink:"https://tinyurl.com/r4uhbet9",
        gitLink: "https://github.com/OsonduGabriel"
    }
]

export const education = [
    {
        id:1,
        title: "Frontend Web development Training - ",
        period: "Dec 2025 - Jan 2026",
        institution: "Tech Powa Academy",
        description: "Intensive training in HTML, CSS and JavaScript and modern web development practices.",
        image: certificateImg
    },
    {
        id:2,
        title: "Electrical & Electronic Engineering - ",
        period: "2019 - 2023",
        institution: "Faculty of Engineering & Technology (FET) - University of Buea, Cameroon",
        description: null,
        image: null
    }
]

export const socialLinks = [
    {
        id:1,
        href: "https://github.com/OsonduGabriel",
        icon: FaGithub,
        ariaLabel: "Github profile"
    },
    {
        id:2,
        href: "#",
        icon: FaFacebook,
        ariaLabel: "Facebook profile"
    },
    {
        id:3,
        href: "#",
        icon: FaXTwitter,
        ariaLabel: "X profile"
    },
    {
        id:4,
        href: "#",
        icon: FaYoutube,
        ariaLabel: "Youtube profile"
    },
    {
        id:5,
        href: "#",
        icon: FaLinkedin,
        ariaLabel: "Linkedin profile"
    },
    {
        id:6,
        href: "#",
        icon: FaEnvelope,
        ariaLabel: "Gmail"
    },
    {
        id:7,
        href: "#",
        icon: FaPhoneAlt,
        ariaLabel: "Tel"
    }
]

export const navLinks = [
    {id:1, label:"About", href: "#about"},
    {id:2, label:"Skills", href: "#skill"},
    {id:3, label:"Project", href: "#project"},
    {id:4, label:"Experience", href: "#education"},
    {id:5, label:"Contact", href: "#contact"}
]

export const techIcons = [
    {id:1, icon:FaHtml5, color:"#e34f26"},
    {id:2, icon:FaCss3Alt, color:"#1572b6"},
    {id:3, icon:FaJs, color:"#f7df1e"},
    {id:4, icon:FaReact, color:"#61dafb"},
    {id:5, icon:SiTailwindcss, color:"#38bdf8"},
    {id:6, icon:FaGitAlt, color:"#f05032"},
]