import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// Styled components
const ContactContainer = styled(Box)(({ darkMode }) => ({
  padding: '50px',
  color: darkMode ? '#E0E0E0' : '#263238',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  textAlign: 'center',
}));

const ContactDescription = styled(Typography)(({ darkMode }) => ({
  fontSize: '1.25rem',
  color: darkMode ? '#B0BEC5' : '#546E7A',
  maxWidth: '600px',
  marginBottom: '20px',
}));

const SocialIconsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap', // Wrap buttons on smaller screens
  gap: '15px',
});

// Styled Button for uniform size
const SocialIconButton = styled(Button)(({ darkMode }) => ({
  color: darkMode ? '#90CAF9' : '#0D47A1',
  borderColor: darkMode ? '#90CAF9' : '#0D47A1',
  padding: '12px 24px',
  fontSize: '1rem',
  minWidth: '200px', // Ensures all buttons have the same width
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px', // Adds space between icon and text
  '&:hover': {
    backgroundColor: darkMode
      ? 'rgba(144, 202, 249, 0.1)'
      : 'rgba(13, 71, 161, 0.1)',
    borderColor: darkMode ? '#90CAF9' : '#0D47A1',
  },
}));

function Contact({ darkMode }) {
  return (
    <section id="contact">
      <ContactContainer darkMode={darkMode}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <ContactDescription darkMode={darkMode}>
          Feel free to reach out to me via email or connect with me on my social media platforms. I'm always open to new opportunities and collaborations!
        </ContactDescription>

        {/* Email Address */}
        <Typography
          sx={{ fontSize: '1.25rem', color: darkMode ? '#B0BEC5' : '#546E7A', margin: '20px 0' }}
        >
          Email: <strong>alexzhong108@gmail.com</strong>
        </Typography>

        {/* Social Media Buttons */}
        <SocialIconsContainer>
          <SocialIconButton
            variant="outlined"
            darkMode={darkMode}
            href="https://github.com/Gitalexzhong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon /> GitHub
          </SocialIconButton>
          <SocialIconButton
            variant="outlined"
            darkMode={darkMode}
            href="https://www.linkedin.com/in/alexzhong1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon /> LinkedIn
          </SocialIconButton>
          <SocialIconButton
            variant="outlined"
            darkMode={darkMode}
            href="mailto:alexzhong108@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon /> Email
          </SocialIconButton>
        </SocialIconsContainer>
      </ContactContainer>
    </section>
  );
}

export default Contact;
