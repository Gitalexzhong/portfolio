import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Animation for the "Alex Zhong" text (similar to your Alex.dev text)
const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Animation for the emoji (bouncing effect)
const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Container = styled(Box)(({ theme, darkmode }) => ({
  display: 'flex',
  flexDirection: 'row', // Default row layout
  alignItems: 'center',
  justifyContent: 'space-around', // Dynamic spacing
  padding: '100px 50px 50px', // Padding to avoid overlap with navbar
  gap: '30px', // Add space between text and image
  color: darkmode ? '#fff' : '#333',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack vertically on smaller screens
    textAlign: 'center',
    gap: '20px', // Reduced gap on smaller screens
  },
}));

const TextSection = styled(Box)(({ theme, darkmode }) => ({
  textAlign: 'center',
  color: darkmode ? '#fff' : '#333',
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  maxWidth: '300px',
  width: '100%',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
  },
}));

const ProfileImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const MainText = styled(Typography)(({ darkmode }) => ({
  fontSize: '1.5rem',
  color: darkmode ? '#fff' : '#333',
  textAlign: 'left',
}));

const NameText = styled(Typography)(({ darkmode }) => ({
  fontSize: '5rem',
  fontWeight: 'bold',
  color: darkmode ? '#f39c12' : '#3498db',
  marginTop: '10px',
  background: darkmode
    ? 'linear-gradient(135deg, #f39c12, #e74c3c, #f39c12)'
    : 'linear-gradient(135deg, #3498db, #8e44ad, #3498db)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '1px',
  backgroundSize: '200% 200%',
  animation: `${shimmer} 3s infinite linear`,
  textAlign: 'left',
}));

const AnimatedEmoji = styled('span')({
  display: 'inline-block',
  animation: `${bounce} 1s infinite`,
});

function Home({ darkMode }) {
  return (
    <section id="about">
      <Container darkmode={darkMode}>
        <TextSection darkmode={darkMode}>
          <MainText variant="h3" component="h1" gutterBottom darkmode={darkMode}>
            Hello there <AnimatedEmoji>👋</AnimatedEmoji>, I'm
          </MainText>
          <NameText variant="h3" component="h1" gutterBottom darkmode={darkMode}>
            Alex Zhong
          </NameText>
        </TextSection>

        <ImageSection>
          {/* Import your local image */}
          <ProfileImage src={require('../assets/profile.jpg')} alt="Profile" />
        </ImageSection>
      </Container>
    </section>
  );
}

export default Home;
