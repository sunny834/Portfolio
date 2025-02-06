import React from 'react';
import Typed from 'react-typed';

const TypingText = () => {
  const typingStrings = [ 'Game Developr','Developer', 'Designer', 'Freelancer'];

  return (
    <div>
      <Typed strings={typingStrings} typeSpeed={100} backSpeed={60} loop />
    </div>
  );
};

export default TypingText;
