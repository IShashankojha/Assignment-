import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={styles.nav}>
    <Link to="/" style={styles.link}>Home</Link>
    <Link to="/login" style={styles.link}>Login</Link>
    <Link to="/register" style={styles.link}>Register</Link>
  </nav>
);

const styles = {
  nav: {
    marginBottom: '20px',
    backgroundColor: '#007bff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  }
};

export default Navbar;
