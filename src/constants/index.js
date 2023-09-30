import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    photoshop
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Vue",
      icon: mobile,
    },
    {
      title: "Laravel",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Altwaijri Computer Systems Group",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023 - Now",
      points: [
        "Developing and maintaining web applications.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Optimize company website performance by reducing load times and improving site speed, making it both user and SEO-friendly.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "TRAFFIC",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Apr 2023",
      points: [
        "Developing and maintaining web applications using Laravel and other related technologies.",
        "I was responsible for collaborating with a cross-functional team to develop a comprehensive human resource management system",
        "Creating a scalable and adaptable software infrastructure to facilitate ongoing expansion and enhancement.",
        "Working in creating APIs to seamlessly integrate system functionalities with both Android and iOS mobile applications.",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Ease Group",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2021 - Jan 2023",
      points: [
        "I worked as a graphic designer, in the e-marketing department.",
        "I was responsible for designing social media posters for many clients, as well as designing publications and creating visual identities for clients, and I was also helping to make animation videos.",
        ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Freelance",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "Developing and maintaining web applications.",
        "Craft web solutions that are not just functional but also architecturally sound, ensuring scalability and performance optimization.",
        "Write clean, efficient, and maintainable code using the latest web technologies, adhering to industry best practices and standards.",
        "Prioritize user-centered design, enhancing the overall user experience through intuitive navigation and interactive elements.",
        " Create responsive designs that adapt seamlessly to various screen sizes, from desktops to smartphones, offering an optimal user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Terfa proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Terfa does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Terfa optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wasl HR",
      description:
        "Web-based HR platform that allows users to manage employee data, track employee performance and attendance, providing a convenient and efficient solution for HR needs.",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://waslhr.com/",
    },
    {
      name: "Estgbal Alkher",
      description:
        "A web application that allows users to donate items they do not benefit from and donate them to those in need through the site. All management processes for these things are done through the site. It has a part for the donor, a part for the driver who delivers donations, a part for the system manager, a part for the warehouse administrator, a part for the accountant, and a part for reports.",
      tags: [
        {
          name: "bootsrap",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://estgbal-alkher.com/",
    },
    {
      name: "Al-Wafi Law Firm Program",
      description:
        "Web-based program used by lawyers to record and manage legal operations, cases, and debt collection. It has an accounting part and a legal part. The program facilitates the work of lawyers and their assistants in tracking cases and issues.",
      tags: [
        {
          name: "ASP.NET",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };