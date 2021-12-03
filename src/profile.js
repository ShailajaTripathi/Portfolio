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
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5"
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3"
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js"
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react"
  },
  
  {
    name: "Bootstrap",
    // svg: '',
    faClass: "fab fa-bootstrap"
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java"
  },
  ,
  {
    name: "Database",
    // svg: '',
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
    id: "Project 1 ",
    name: "Law Firm Management website ",
  
    skills: ["HTML, CSS,PHP,Bootstrap,JS"],
    github:"https://github.com/himanshu-98/newDsn",
    url: "https://dsnlegal.com/login.php",
    detail: " A secured full-stack website to store all the case details of DSN Legal Firm."

  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Nuuk Landing Web Page",
    skills: ["HTML, CSS"],
    github:"https://github.com/ShailajaTripathi/nuuk",
    url: "https://nuukweb.herokuapp.com/",
    detail:" A Static single web page with various sections."
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Task Management Website",
    skills: ["HTML, CSS"],
    url: "https://sugary-grape-bandana.glitch.me/",
    github:"https://github.com/ShailajaTripathi/taskManager",
    detail:" Static webpage to manage tasks with three different sections."
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Firm Webinar Form Page",
    skills: ["HTML, CSS,Bootstrap,PHP"],
    url: "https://www.dsnlegal.com/register_for_conference.php",
    github:"",
    detail:" Registration form for the Webinar of DSN Legal firm"
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Goibibo Clone",
    skills: ["React,ExpressJS,Javascript,CSS"],
    url: "https://goibibi.herokuapp.com/",
    github:"https://github.com/Sharoof-Khan/Goibibo-Clone",
    detail:"React clone application for online travel booking."
  },

  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Lynda Online Learning clone application",
    skills: ["HTML, CSS, JS,EJS"],
    url: "",
    github:"https://github.com/sumitsingh-ara/Lynda_Backend",
    detail:"This is full responsive clone application for online learning"
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/ShailajaTripathi",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/ShailajaTripathi",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/ShailajaTripathi",
  },
];
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
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
