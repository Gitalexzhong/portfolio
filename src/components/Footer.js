import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// Styled component for Footer
const FooterContainer = styled(Box)(({ theme, darkmode }) => ({
  backgroundColor: darkmode ? '#121212' : '#fff',
  color: darkmode ? '#fff' : '#333',
  display: 'flex',
  flexWrap: 'wrap',  // Allow wrapping for responsiveness
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  position: 'relative',
  bottom: 0,
  width: '100%',
  maxWidth: '100%',  // Prevents overflow
  boxSizing: 'border-box', // Ensures padding doesn’t increase width
  boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden', // Prevents horizontal scrolling
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

// Footer text styling
const FooterText = styled(Typography)(({ darkmode }) => ({
  color: darkmode ? '#fff' : '#333',
  marginBottom: '10px',
  textAlign: 'left',
}));

// Name styling
const StyledName = styled(Typography)(({ darkmode }) => ({
  fontSize: '1.3rem',
  color: darkmode ? '#fff' : '#999',
  textAlign: 'center',
}));

// Social Icons Container
const SocialIconsContainer = styled(Box)({
  display: 'flex',
  gap: '15px',
  flexWrap: 'wrap', // Prevents icons from overflowing
  justifyContent: 'center', // Center aligns on smaller screens
});

// Social Icon Styling
const SocialIconButton = styled(IconButton)(({ darkmode }) => ({
  color: darkmode ? '#fff' : '#333',
  '& svg': {
    fontSize: '2rem', // Standardized icon size
    strokeWidth: 1.5,
    stroke: darkmode ? '#fff' : '#999',
    fill: 'none',
  },
  '&:hover': {
    color: darkmode ? '#90CAF9' : '#1976d2', // Color change on hover
    '& svg': {
      stroke: darkmode ? '#90CAF9' : '#1976d2', // Hover effect for stroke
    },
  },
}));

const Footer = ({ darkMode }) => {
  return (
    <FooterContainer darkmode={darkMode}>
      <FooterText darkmode={darkMode}>
        <StyledName darkmode={darkMode}>Alex Zhong © {new Date().getFullYear()}</StyledName>
      </FooterText>
      <SocialIconsContainer>
        <SocialIconButton href="https://github.com/Gitalexzhong" target="_blank">
          <GitHubIcon />
        </SocialIconButton>
        <SocialIconButton href="https://www.linkedin.com/in/alexzhong1/" target="_blank">
          <LinkedInIcon />
        </SocialIconButton>
        <SocialIconButton href="mailto:alexzhong108@gmail.com" target="_blank">
          <EmailIcon />
        </SocialIconButton>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
