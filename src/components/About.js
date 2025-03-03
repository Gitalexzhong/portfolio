import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for a unique design
const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '50px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack on small screens
    textAlign: 'center',
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingRight: '20px',
  [theme.breakpoints.down('md')]: {
    paddingRight: '0',
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '300px',
  width: '100%',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
  },
}));

function About() {
  return (
    <section id="about">
      <Container>
        <TextSection>
          <Typography variant="h3" component="h1" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h5" paragraph>
            Computer Science Graduate with experience building integrated
            software for cloud deployment. Eager to leverage strong development
            skills and a passion for continuous learning to excel as a Backend
            Software Engineer. Currently expanding my knowledge in full-stack
            development processes through personal projects.

            TBA TO BE FILLED OUT LATER
          </Typography>
        </TextSection>
      </Container>
    </section>
  );
}

export default About;
