import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ParkEaseImage from '../assets/ParkEase.png';
import WebsiteImage from '../assets/Website.png';
import DiscordImage from '../assets/discord-featured.avif';

const ProjectContainer = styled(Box)(({ darkMode }) => ({
  padding: '50px',
  color: darkMode ? '#E0E0E0' : '#263238',
  transition: 'color 0.5s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
}));

const ProjectCardsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
});

const ProjectCard = styled(Box)(({ darkMode }) => ({
  width: '100%',
  maxWidth: '350px',
  minWidth: '280px',
  background: darkMode
    ? 'linear-gradient(145deg, #1E1E1E, #121212)'
    : 'linear-gradient(145deg, #FFFFFF, #F8F9FA)',
  boxShadow: darkMode
    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: darkMode
      ? '0 6px 30px rgba(0, 0, 0, 0.5)'
      : '0 6px 30px rgba(0, 0, 0, 0.2)',
  },
}));

const ProjectTitle = styled(Typography)(({ darkMode }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: darkMode ? '#1976d2' : '#1976d2',
  marginBottom: '15px',
  textAlign: 'center',
}));

const ProjectDescription = styled(Typography)(({ darkMode }) => ({
  fontSize: '1rem',
  color: darkMode ? '#B0BEC5' : '#546E7A',
  textAlign: 'center',
  marginBottom: '20px',
}));

const ProjectButton = styled(Button)(({ darkMode }) => ({
  width: '100%',
  maxWidth: '250px',
  marginTop: '10px',
  color: darkMode ? '#90CAF9' : '#0D47A1',
  borderColor: darkMode ? '#90CAF9' : '#0D47A1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  '&:hover': {
    backgroundColor: darkMode
      ? 'rgba(144, 202, 249, 0.1)'
      : 'rgba(13, 71, 161, 0.1)',
    borderColor: darkMode ? '#90CAF9' : '#0D47A1',
  },
}));

// Add image paths in your project data
const projectData = {
  personalPortfolio: {
    name: "Personal Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills. Built with React, Material-UI, and hosted using Vercel.",
    websiteLink: "https://gitalexzhong.github.io/portfolio/",
    githubLink: "https://github.com/Gitalexzhong/portfolio/",
    image: WebsiteImage,  // Use imported image here
  },
  modularVerificationBot: {
    name: "Cloud Hosted - Modular Verification Bot",
    description: "A low-bandwidth Docker-based bot designed to interact with external image databases for verification. Technologies used: Node.js, Docker, Google Cloud.",
    githubLink: "https://github.com/Gitalexzhong/OPBOT",
    image: DiscordImage,  // Use imported image here
  },
  parkingSystem: {
    name: "Scalable Parking Administration System",
    description: "A full-stack solution for a scalable parking booking system. Built with React, Node.js, and Redis for real-time data processing. Private repo (Available on request).",
    githubLink: null,
    image: ParkEaseImage,  // Use the imported image here
  },
};

function Projects({ darkMode }) {
  return (
    <section id="projects">
      <ProjectContainer darkMode={darkMode}>
        <Typography variant="h3" component="h1" gutterBottom>
          Projects
        </Typography>
        <ProjectCardsContainer>
          {/* Personal Portfolio Card */}
          <ProjectCard darkMode={darkMode}>
            <img
              src={projectData.personalPortfolio.image}
              alt="Personal Portfolio"
              style={{
                width: '100%',
                height: '200px', // Ensure consistent height
                objectFit: 'cover', // Make image cover the area while maintaining aspect ratio
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            />
            <ProjectTitle darkMode={darkMode}>{projectData.personalPortfolio.name}</ProjectTitle>
            <ProjectDescription darkMode={darkMode}>{projectData.personalPortfolio.description}</ProjectDescription>
            <ProjectButton
              variant="outlined"
              darkMode={darkMode}
              href={projectData.personalPortfolio.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon /> Visit Website
            </ProjectButton>
            <ProjectButton
              variant="outlined"
              darkMode={darkMode}
              href={projectData.personalPortfolio.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> View on GitHub
            </ProjectButton>
          </ProjectCard>

          {/* Modular Verification Bot Card */}
          <ProjectCard darkMode={darkMode}>
            <img
              src={projectData.modularVerificationBot.image}
              alt="Modular Verification Bot"
              style={{
                width: '100%',
                height: '200px', // Ensure consistent height
                objectFit: 'cover', // Make image cover the area while maintaining aspect ratio
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            />
            <ProjectTitle darkMode={darkMode}>{projectData.modularVerificationBot.name}</ProjectTitle>
            <ProjectDescription darkMode={darkMode}>{projectData.modularVerificationBot.description}</ProjectDescription>
            <ProjectButton
              variant="outlined"
              darkMode={darkMode}
              href={projectData.modularVerificationBot.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> View on GitHub
            </ProjectButton>
          </ProjectCard>

          {/* Parking System Card */}
          <ProjectCard darkMode={darkMode}>
            <img
              src={projectData.parkingSystem.image}
              alt="Parking System"
              style={{
                width: '100%',
                height: '200px', // Ensure consistent height
                objectFit: 'cover', // Make image cover the area while maintaining aspect ratio
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            />
            <ProjectTitle darkMode={darkMode}>{projectData.parkingSystem.name}</ProjectTitle>
            <ProjectDescription darkMode={darkMode}>{projectData.parkingSystem.description}</ProjectDescription>
            <ProjectButton
              variant="outlined"
              darkMode={darkMode}
              href="#"
              disabled
            >
              Not Public
            </ProjectButton>
          </ProjectCard>
        </ProjectCardsContainer>

        <ProjectButton
          variant="outlined"
          darkMode={darkMode}
          href="https://github.com/Gitalexzhong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon /> See More on GitHub
        </ProjectButton>
      </ProjectContainer>
    </section>
  );
}

export default Projects;
