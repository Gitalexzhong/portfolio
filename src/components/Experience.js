import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dxcLogo from '../assets/DXC_Technology_logo_(2021).svg.png';
import emlLogo from '../assets/EML.png';
import unswLofiLogo from '../assets/Lofi.png';
import unswOpsLogo from '../assets/Onepiece.jpg';
import nswEcLogo from '../assets/NSWelec.png';

// Keyframe for hover animation (job titles slide up and color changes)
const jobTitleHoverAnimation = keyframes`
  0% {
    transform: translateY(0);
    color: inherit;
    opacity: 0.7;
  }
  100% {
    transform: translateY(-3px);
    color: #90CAF9;
    opacity: 1;
  }
`;

// Card hover animation (slight scaling effect)
const cardHoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ExperienceContainer = styled(Box)(({ darkMode }) => ({
  padding: '50px',
  color: darkMode ? '#E0E0E0' : '#263238',
  transition: 'color 0.5s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  // Removed background color
}));

const ExperienceCardsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
});

const ExperienceCard = styled(Box)(({ darkMode }) => ({
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
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  alignItems: 'center',
  position: 'relative',
  '&:hover': {
    animation: `${cardHoverAnimation} 0.3s ease-out forwards`,
  },
}));

const CompanyName = styled(Typography)(({ darkMode }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: darkMode ? '#1976d2' : '#1976d2',
  marginBottom: '15px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const LogoWrapper = styled(Box)(({ darkMode }) => ({
  width: 120,
  height: 120,
  borderRadius: '12px',
  backgroundColor: darkMode ? '#FFFFFF' : '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  marginBottom: '12px',
  boxShadow: darkMode
    ? '0 0 0 1px rgba(255, 255, 255, 0.08)'
    : '0 0 0 1px rgba(0, 0, 0, 0.04)',
}));

const CompanyLogo = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: '8px',
});

const JobTitle = styled(Typography)(({ darkMode, isHovered, index }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: darkMode ? '#90CAF9' : '#0D47A1',
  marginTop: '10px',
  transition: 'transform 0.3s ease, color 0.3s ease, opacity 0.3s ease',
  opacity: isHovered ? 1 : 0.8,
  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
  animation: isHovered
    ? `${jobTitleHoverAnimation} 0.3s ease-out ${index * 0.1}s forwards`
    : 'none',
}));

const JobDate = styled(Typography)(({ darkMode }) => ({
  fontSize: '1rem',
  color: darkMode ? '#B0BEC5' : '#546E7A',
}));

const SeeAllButton = styled(Button)(({ darkMode }) => ({
  marginTop: '20px',
  color: darkMode ? '#90CAF9' : '#0D47A1',
  borderColor: darkMode ? '#90CAF9' : '#0D47A1',
  '&:hover': {
    backgroundColor: darkMode
      ? 'rgba(144, 202, 249, 0.1)'
      : 'rgba(13, 71, 161, 0.1)',
    borderColor: darkMode ? '#90CAF9' : '#0D47A1',
  },
}));

function Experience({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Experience data for all companies
  const experienceData = [
    {
      company: 'DXC Technology',
      logo: dxcLogo,
      linkedin: 'https://www.linkedin.com/company/dxc-technology/',
      roles: [
        {
          title: 'Analyst II - Business Process Transactions',
          startDate: 'Feb 2025',
          endDate: 'Present',
        },
      ],
    },
    {
      company: 'EML Group',
      logo: emlLogo,
      linkedin: 'https://www.linkedin.com/company/eml-group/',
      roles: [
        {
          title: 'Injury Management Case Manager',
          startDate: 'Jan 2022',
          endDate: 'Jul 2022',
        },
      ],
    },
    {
      company: 'UNSW Lofi Society',
      logo: unswLofiLogo,
      linkedin: 'https://www.linkedin.com/company/unsw-lofi-society/',
      roles: [
        {
          title: 'President',
          startDate: 'Sep 2023',
          endDate: 'Jan 2025',
        },
      ],
    },
    {
      company: 'UNSW One Piece Society',
      logo: unswOpsLogo,
      linkedin: 'https://www.linkedin.com/company/unsw-one-piece-society/',
      roles: [
        {
          title: 'Arc Delegate',
          startDate: 'Sep 2023',
          endDate: 'Jan 2025',
        },
        {
          title: 'Grievance Officer',
          startDate: 'Mar 2022',
          endDate: 'Jan 2024',
        },
        {
          title: 'Technical Director',
          startDate: 'Mar 2022',
          endDate: 'Jan 2024',
        },
      ],
    },
    {
      company: 'NSW Electoral Commission',
      logo: nswEcLogo,
      linkedin: 'https://www.linkedin.com/company/nsw-electoral-commission/',
      roles: [
        {
          title: 'Declaration Vote Issuing Officer',
          startDate: '2024',
          endDate: '2024',
        },
        {
          title: 'Data Entry Officer',
          startDate: '2021',
          endDate: '2024',
        },
        {
          title: 'Election Official',
          startDate: '2021',
          endDate: '2022',
        },
      ],
    },
  ];

  return (
    <section id="experience">
      <ExperienceContainer darkMode={darkMode}>
        <Typography variant="h3" component="h1" gutterBottom>
          Experience
        </Typography>
        <ExperienceCardsContainer>
          {experienceData.map((company, index) => (
            <ExperienceCard
              key={index}
              darkMode={darkMode}
              onMouseEnter={() => setHoveredCard(index + 1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <LogoWrapper darkMode={darkMode}>
                <CompanyLogo src={company.logo} alt={`${company.company} Logo`} />
              </LogoWrapper>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <CompanyName darkMode={darkMode}>{company.company}</CompanyName>
              </a>
              {company.roles.map((role, roleIndex) => (
                <Box key={roleIndex}>
                  <JobTitle
                    darkMode={darkMode}
                    isHovered={hoveredCard === index + 1}
                    index={roleIndex}
                  >
                    {role.title}
                  </JobTitle>
                  <JobDate darkMode={darkMode}>
                    {role.startDate} - {role.endDate}
                  </JobDate>
                </Box>
              ))}
            </ExperienceCard>
          ))}
        </ExperienceCardsContainer>
        <SeeAllButton
          variant="outlined"
          darkMode={darkMode}
          href="https://www.linkedin.com/in/alexzhong1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />‎ See More on LinkedIn
        </SeeAllButton>
      </ExperienceContainer>
    </section>
  );
}

export default Experience;
