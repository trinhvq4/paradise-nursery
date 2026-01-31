import React, { useState } from 'react';
import './App.css'; // Imports the background image styles we created earlier
import AboutUs from './components/AboutUs'; // Importing the AboutUs component created earlier

function App() {
  
  // State to control whether to show the Landing Page or the Product Listing
  const [showProductList, setShowProductList] = useState(false);

  // Function to handle the "Get Started" button click
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Conditional Rendering:
        If showProductList is FALSE, render the Landing Page.
        If showProductList is TRUE, render the Main Product Area.
      */}
      
      {!showProductList ? (
        /* LANDING PAGE SECTION */
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
           
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        /* MAIN PRODUCT SECTION (Placeholder for now) */
        <div className="product-list-container">
          {/* This is where the Navigation Bar and Product List will go */}
          <div style={styles.placeholderNav}>
             <h3>Paradise Nursery</h3>
             <i>(Navigation Bar & Cart Icon will go here)</i>
          </div>

          {/* We display the About Us section here for now as part of the shop */}
          <AboutUs />
        </div>
      )}
    </div>
  );
}

// Temporary inline styles for the placeholder shop view
const styles = {
  placeholderNav: {
    backgroundColor: '#2E8B57',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    marginBottom: '20px'
  }
};

export default App;
