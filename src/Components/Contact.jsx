import style from "./contact.module.css"
const Contact = () => {
  return (
    <div id={style.maindiv}>
    <div id={style.outeronediv}>
        <div id={style.upperonediv}>
            <div id={style.hometouchdiv}>
                <p><a href="">Home</a> &gt;&nbsp;</p><p> Get In Touch</p>
            </div>
            <h1 id={style.gettouch}>Get in <span className={style.redtxt}>Touch</span></h1>
            <hr />
        </div>
        <div id={style.loweronediv}>
        <div id={style.leftonediv}>
            <div className={style.detailsdiv}>
            <i class="fa-solid fa-location-dot"></i>  <p><a href="">Bangalore, Karnataka, India</a></p>
            </div>
            <div className={style.detailsdiv}>
            <i class="fa-solid fa-phone"></i>   <p><a href="tel:+917974964690" target="_blank">+91 797 496 4690</a></p>
            </div>
            <div className={style.detailsdiv}>
            <i class="fa-solid fa-envelope"></i>  <p> <a href="mailto:khanlukman833@gmail.com">khanlukman833@gmail.com</a></p>
            </div>
            <div className={style.detailsdiv}>
            <i class="fa-brands fa-linkedin"></i>  <p><a href="https://www.linkedin.com/in/mohammad-lukman-khan-278509259/" target="_blank" >Mohammad Lukman Khan</a></p>
            </div>
        </div>
        <div id={style.rightonediv}>
           <input type="text" className={style.nameinput} placeholder="Name" />
           <input type="text"  className={style.nameinput  } placeholder="Email" />
           <input type="text"  id={style.messageinput} placeholder="Message"/>
           <button className={style.sendmessagebtn}>Send Message</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact