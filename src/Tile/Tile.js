// src/Tile/Tile.js
import React from "react";

const Tile = ({ header, subHeader, img, text, link, linkText, bgColor }) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: bgColor || '#fff',
    padding: '20px',
    width: '99%', 
    maxWidth: '1500px',
    height: '500px', 
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const textContainerStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: bgColor || 'green',
    color: 'white',
    borderRadius: '8px 0 0 8px',
  };

  const imgContainerStyles = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '0 8px 8px 0',
  };

  const imgStyles = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '8px',
  };

  const linkStyles = {
    color: '#1e90ff',
    textDecoration: 'none',
    marginTop: '10px',
  };

  return (
    <div style={containerStyles}>
      <div style={textContainerStyles}>
        {header && <h2>{header}</h2>}
        <h3>{subHeader}</h3>
        <div>{text}</div>
        <div>
          <a href={link} style={linkStyles}>{linkText}</a>
        </div>
      </div>
      <div style={imgContainerStyles}>
        <img src={img} alt="tile-img" style={imgStyles} />
      </div>
    </div>
  );
};

export default Tile;
