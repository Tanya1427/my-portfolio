import React, { useEffect, useState } from 'react';
import './App.css'; // ✅ Import your existing App.css styles

const IntroText = () => {
  const [displayedText, setDisplayedText] = useState('');
  
  const fullText = `Hi, my name is Tanyaradzwa Mangundhla, and I'm a passionate and driven individual with a strong background in computer science and a deep interest in the intersection of AI, finance, and data. I'm currently pursuing a Bachelor of Science in Computer Science with a minor in Accounting at Grambling State University, where I maintain a 4.0 GPA and actively engage in research, tech competitions, and student leadership. I’ve worked on impactful projects like AI-powered fraud detection tools and web applications, and I’m also a committed community member, serving as a tutor, student ambassador, and public relations officer for the International Student Organization. My goal is to leverage technology to solve real-world problems and create tools that improve lives—especially in areas like financial security.`;

  useEffect(() => {
    let index = 0;
    const speed = 20;

    const interval = setInterval(() => {
      setDisplayedText(prev => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-container">
      <p className="introtext">{displayedText}<span className="cursor" /></p>
    </div>
  );
};

export default IntroText;

