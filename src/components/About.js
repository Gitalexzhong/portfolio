import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Define keyframes for the bouncing effect (for emoji)
const bounce = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-8px); }
  60% { transform: translateY(4px); }
  100% { transform: translateY(0); }
`;

// Styled component for animated emoji (slower bounce)
const AnimatedEmoji = styled('span')({
  display: 'inline-block',
  fontSize: '1em',
  animation: `${bounce} 2.5s infinite ease-in-out`, // Matches typing animation
});

// Simple colored underlined effect for bold text
const SpecialText = styled('b')(({ theme, darkMode }) => ({
  fontWeight: 'bold',
  fontSize: '1.1em',
  color: darkMode ? '#ADD8E6' : '#1976d2', // Lighter blue (#ADD8E6) for dark mode, normal blue for light mode
  borderBottom: '2px solid transparent',
  transition: 'border-color 0.3s ease-in-out, color 0.3s ease-in-out',
  '&:hover': {
    borderBottom: `2px solid ${darkMode ? '#0288d1' : '#1565c0'}`, // Darker blue on hover for both modes
    color: darkMode ? '#0288d1' : '#1565c0', // Darker blue on hover for both modes
  },
}));

// Styled container
const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '50px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
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

// Typing Effect Component with adjusted timing
const TypingEffect = ({ text, duration = 2500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Use Intersection Observer to detect when text enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Typing effect logic
  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingSpeed = duration / text.length; // Ensure it matches bounce animation time

      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [isVisible, text, duration]);

  return <SpecialText ref={ref}>{displayedText}</SpecialText>;
};

function About({ darkMode }) {
  return (
    <section id="about">
      <Container>
        <TextSection>
          <Typography variant="h3" component="h1" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h5" paragraph>
            Hey there! I'm a <TypingEffect text="Computer Science Graduate" duration={2500} /> with an obsession
            for uncovering insights hidden in data.
          </Typography>
          <Typography variant="h5" paragraph>
            Right now, I'm on a mission to crack the code of{' '}
            <TypingEffect text="Data Analytics" duration={2500} />, figuring out how numbers tell stories, drive
            decisions, and maybe even predict the future (okay, not quite, but
            close!).
          </Typography>
          <Typography variant="h5" paragraph>
            I love a good challenge, and I'm on a mission to find the path to
            that next <SpecialText darkMode={darkMode}>“<AnimatedEmoji>aha!</AnimatedEmoji>”</SpecialText> moment.
          </Typography>
        </TextSection>
      </Container>
    </section>
  );
}

export default About;
