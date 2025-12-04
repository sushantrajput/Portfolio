// Icons
    import js from "../assets/icons/skills-icon/javascript.svg";
    import django from "../assets/icons/skills-icon/django.svg";
    import html from "../assets/icons/skills-icon/html.svg";
    import cpp from "../assets/icons/skills-icon/cpp.svg"; 
    import css from "../assets/icons/skills-icon/css.svg";
    // import figma from "../assets/icons/skills-icon/figma.svg";
    import md from "../assets/icons/skills-icon/mongodb.svg";
    // import next from "../assets/icons/skills-icon/nextjs.svg";
    import node from "../assets/icons/skills-icon/nodejs.svg";
    import py from "../assets/icons/skills-icon/python.svg";
    import react from "../assets/icons/skills-icon/react-js.svg";
    import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
    import php from "../assets/icons/skills-icon/php.svg";
    import ml from "../assets/icons/skills-icon/ml.png";

    
    import LabMate from "../assets/images/projectImages/project1.png"; // Placeholder for LabMate
    import WeatherApp from "../assets/images/projectImages/project2.png"; // Placeholder for WeatherApp
    import JobConnect from "../assets/images/projectImages/project3.png"; // Placeholder for JobConnect

    export const Projects = {
      
      LabMate: {
        image: LabMate, 
        title: "LabMate",
        subTitle: "Smart Medical Scheduling",
        insights: {
          desc: `A full-stack healthcare platform designed to streamline the connection between patients,
        doctors, and labs. It features a modern patient portal for booking appointments with 
        specialists, a doctor dashboard for managing schedules, and an admin panel for overseeing 
        the system. Key functionalities include secure user authentication, online payment integration, 
        and profile management, all wrapped in a responsive, professionally rebranded teal-themed user interface.`,
          category: "HealthTech / Full Stack Web Development",
          techStack: [react, node, md, tailwind, js],
          reportLink: "",
        },
        githubLink: "https://github.com/sushantrajput/labmate",
      },
      
     
      WeatherApp: {
        image: WeatherApp, 
        title: "Weather Vertofx",
        subTitle: "Real-Time Weather, Visually Reimagined",
        insights: {
          desc: `Weather Vertofx is a responsive web application that provides accurate,
        real-time meteorological data—including wind speed, humidity, and air pressure—for
        cities worldwide. Designed with an immersive user interface, the application features dynamic
        theming that automatically adapts the visual background to match current environmental conditions,
        such as sunny days or starry nights.`,
          category: "Frontend Web Development, Interactive Application",
          techStack: [ react, tailwind, js],
          reportLink: "", 
        },
        githubLink: "https://github.com/sushantrajput/weather-vertofx",
      },
      
      
      JobConnect: {
        image: JobConnect, 
        title: "JobConnect",
        subTitle: "Job Board and Professional Networking Platform",
        insights: {
          desc: `JobConnect is a comprehensive job board and professional networking platform designed to 
        bridge the gap between job seekers and employers. The application allows users to browse thousands 
        of job listings, view detailed company profiles, and apply for positions. Key features include a robust
        search functionality with filters for job type and salary, a dedicated section for top companies, and 
        user authentication for creating profiles and managing applications. The platform aims to make the hiring
        process efficient and transparent for all users`,
          category: "Job Board Web Application",
          techStack: [react, tailwind, js],
          reportLink: "",
        },
        githubLink: "https://github.com/sushantrajput/jobfinder",
      },
    };