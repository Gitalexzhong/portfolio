import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const FloatingAppBar = styled(AppBar)(() => ({
  position: 'fixed',
  top: 16, // Keeps space from the top
  left: '50%',
  transform: 'translateX(-50%)', // Centers it
  maxWidth: '95%', // Makes the navbar cover more width
  borderRadius: '16px', // Rounded corners for floating effect
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)', // Floating shadow
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency
  color: '#333',
  padding: '8px 16px',
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <FloatingAppBar>
      <Toolbar sx={{ width: '95%', justifyContent: 'space-between' }}>
        {/* Logo or Title on the left */}
        <Typography variant="h6" sx={{ textAlign: 'left' }}>
          Alex.Dev
        </Typography>

        {/* Buttons on the right (Fixing Disappearance Issue) */}
        <div
          style={{
            display: 'flex', // Ensures buttons always appear
            gap: '16px', // Adds spacing between buttons
          }}
        >
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#experience">
            Experience
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
        </div>

        {/* Hamburger menu for small screens */}
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', sm: 'none' } }} // Only show on small screens
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown menu (for small screens) */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component="a" href="#about">
            About
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#experience">
            Experience
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#projects">
            Projects
          </MenuItem>
        </Menu>
      </Toolbar>
    </FloatingAppBar>
  );
}

export default Navbar;
