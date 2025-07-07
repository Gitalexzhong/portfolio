// src/data/projects.js

import ParkEaseImage from '../assets/ParkEase.png';
import WebsiteImage from '../assets/Website.png';
import DiscordImage from '../assets/discord-featured.avif';
import RTWSiraImage from '../assets/RTWSira.png';

export const projects = [
  {
    key: 'personalPortfolio',
    name: 'Personal Portfolio Website',
    description:
      'A personal portfolio website to showcase my projects and skills. Built with React, Material-UI, and hosted using Vercel.',
    websiteLink: 'https://gitalexzhong.github.io/portfolio/',
    githubLink: 'https://github.com/Gitalexzhong/portfolio/',
    image: WebsiteImage,
    public: true,
  },
  {
    key: 'modularVerificationBot',
    name: 'Cloud Hosted - Modular Verification Bot',
    description:
      'A low-bandwidth Docker-based bot designed to interact with external image databases for verification. Technologies used: Node.js, Docker, Google Cloud.',
    githubLink: 'https://github.com/Gitalexzhong/OPBOT',
    image: DiscordImage,
    public: true,
  },
  {
    key: 'parkingSystem',
    name: 'Scalable Parking Administration System',
    description:
      'A full-stack solution for a scalable parking booking system. Built with React, Node.js, and Redis for real-time data processing. Private repo (Available on request).',
    githubLink: null,
    image: ParkEaseImage,
    public: false,
  },
  {
    key: 'rtwRehabProviderSearch',
    name: 'RTW Rehab Provider Search',
    description:
      'A responsive web app for searching and visualizing RTW rehab provider locations in Australia. Built with Python, React, Vite, Leaflet, and Material-UI. Features an interactive map, address search, and provider filtering.',
    websiteLink: 'https://rtw-sira-rehab-finder.vercel.app/',
    githubLink: 'https://github.com/Gitalexzhong/webscrape-sira-rtw',
    image: RTWSiraImage,
    public: true,
  },
];
