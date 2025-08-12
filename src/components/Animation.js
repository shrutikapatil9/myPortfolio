import React from 'react';

const AnimatedBackground = () => {
  const style = {
    height: '100vh',
    margin: 0,
    background: 'linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80, #facc15)',
    backgroundSize: '800% 800%',
    animation: 'gradientAnimation 20s ease infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          body, html, #root {
            margin: 0; 
            height: 100%;
          }
        `}
      </style>
      <div style={style}></div>
    </>
  );
};

export default AnimatedBackground;
