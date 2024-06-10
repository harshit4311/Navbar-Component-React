// src/Progress/Progress.jsx
import React, { useState } from 'react';
import './Progress.css';

function Progress() {
  const [percentage, setPercentage] = useState(0); 
  
  const increasePercentage = () => {
    console.log("Increase percentage clicked");
    const newPercentage = Math.min(100, percentage + 10); 
    console.log("New percentage:", newPercentage);
    setPercentage(newPercentage);
  };

  return (
    <div className="progress-bar-container" onClick={increasePercentage}>
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <span className="progress-bar-text">{percentage}%</span>
      </div>
    </div>
  );
}

export default Progress;
