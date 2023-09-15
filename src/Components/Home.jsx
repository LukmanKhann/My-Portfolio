import style from "./home.module.css"
import { useEffect } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate  = useNavigate()
  let contact = ()=>{
    navigate('/contact')
  }
    
    useEffect(() => {
        const strings = ["Developer", "Designer", "Freelancer","UI/UX"];
        
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
    <div id={style.maindiv}>
        {/* <video autoPlay loop muted>
            <source src={bgvideo} type="video/mp4"  />
        </video> */}
        
        <div id={style.textdiv}>
            <div id={style.innertextdiv}>
<h1 id={style.myname}>MOHAMMAD <span id={style.lukman}>LUKMAN</span> KHAN</h1>
<h1 id={style.creativetext}>Creative <span className={`text ${style.text}`}></span></h1>
<button className={style.getbtn} onClick={contact}>Get in Touch</button>

            </div>
        </div>
      


        {/* <div className={style.cursorcontainer}>
      <div
        className={style.cursorcircle}
        style={{ left: position.x, top: position.y }}
      ></div>
       <div className={style.cursordot} style={{ transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)` }}  ></div>
    </div> */}

    </div>

  )
}

export default Home