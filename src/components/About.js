import React from 'react';
import TypingText from './TypingText';

const About = () => {
  return (
   <>
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="SunnyPic.jpg" alt="" />
                </div>
                <div className="column right">
                    <div className="text">I'm Sunny and I'm a <span className="typing-2"><TypingText/></span></div>
                    <p>My name is Sunny Kumar, I am a individual passionate and creative technophile with a strong interest in game development, web development, and app development. I possess a deep curiosity for coding and design, always seeking innovative solutions to digital challenges. With a knack for problem-solving and a keen eye for aesthetics, I am poised to excel in the ever-evolving world of software development.</p>
                    <a href="Sunny Kumar.pdf" download="Sunny Kumar.pdf">Download CV</a>
                </div>
            </div>
        </div>
    </section>
   </>
  );
};

export default About;