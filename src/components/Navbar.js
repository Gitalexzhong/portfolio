import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled, keyframes } from '@mui/system';

// Sparkle effect for the text
const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Glow effect for the dark mode button
const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
  50% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
  100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
`;

const FloatingAppBar = styled(AppBar)(({ darkmode }) => ({
  position: 'fixed',
  top: 16,
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: '95%',
  borderRadius: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',
  backgroundColor: darkmode
    ? 'rgba(30, 30, 30, 0.9)'
    : 'rgba(255, 255, 255, 0.9)',
  color: darkmode ? '#fff' : '#333',
  padding: '8px 16px',
  transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
}));

function Navbar({ darkMode, toggleDarkMode }) {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Detect small screens

  return (
    <FloatingAppBar darkmode={darkMode ? 1 : 0}>
      <Toolbar sx={{ width: '95%', justifyContent: 'space-between' }}>
        {/* Logo or Title on the left */}
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            background: darkMode
              ? 'linear-gradient(135deg, #f39c12, #e74c3c, #f39c12)'
              : 'linear-gradient(135deg, #3498db, #8e44ad, #3498db)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            backgroundSize: '200% 200%',
            animation: `${shimmer} 3s infinite linear`,
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          Alex.Dev
        </Typography>

        {/* Navigation buttons + Dark Mode Toggle */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Dark Mode Toggle Button */}
          <IconButton
            color="inherit"
            onClick={toggleDarkMode}
            sx={{
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                animation: `${glow} 1.5s infinite alternate`,
              },
            }}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Show buttons on larger screens */}
          {!isSmallScreen && (
            <>
              <Button color="inherit" href="#about">
                About
              </Button>
              <Button color="inherit" href="#experience">
                Experience
              </Button>
              <Button color="inherit" href="#projects">
                Projects
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </FloatingAppBar>
  );
}

export default Navbar;
