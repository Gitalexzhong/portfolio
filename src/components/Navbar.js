import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <li style={{ margin: '0 15px' }}>
          <a href="#about">About</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#experience">Experience</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
