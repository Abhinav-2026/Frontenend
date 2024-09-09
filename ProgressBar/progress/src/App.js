import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have basic styles

function ProgressBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value < 100) {
        setValue(value + 1);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [value]);

  // Dynamic background color using gradient to fill according to the percentage
  const getBarGradient = () => {
    return `linear-gradient(to right, green ${value}%, #f3f3f3 ${value}%)`;
  };

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <div style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold' }}>Progress Bar</div>

      <div
        style={{
          height: '30px',
          width: '100%',
          border: '2px solid black',
          borderRadius: '5px',
          textAlign: 'center',
          position: 'relative',
          margin: '20px 0',
          backgroundColor: '#f3f3f3', // Fallback color
          backgroundImage: getBarGradient(), // Use dynamic gradient
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'black',
            fontWeight: 'bold',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

