import React from 'react';
import { Box, Typography, styled, keyframes } from '@mui/material';

// Keyframe for hover animation (card scaling effect)
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

const EducationContainer = styled(Box)(({ darkMode }) => ({
  padding: '50px',
  color: darkMode ? '#E0E0E0' : '#263238',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  textAlign: 'center',
}));

const EducationCard = styled(Box)(({ darkMode }) => ({
  width: '100%',
  maxWidth: '600px',
  background: darkMode
    ? 'linear-gradient(145deg, #1E1E1E, #121212)'
    : 'linear-gradient(145deg, #FFFFFF, #F8F9FA)',
  boxShadow: darkMode
    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  padding: '20px',
  textAlign: 'left',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  '&:hover': {
    animation: `${cardHoverAnimation} 0.3s ease-out forwards`,
  },
}));

const InstitutionName = styled(Typography)(({ darkMode }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: darkMode ? '#ADD8E6' : '#1976d2',
  marginBottom: '10px',
  opacity: 1, // Keep the text opacity constant on hover
  transform: 'translateY(0)', // No translation on hover
}));

const DegreeName = styled(Typography)(({ darkMode }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: darkMode ? '#90CAF9' : '#0D47A1',
  marginBottom: '10px',
}));

const MajorName = styled(Typography)(({ darkMode }) => ({
  fontSize: '1rem',
  color: darkMode ? '#B0BEC5' : '#546E7A',
  marginBottom: '10px',
}));

const DateRange = styled(Typography)(({ darkMode }) => ({
  fontSize: '1rem',
  color: darkMode ? '#B0BEC5' : '#546E7A',
  fontStyle: 'italic',
}));

const InstitutionLogo = styled('img')({
  maxHeight: '100px',
  borderRadius: '8px',
  alignSelf: 'flex-start',
});

function Education({ darkMode }) {
  return (
    <section id="education">
      <EducationContainer darkMode={darkMode}>
        <Typography variant="h3" component="h1" gutterBottom>
          Education
        </Typography>
        {/* Bachelor's Degree */}
        <EducationCard darkMode={darkMode}>
          <InstitutionLogo
            src="https://media.licdn.com/dms/image/v2/D560BAQGIlGcJynP5Dg/company-logo_200_200/company-logo_200_200/0/1709503417850/unsw_logo?e=1749081600&v=beta&t=-zqWbFb9F_VnPHWKFcYCWDgUXptrHFvnsCC0yiV1f50"
            alt="UNSW Logo"
          />
          <Box>
            <InstitutionName darkMode={darkMode}>
              University of New South Wales (UNSW)
            </InstitutionName>
            <DegreeName darkMode={darkMode}>
              Bachelor of Science (Computer Science)
            </DegreeName>
            <MajorName darkMode={darkMode}>
              Majoring in Computer Science (Database Systems)
            </MajorName>
            <DateRange darkMode={darkMode}>2021 - 2024</DateRange>
          </Box>
        </EducationCard>
        {/* PwC Power BI Internship Certification */}
        <EducationCard darkMode={darkMode}>
          <InstitutionLogo
            src="https://media.licdn.com/dms/image/v2/D4E0BAQGnGELqq6HXHw/company-logo_200_200/company-logo_200_200/0/1720517867022/pwc_logo?e=1749081600&v=beta&t=fBaqFsZk1MgGrsFYAJ8ehC_PUkaa_DUoEfAZfKD4Hqc"
            alt="PwC Logo"
          />
          <Box>
            <InstitutionName darkMode={darkMode}>
              PwC Switzerland
            </InstitutionName>
            <DegreeName darkMode={darkMode}>
              Power BI Job Simulation Certification
            </DegreeName>
            <DateRange darkMode={darkMode}>Completed: March 2025</DateRange>
          </Box>
        </EducationCard>
        
        {/* PL-300 Certification */}
        <EducationCard darkMode={darkMode}>
          <InstitutionLogo
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft Logo"
            style={{ maxHeight: '80px' }} // Adjusted size for consistency
          />
          <Box>
            <InstitutionName darkMode={darkMode}>Microsoft</InstitutionName>
            <DegreeName darkMode={darkMode}>
              PL-300: Microsoft Power BI Data Analyst Certification
            </DegreeName>
            <DateRange darkMode={darkMode}>
              Expected Completion: June 2025
            </DateRange>
          </Box>
        </EducationCard>
      </EducationContainer>
    </section>
  );
}

export default Education;
