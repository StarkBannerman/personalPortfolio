import profileImage from "../src/assets/images/profileImage.jpg";
import BotImage from "../src/assets/images/botImage1.jpg";
import weatherImage from "../src/assets/images/weatherImage.webp";
import WixLogo from "../src/assets/images/wixLogo.png";
const logotext = "Arun";
const meta = {
  title: "I’m Arun kumar E",
  description: "I'm a Full stack Software Engineer",
};

const introdata = {
  title: "I’m Arun kumar E",
  animated: {
    first: "I love Solving Problems",
    second: "I build apps in WIX, SHOPIFY",
    third: "I'm a MERN enthusiast",
  },
  description:
    "Full Stack Developer with a passion for problem solving and web development. Over a year of hands-on experience in the MERN stack, building responsive and user-friendly web applications. Strong foundation in both front-end and back-end technologies, with a focus on delivering high-quality, scalable solutions.",
  your_img_url: profileImage,
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "MSc Computer Science, Gold Medalist. Build two apps on platforms like wix and shopify.",
};
const worktimeline = [
  {
    jobtitle: "Full stack Software Engineer",
    where: "Santhe Opc Pvt Ltd",
    date: "2023 - present",
  },
  {
    jobtitle: "Subject Matter Expert ",
    where: "[24]7.ai",
    date: "2020 - 2023",
  },
];

const skills = [
  {
    name: "React JS",
    value: 90,
  },
  {
    name: "Express and NodeJS",
    value: 85,
  },
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "MongoDB",
    value: 70,
  },
  {
    name: "REST API's",
    value: 85,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Co-Ordinated with multiple Design teams to code frontend with pixel perfect UI.",
  },
  {
    title: "API Design",
    description:
      "Designed the API and conceptualized the server architecture to handle calls from various sources, including webhooks, frontend, and other services.",
  },
];

const dataportfolio = [
  {
    img: BotImage,
    description: "A simple Chatbot to Answer your quieries, it uses Mistral AI",
    link: "https://projects.aruncodes.site/client/bot",
  },
  {
    img: weatherImage,
    description:
      "A simple Weather app, which gives the weather for your current location",
    link: "https://projects.aruncodes.site/client/weather",
  },
  {
    img: WixLogo,
    description:
      "A wix app, whcih creates Shipping labels for every order created on Wix Online Store",
    link: "https://wix.to/TmnhzO4",
  },
];

const contactConfig = {
  YOUR_EMAIL: "arunkumare.dev@gmail.com",
  YOUR_FONE: "+919620988054",
  description: "Bengaluru, Karnataka",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_skep15u",
  YOUR_TEMPLATE_ID: "template_2plpir7",
  YOUR_USER_ID: "wppd0ET9DmNagPg6u",
};

const socialprofils = {
  github: "https://github.com/StarkBannerman",
  //   facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/arun-kumar-e-1a6b421a6/",
  //   twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
