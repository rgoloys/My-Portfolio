import Agromart from "../Static/Agromart.png";
import InternImage from "../Static/Intern.png";
import FS8 from "../Static/FS8.png";
import Ionic from "../Static/Ionic.png";
import BMI from "../Static/BMI.png";
import ScheduleFlow from "../Static/Scheduler.png";

import html from "../Static/icon/html.png";
import css from "../Static/icon/cssl.png";
import js from "../Static/icon/js.png";
import bootstrap from "../Static/icon/bootstrap.png";
import django from "../Static/icon/django.png";
import python from "../Static/icon/python.png";
import php from "../Static/icon/php.png";
import cSharp from "../Static/icon/c-sharp.png";
import codeIgniter from "../Static/icon/codeIgniter.png";
import ionicIcon from "../Static/icon/ionicA.png";

export const techStack = [
  { name: "HTML", icon: html, group: "Frontend" },
  { name: "CSS", icon: css, group: "Frontend" },
  { name: "JavaScript", icon: js, group: "Frontend" },
  { name: "Bootstrap", icon: bootstrap, group: "Frontend" },
  { name: "Python", icon: python, group: "Backend" },
  { name: "Django", icon: django, group: "Backend" },
  { name: "PHP", icon: php, group: "Backend" },
  { name: "CodeIgniter", icon: codeIgniter, group: "Backend" },
  { name: "C#", icon: cSharp, group: "Desktop" },
  { name: "Ionic", icon: ionicIcon, group: "Mobile" },
];

export const projects = [
  {
    id: "fs-network-market",
    title: "FS Network Market",
    category: "Full Stack",
    language: "JavaScript",
    repoUrl: "https://fs-network-market.vercel.app",
    description:
      "A newer JavaScript market platform from the GitHub profile, positioned as a featured full-stack build in the command center.",
    image: FS8,
    icons: [js, html, css],
    highlights: [
      "Recent 2026 repository",
      "Market-oriented platform",
      "Strong fit for full-stack case-study treatment",
    ],
    updated: "Updated Jun 6, 2026",
    featured: true,
  },
  {
    id: "calendar-scheduler",
    title: "Calendar Scheduler",
    category: "Python",
    language: "Python",
    repoUrl: "https://github.com/rgoloys/CalendarScheduler",
    description:
      "A Python scheduling repository that expands the portfolio beyond earlier school projects into workflow tooling.",
    image: ScheduleFlow,
    icons: [python],
    highlights: [
      "Recent 2026 repository",
      "Scheduling logic",
      "Useful workflow/productivity project",
    ],
    updated: "Updated Jun 2, 2026",
  },
  {
    id: "student-qr-id",
    title: "Student QR Code ID",
    category: "Python",
    language: "Python",
    repoUrl: "https://github.com/rgoloys/Student-QR-Code-ID",
    description:
      "A Python repository centered on QR-code based student identification, useful for showing practical automation and ID workflows.",
    image: null,
    icons: [python],
    highlights: [
      "QR-code workflow",
      "Student identity use case",
      "Practical automation angle",
    ],
    updated: "Updated Aug 13, 2024",
  },
  {
    id: "words-weighted-score",
    title: "Words Weighted Score Internship System",
    category: "Django",
    language: "HTML / Python",
    repoUrl:
      "https://github.com/rgoloys/Words-Weighted-Score-and-Sentiment-Analysis",
    description:
      "End-user web platform using Django and NLTK for word score tokenizing, date-range file filtering, and sentiment paragraph analysis.",
    image: InternImage,
    icons: [html, css, js, bootstrap, python, django],
    highlights: [
      "Django framework",
      "Natural language toolkit workflow",
      "Sentiment analysis and scoring",
    ],
    updated: "Updated Jun 12, 2024",
  },
  {
    id: "agromart",
    title: "AGROMART Agricultural Market",
    category: "PHP",
    language: "PHP",
    repoUrl:
      "https://github.com/rgoloys/AGROMART-A-Web-Based-System-For-Agricultural-Market",
    description:
      "E-commerce system for agricultural products, built with CodeIgniter 3, Bootstrap, Leaflet.js mapping, and Chart.js visualization.",
    image: Agromart,
    icons: [html, css, js, bootstrap, php, codeIgniter],
    highlights: [
      "CodeIgniter 3",
      "Agricultural e-commerce",
      "Mapping and chart visualizations",
    ],
    updated: "Updated Jun 6, 2024",
  },
  {
    id: "ionic-angular",
    title: "Ionic Angular UI Components Lab",
    category: "Mobile UI",
    language: "TypeScript",
    repoUrl: "https://github.com/rgoloys/My-Activities-in-Ionic-Angular",
    description:
      "Compiled Ionic activities from application development coursework, focused on mobile UI components and interaction practice.",
    image: Ionic,
    icons: [html, css, js, ionicIcon],
    highlights: [
      "Ionic components",
      "Angular/TypeScript practice",
      "Mobile UI exploration",
    ],
    updated: "Updated Jun 12, 2024",
  },
  {
    id: "csharp-speech",
    title: "C# Speech Recognition Lab",
    category: "Desktop",
    language: "C#",
    repoUrl: "https://github.com/rgoloys/C_Sharp-Speech-Recognition",
    description:
      "Windows Forms speech recognition and speech synthesis project that shows desktop application experimentation.",
    image: null,
    icons: [cSharp],
    highlights: ["Windows Forms", "Speech recognition", "Speech synthesis"],
    updated: "Updated Jun 5, 2024",
  },
  {
    id: "csharp-bmi",
    title: "BMI Automated Calculation",
    category: "Desktop",
    language: "C#",
    repoUrl: "https://github.com/rgoloys/C_Sharp-BMI-Automated-calculation",
    description:
      "BMI calculator built with C# Windows Forms, included as a compact desktop-app example.",
    image: BMI,
    icons: [cSharp],
    highlights: [
      "C# Windows Forms",
      "Automated calculation",
      "Desktop UI practice",
    ],
    updated: "Updated Jun 5, 2024",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/rgoloys" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rolando-goloya-b39368223/",
  },
  { label: "Instagram", href: "https://www.instagram.com/rlnd_glys/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100009890326790",
  },
];
