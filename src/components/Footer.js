import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; // Replaced TwitterIcon with EmailIcon

// Styled component for Footer
const FooterContainer = styled(Box)(({ theme, darkmode }) => ({
  backgroundColor: darkmode ? '#121212' : '#fff',
  color: darkmode ? '#fff' : '#333',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',  // Spread out text and social icons
  alignItems: 'center',
  padding: '20px',
  position: 'relative',
  bottom: 0,
  width: '100%',
  boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack on small screens
    textAlign: 'center',     // Center text on small screens
  },
}));

// Footer text styling
const FooterText = styled(Typography)(({ darkmode }) => ({
  color: darkmode ? '#fff' : '#333',
  marginBottom: '10px',
  flexGrow: 1,  // Ensure text takes available space and is aligned left
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}));

// Basic name styling
const StyledName = styled(Typography)(({ darkmode }) => ({
  fontWeight: 'normal',
  fontSize: '1.3rem',  // Adjust text size for name
  color: darkmode ? '#fff' : '#999',  // Simple text color with no extra styling
}));

// Social Icons Styling
const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
}));

// Outline style for social icons (silhouette effect)
const SocialIconButton = styled(IconButton)(({ theme, darkmode }) => ({
  color: darkmode ? '#fff' : '#333',
  '& svg': {
    fontSize: '1.5rem',  // Adjust icon size
    strokeWidth: 1.5,     // Make icon outlines thinner for silhouette effect
    stroke: darkmode ? '#fff' : '#999',  // Brighter icons in dark mode
    fill: 'none',         // Remove fill to make it outline only
  },
}));

const Footer = ({ darkMode }) => {
  return (
    <FooterContainer darkmode={darkMode}>
      <FooterText darkmode={darkMode}>
        <StyledName darkmode={darkMode}>Alex Zhong © {new Date().getFullYear()}</StyledName>
      </FooterText>

      <SocialIconsContainer>
        <SocialIconButton color={darkMode ? 'primary' : 'secondary'} href="https://github.com/Gitalexzhong" target="_blank">
          <GitHubIcon />
        </SocialIconButton>
        <SocialIconButton color={darkMode ? 'primary' : 'secondary'} href="https://www.linkedin.com/in/alexzhong1/" target="_blank">
          <LinkedInIcon />
        </SocialIconButton>
        <SocialIconButton color={darkMode ? 'primary' : 'secondary'} href="mailto:alexzhong108@gmail.com" target="_blank">
          <EmailIcon /> 
        </SocialIconButton>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
