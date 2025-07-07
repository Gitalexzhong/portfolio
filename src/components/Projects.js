import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { projects } from '../data/projects';

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
  color: darkMode ? '#fff' : '#1976d2',
  marginBottom: '15px',
  textAlign: 'center',
}));

const ProjectDescription = styled(Typography)(({ darkMode }) => ({
  fontSize: '1rem',
  color: darkMode ? '#e0e0e0' : '#546E7A',
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

function Projects({ darkMode }) {
  return (
    <section id="projects">
      <ProjectContainer darkMode={darkMode}>
        <Typography variant="h3" component="h1" gutterBottom>
          Projects
        </Typography>
        <ProjectCardsContainer>
          {projects.map((project) => (
            <ProjectCard darkMode={darkMode} key={project.key}>
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '20px',
                }}
              />
              <ProjectTitle darkMode={darkMode}>{project.name}</ProjectTitle>
              <ProjectDescription darkMode={darkMode}>{project.description}</ProjectDescription>
              {project.websiteLink && (
                <ProjectButton
                  variant="outlined"
                  darkMode={darkMode}
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LanguageIcon /> Visit Website
                </ProjectButton>
              )}
              {project.githubLink && (
                <ProjectButton
                  variant="outlined"
                  darkMode={darkMode}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon /> View on GitHub
                </ProjectButton>
              )}
              {!project.public && (
                <ProjectButton
                  variant="outlined"
                  darkMode={darkMode}
                  href="#"
                  disabled
                  style={{
                    color: darkMode ? '#888' : '#b0bec5',
                    backgroundColor: darkMode ? '#23272b' : '#f5f5f5',
                    fontWeight: 400,
                    borderColor: darkMode ? '#23272b' : '#f5f5f5',
                    opacity: 0.7,
                    cursor: 'not-allowed',
                    boxShadow: 'none',
                  }}
                >
                  Not Public
                </ProjectButton>
              )}
            </ProjectCard>
          ))}
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
