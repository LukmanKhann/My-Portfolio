import { useEffect, useState } from "react";
import style from "./about.module.css";
import Typed from "typed.js";
const About = () => {
  const [showContainer, setShowContainer] = useState(false);
  const handleMoreclick = () => {
    setShowContainer(true);
  };
  const handleCloseClick = () => {
    setShowContainer(false);
  };

  useEffect(() => {
    const strings = ["Developer", "Designer", "Freelancer", "UI/UX"];

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
      <div id={style.parentdiv}>
        <div id={style.photodiv}></div>
        <div id={style.infodiv}>
          <h1 id={style.myname}>
            MOHAMMAD <span id={style.lukman}>LUKMAN</span> KHAN
          </h1>
          <h1 id={style.creativetext}>
            Creative <span className={`text ${style.text}`}></span>
          </h1>
          <hr />

          <p id={style.paragraph}>
            I'm <span id={style.paraname}>Mohammad Lukman Khan</span>, a
            full-stack developer working as a freelancer. I'm passionate and
            dedicated to my work, aiming to craft exceptional digital
            experiences. My goal is to turn ideas into functional and visually
            appealing realities, constantly exploring new technologies to stay
            at the forefront of the industry. Collaboration, innovation, and
            attention to detail are at the core of my work ethic, ensuring that
            every project I undertake meets and exceeds expectations.
          </p>
          <button className={style.learnbtn} onClick={handleMoreclick}>
            Learn More
          </button>
        </div>
        {showContainer && (
          <div id={style.parentlearndiv}>
            <div id={style.childlearndiv}>
              <span id={style.closebtn} onClick={handleCloseClick}>
                <i class="fa-solid fa-x"></i>
              </span>
              <div id={style.childa1}>
                <div id={style.childa1photo}></div>
                <div id={style.childa1info}>
                  <h1 id={style.myname}>
                    MOHAMMAD <span className={style.redtxt}>LUKMAN</span> KHAN
                  </h1>
                  <h1 id={style.creativetext}>
                    Creative{" "}
                    <span id={style.devtxt} className={`text ${style.text}`}>
                      Developer
                    </span>
                  </h1>
                  <ul>
                    <li>
                      <i class="fa-solid fa-user"></i> Mohammad{" "}
                      <span id={style.lukman}>Lukman</span> Khan
                    </li>
                    <hr />
                    <li>
                      <i class="fa-solid fa-calendar-days"></i> 08/03/2002
                    </li>
                    <hr />
                    <li>
                      <i class="fa-solid fa-location-dot"></i> Bangalore,
                      Karnataka, India{" "}
                    </li>
                    <hr />
                    <li>
                      <i class="fa-solid fa-phone"></i>
                      <a href="">+91 797 964 690</a>
                    </li>
                    <hr />
                    <li>
                      <i class="fa-solid fa-envelope"></i>
                      <a href="">khanlukman833@gmail.com</a>
                    </li>
                  </ul>
                  <button className={style.textbtn}>Button Text</button>
                </div>
              </div>
              <div id={style.childa2}>
                <div id={style.childa2container}>
                  <div id={style.aboutme}>
                    <h1 id={style.aboutmetxt} className={style.a1txt} >About <span className={style.redtxt}>Me</span></h1>
                    <hr />
                    <p id={style.paragraph}>
                      I'm <span id={style.paraname}>Mohammad Lukman Khan</span>,
                      a full-stack developer working as a freelancer. I'm
                      passionate and dedicated to my work, aiming to craft
                      exceptional digital experiences. My goal is to turn ideas
                      into functional and visually appealing realities,
                      constantly exploring new technologies to stay at the
                      forefront of the industry. Collaboration, innovation, and
                      attention to detail are at the core of my work ethic,
                      ensuring that every project I undertake meets and exceeds
                      expectations.
                    </p>

                    <p></p>
                  </div>

                  <div id={style.qualityservice}>
                    <h1 id={style.quality} className={style.a1txt} >Quality <span className={style.redtxt}>Services</span></h1>
                    <hr />
                    <ul>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Website
                        Development
                      </li>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Digital
                        Experience
                      </li>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Content
                        Marketing
                      </li>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Social Media
                        Marketing
                      </li>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Shared Web
                        Hosting
                      </li>
                    </ul>
                  </div>

                  <div id={style.programmingskill}>
                    <h1 id={style.programmingtxt} className={style.a1txt} >Programming <span className={style.redtxt}>Skills</span></h1>
                    <hr />
                    <p className={style.skillname}>Java</p>
                    <div className={style.skillbar}>
                      <div className={style.skillprogress}></div>
                    </div>
                    <p className={style.skillname}>Mysql</p>
                    <div className={style.skillbar}>
                      <div className={style.skillprogress}></div>
                    </div>
                    <p className={style.skillname}>Hibernate</p>
                    <div className={style.skillbar}>
                      <div className={style.skillprogress}></div>
                    </div>
                    <p className={style.skillname}>Spring</p>
                    <div className={style.skillbar}>
                      <div className={style.skillprogress}></div>
                    </div>
                    <p className={style.skillname}>JavaScript</p>
                    <div className={style.skillbar}>
                      <div className={style.skillprogress}></div>
                    </div>
                    <p className={style.skillname}>React-Js</p>
                    <div className={style.skillbar}>
                      <div className={style.skillprogress}></div>
                    </div>
                    <p className={style.skillname}>J2ee</p>
                    <div className={style.skillbar}>
                      <div className={style.skillprogress}></div>
                    </div>
                  </div>

                  <div id={style.languageskill}>
                    <h1 id={style.languagetxt} className={style.a1txt} >Language <span className={style.redtxt}>Skills</span></h1>
                    <hr />
                    <ul>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> English
                        (Advance)
                      </li>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Hindi (Native)
                      </li>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Urdu (Advance)
                      </li>
                      <li>
                        <i class="fa-solid fa-caret-right"></i> Arabic
                        (Beginner)
                      </li>
                    </ul>
                  </div>

                  <div id={style.educationtimeline}>
                    <h1 id={style.educationtxt} className={style.a1txt} >Education <span className={style.redtxt}>Timeline</span></h1>
                    <hr />

                    <div id={style.mainlinediv}>
                      <div id={style.mydiv}>
                        <div id={style.circle1}></div>
                        <div id={style.circle2}></div>
                      </div>
                      <div id={style.yeardiv}>
                        <div class={style.childyear}>
                          <p class={style.year}>2020 - 2022</p>
                        </div>
                        <div class={style.childyear}>
                          <p class={style.year}>2019 - 2020</p>
                        </div>
                      </div>
                      <div id={style.collegediv}>
                        <p id={style.university1}>S.G.G. University</p>
                        <p id={style.diploma1}>Bachelor Of Science</p>
                        <p id={style.university2}>Dr. C.V. Raman University</p>
                        <p id={style.diploma2}>Diploma in Computer Sciece</p>
                      </div>
                    </div>
                  </div>



                  

                  <div id={style.certification}>
                  <h1 id={style.educationtxt} className={style.a1txt} >My <span className={style.redtxt}>Certification</span></h1>
                    <hr />

                    <div id={style.mainlinediv}>
                      <div id={style.mydiv}>
                        <div id={style.circle1}></div>
                        <div id={style.circle2}></div>
                      </div>
                      <div id={style.yeardiv}>
                        <div class={style.childyear}>
                          <p class={style.year}>2020 - 2022</p>
                        </div>
                        <div class={style.childyear}>
                          <p class={style.year}>2023 - .......</p>
                        </div>
                      </div>
                      <div id={style.collegediv}>
                        <p id={style.university1}>Jspiders Software Institute</p>
                        <p id={style.diploma1}>Java Full Stack Developer</p>
                          <p id={style.university2}>--</p>
                          <p id={style.diploma2}>--</p>
                      </div>
                    </div>

                  </div>









                  <div id={style.clientfeedback}>
                  <h1 id={style.educationtxt} className={style.a1txt}>Client <span className={style.redtxt}>Feedback</span></h1>
                  <hr />
                 <fieldset id={style.msgbox}>
                  <legend><i class="fa-solid fa-quote-left"></i></legend>
                  <p>Beautiful minimalist design and great,
                    fast response with support. Highly
                    recommend. Thanks!
                  </p>

                 </fieldset>
                    <div id={style.clientphotobox}>
                      <div id={style.clientphoto}>
                        <img src="https://images.unsplash.com/photo-1620122303020-87ec826cf70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                        <p id={style.clientname}>Emma Watson</p>
                        <p id={style.clientrole}>Graphic Designer</p>
                      </div>
                    </div>


                  </div>






                  <div id={style.x8}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
