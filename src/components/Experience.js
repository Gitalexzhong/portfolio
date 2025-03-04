import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Keyframe for initial subtle downward animation (on load)
const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled components
const ExperienceContainer = styled(Box)(({ theme, darkMode }) => ({
  padding: '50px',
  color: darkMode ? '#fff' : '#333',
  transition: 'color 0.5s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
}));

const ExperienceTitle = styled(Typography)(({ theme, darkMode }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: darkMode ? '#ADD8E6' : '#1E3A8A',
  marginBottom: '20px',
}));

const ExperienceCardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
}));

const ExperienceCard = styled(Box)(({ theme, darkMode }) => ({
  width: '100%',
  maxWidth: '350px',
  minWidth: '280px',
  background: darkMode
    ? 'linear-gradient(145deg, #1E1E1E, #2C2C2C)'
    : 'linear-gradient(145deg, #FFFFFF, #F0F0F0)',
  boxShadow: darkMode
    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  alignItems: 'center',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: darkMode
      ? '0 8px 30px rgba(0, 0, 0, 0.5)'
      : '0 8px 30px rgba(0, 0, 0, 0.2)',
  },
}));

const CompanyName = styled(Typography)(({ theme, darkMode }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: darkMode ? '#ADD8E6' : '#1E3A8A',
  marginBottom: '15px',
}));

// Subtle animation for job titles on hover (text color shift, slight movement)
const JobTitleAnimation = keyframes`
  0% {
    transform: translateY(0);
    color: inherit;
  }
  100% {
    transform: translateY(-5px);
    color: #ADD8E6;
  }
`;

const JobTitle = styled(Typography)(({ theme, darkMode, index }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: darkMode ? '#ADD8E6' : '#1E3A8A',
  marginTop: '10px',
  opacity: 0,
  transform: 'translateY(-10px)',
  animation: `${slideDownAnimation} 0.5s ease-out forwards`,
  animationDelay: `${index * 0.3}s`, // Delay for sequential animation
  transition: 'transform 0.3s ease, color 0.3s ease',

  // Subtle hover effect: text color change + slight movement upwards
  '&:hover': {
    animation: `${JobTitleAnimation} 0.5s ease-out forwards`,
  },
}));

const JobDate = styled(Typography)(({ theme, darkMode }) => ({
  fontSize: '1rem',
  color: darkMode ? '#B0C4DE' : '#4B5563',
}));

const CompanyLogo = styled('img')(({ theme }) => ({
  maxHeight: '50px',
  marginBottom: '10px',
  borderRadius: '8px',
}));

function Experience({ darkMode }) {
  return (
    <section id="experience">
      <ExperienceContainer darkMode={darkMode}>
        <ExperienceTitle darkMode={darkMode}>Experience</ExperienceTitle>

        {/* Flexbox container for cards */}
        <ExperienceCardsContainer>
          {/* Company 1 - Multiple roles under the same company */}
          <ExperienceCard darkMode={darkMode}>
            <CompanyLogo src="https://placehold.co/150" alt="Company Logo" />
            <CompanyName darkMode={darkMode}>Company ABC</CompanyName>

            <Box>
              <JobTitle darkMode={darkMode} index={0}>
                Software Engineer
              </JobTitle>
              <JobDate darkMode={darkMode}>2022 - Present</JobDate>
            </Box>

            <Box>
              <JobTitle darkMode={darkMode} index={1}>
                Senior Software Engineer
              </JobTitle>
              <JobDate darkMode={darkMode}>2023 - Present</JobDate>
            </Box>

            <Box>
              <JobTitle darkMode={darkMode} index={2}>
                Lead Software Engineer
              </JobTitle>
              <JobDate darkMode={darkMode}>2024 - Present</JobDate>
            </Box>
          </ExperienceCard>

          {/* Company 2 - Multiple roles under the same company */}
          <ExperienceCard darkMode={darkMode}>
            <CompanyLogo src="https://placehold.co/150" alt="Company Logo" />
            <CompanyName darkMode={darkMode}>Company XYZ</CompanyName>

            <Box>
              <JobTitle darkMode={darkMode} index={0}>
                Intern
              </JobTitle>
              <JobDate darkMode={darkMode}>2021 - 2022</JobDate>
            </Box>

            <Box>
              <JobTitle darkMode={darkMode} index={1}>
                Junior Developer
              </JobTitle>
              <JobDate darkMode={darkMode}>2022 - 2023</JobDate>
            </Box>

            <Box>
              <JobTitle darkMode={darkMode} index={2}>
                Software Engineer
              </JobTitle>
              <JobDate darkMode={darkMode}>2023 - Present</JobDate>
            </Box>
          </ExperienceCard>

          {/* Company 3 - Single role within the company */}
          <ExperienceCard darkMode={darkMode}>
            <CompanyLogo src="https://placehold.co/150" alt="Company Logo" />
            <CompanyName darkMode={darkMode}>Company DEF</CompanyName>

            <Box>
              <JobTitle darkMode={darkMode} index={0}>
                Software Developer
              </JobTitle>
              <JobDate darkMode={darkMode}>2020 - 2021</JobDate>
            </Box>
          </ExperienceCard>
        </ExperienceCardsContainer>
      </ExperienceContainer>
    </section>
  );
}

export default Experience;
