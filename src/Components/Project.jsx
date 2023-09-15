
import style from "./project.module.css"
import emppng from "../Video/emppng.png"
import ecom from "../Video/ecommerce.png"
import moto from "../Video/jspng.png"
const Project = () => {
  return (
    <div id={style.maindiv}>
    <div id={style.outeronediv}>
        <div id={style.upperonediv}>
            <div id={style.hometouchdiv}>
                <p><a href="">Home</a> &gt;&nbsp;</p><p>Projects</p>
            </div>
            <h1 id={style.gettouch}>My <span className={style.redtxt}> Projects</span></h1>
            <hr />
        </div>
        <div id={style.loweronediv}>
          <div id={style.projectdiv1} className={style.projectdiv}>
          <a href="https://github.com/LukmanKhann/Employee-Directory-App"> <img src={emppng} alt="" /></a>
            <div className={style.infocard}>

              <p>Employee_Directory_App</p>
              <p><a href="https://github.com/LukmanKhann/Employee-Directory-App"><i class="fa-brands fa-github"></i> GitHub</a></p>
            </div>
          </div>
          <div id={style.projectdiv2} className={style.projectdiv}>
          <a href="https://github.com/LukmanKhann/Dynamic-moto-showcase"> <img src={moto} alt="" /></a>
          <div className={style.infocard}>
          <p>Dynamic_Moto_Showcase</p>
              <p><a href="https://github.com/LukmanKhann/Dynamic-moto-showcase"><i class="fa-brands fa-github"></i> GitHub</a></p>
          </div>
          </div>
          <div id={style.projectdiv3} className={style.projectdiv}>
         <a href="https://github.com/LukmanKhann/E-commerce_Website"> <img src={ecom} alt="" /></a>
          <div className={style.infocard}>
          <p>E_commerce_Website</p>
              <p><a href="https://github.com/LukmanKhann/E-commerce_Website"><i class="fa-brands fa-github"></i> GitHub</a></p>
          </div>
          </div>
        
        </div>
    </div>
    </div>
  )
}

export default Project