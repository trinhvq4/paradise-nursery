import React from 'react';
// import './AboutUs.css'; // Uncomment if you add a specific CSS file

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to Paradise Nursery</h1>
        <p style={styles.subtitle}>Where Green Meets Serenity</p>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        <p style={styles.text}>
          At <strong>Paradise Nursery</strong>, our mission is to bring the beauty of nature 
          directly to your home. We believe that plants are more than just decorations; they are 
          living companions that breathe life, joy, and tranquility into our spaces.
        </p>
        
        <p style={styles.text}>
          Our journey began with a simple idea: to provide a curated selection of high-quality, 
          sustainably sourced houseplants that cater to both seasoned gardeners and beginners alike. 
        </p>

        <p style={styles.text}>
          Our team of plant enthusiasts is dedicated to ensuring that every plant leaves our nursery 
          healthy, happy, and ready to thrive in its new home.
        </p>

        <p style={styles.text}>
          Thank you for choosing Paradise Nursery to be a part of your green journey. Let's grow together!
        </p>
      </div>
    </div>
  );
};

// Simple inline styles for immediate rendering without an external CSS file
const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    textAlign: 'center',
  },
  header: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2E8B57', // SeaGreen color
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    font
