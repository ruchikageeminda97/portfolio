import react from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navActive,setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const CloseMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                CloseMenu
            }
        }

        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize",handleResize);
        }
    },[]);

    useEffect(() =>{
        if(Window.innerWidth <= 1200) {
          CloseMenu;  
        }
    }, []);

    return (
        <nav className={`navbar ${navActive? "active" : ""}`}>
            <div>
                <img src="./img/logos.svg" alt="Logoipsum" style={{height: "17px"}}/>
            </div>

            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav} >
                <span className="nav__hamburger_line">

                </span>

                <span className="nav__hamburger_line">

                </span>

                <span className="nav__hamburger_line">

                </span>
            </a>
            <div className={`navbar--items ${navActive ?
            "active" : ""} `}>
                <ul>
                    <li><Link onClick={CloseMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="TopSection" className="navbar--content">Home</Link></li>

                    <li><Link onClick={CloseMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Portfolio</Link></li>

                    <li><Link onClick={CloseMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">AboutMe</Link></li>

                    <li><Link onClick={CloseMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Testimonials" className="navbar--content">Images</Link></li>
                </ul>
            </div>
            <Link onClick={CloseMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">
            Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;