// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Shailaja",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:"I love building websites and web-app projects by combining tech and fine art.This passion led me to choose computer applications for my post-graduation. I am fluent in classics like HTML, CSS, Bootstrap, JavaScript. My field of Interest's are building new  web projects and products. Whenever possible, I also apply my passion for developing products with the help of various technologies and Modern Javascript Library and Frameworks  like React.js"};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5"
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3"
  },
  {
    name: "Javascript",
    faClass: "fab fa-js"
  },
  {
    name: "React",
    faClass: "fab fa-react"
  },
  
  {
    name: "Bootstrap",
    faClass: "fab fa-bootstrap"
  },
  {
    name: "Java",
    faClass: "fab fa-java"
  },
  {
    name: "Database",
    faClass: "fas fa-database"
  }
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1 ",
    name: "Law - Firm Management website ",
    skills: ["HTML, CSS,PHP,Bootstrap,JS"],
    github:"https://github.com/himanshu-98/newDsn",
    url: "https://dsnlegal.com/login.php",
    detail: " A secured full-stack website to store all the case details of DSN Legal Firm."

  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Nuuk Landing Web-page",
    skills: ["HTML, CSS"],
    github:"https://github.com/ShailajaTripathi/nuuk",
    url: "https://nuukweb.herokuapp.com/",
    detail:" A Static single web page with various sections."
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Task Management Web-page",
    skills: ["HTML, CSS"],
    url: "https://sugary-grape-bandana.glitch.me/",
    github:"https://github.com/ShailajaTripathi/taskManager",
    detail:" Static webpage to manage tasks with three different sections."
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: " Stunning Web-page",
    skills: ["HTML, CSS"],
    url: "https://truth-malachite-pruner.glitch.me/#",
    github:"https://github.com/ShailajaTripathi/stunning-Webapp",
    detail:" Static web page with a proper navbar and body section"
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Goibibo Clone Web-application",
    skills: ["React,ExpressJS,Javascript,CSS"],
    url: "https://goibibi.herokuapp.com/",
    github:"https://github.com/Sharoof-Khan/Goibibo-Clone",
    detail:"React clone application for online travel booking."
  },

  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Event Descriptive Website",
    skills: ["HTML, CSS, Bootstrap"],
    url: "https://exploremathura.herokuapp.com/",
    github:"https://github.com/ShailajaTripathi/event",
    detail:"This is full responsive clone application for showing events of Braj."
  },
];
// 
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an message.",
  copyright: "Shailaja Tripathi",
  contactUrl: "https://formspree.io/f/xoqrarka",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/ShailajaTripathi",
  twitter: "https://twitter.com/ShailajaTripa10",
  linkedin: "https://www.linkedin.com/in/shailaja-tripathi-3bb847193/",
  instagram: "https://www.instagram.com/shailaja.tripathi/",
  resume: "https://drive.google.com/file/d/1KYHp5VCqD92f29swJfJtn-VBBPpIHYuO/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
