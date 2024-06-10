// src/Typewriter.js
import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, startTyping }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 150); // Adjust the delay as needed
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, displayedText, startTyping]);

  return <span className="typewriter">{displayedText}</span>;
};

export default Typewriter;
