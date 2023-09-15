import React, { useEffect } from "react";
import Typed from "typed.js";
import style from "./changetext.module.css";

const TextChange = () => {
  useEffect(() => {
    const strings = ["developer", "designer", "api developer"];
    
    const options = {
      strings,
      typeSpeed: 70,
      backSpeed: 30, // Typing speed while erasing
      backDelay: 1000, // Delay before starting to erase
      startDelay: 100, // Delay to start typing after the component mounts
      loop: true, // Loop the animation
    };
    
    const typed = new Typed(".text", options);

    
    return () => {
      typed.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <div>
      <h1>
        I am a <span className={`text ${style.text}`}></span>
      </h1>
    </div>
  );
};

export default TextChange;
