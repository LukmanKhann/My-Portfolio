import { Link } from "react-router-dom"
import style from "./home.module.css"
const Nav = () => {
  return (
    <div id={style.navdiv}>
            <div id={style.logodiv}></div>
            <div id={style.listdiv}>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><a href="$">News</a></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>

)
}

export default Nav