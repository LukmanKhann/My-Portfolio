import React, { useState, useEffect } from 'react';
import style from "../Components/home.module.css"
import bgvideo from "../Video/codevideo.mp4"
function CursorCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className={style.cursorcontainer}>
      <div id={style.videodiv}>
        <video autoPlay loop muted>
            <source src={bgvideo} type="video/mp4"  />
        </video>
       </div>

      <div
        className={style.cursorcircle}
        style={{ left: position.x, top: position.y }}
      ></div>
       <div className={style.cursordot} style={{ transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)` }}  ></div>
    </div>
  );
}

export default CursorCircle;
