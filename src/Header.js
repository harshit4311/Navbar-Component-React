// src/Header.js
import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import './Header.css';

const Header = () => {
  const texts = ["I'm a Machine Learning enthusiast"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTypingComplete(true);
    }, 1000); 

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (typingComplete) {
      const timeoutId = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingComplete(false);
      }, 1000); 

      return () => clearTimeout(timeoutId);
    }
  }, [currentTextIndex, typingComplete]);

  return (
    <div className="header">
      <h1>Your Name</h1>
      <p>
        <Typewriter text={texts[currentTextIndex]} startTyping={!typingComplete} />
      </p>
    </div>
  );
};

export default Header;