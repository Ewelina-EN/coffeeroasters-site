import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { NavList } from "./navList";
import LogoNav from "../assets/shared/desktop/logonav.svg";
import "../scss/layout/_nav.scss";

export const Navigation = ({ isFooter }) => {
  const [sidebar, setSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navListClassName = isFooter ? "footer-menu" : "nav-menu";

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#333D4B" }}>
        <div className="navbar">
          <Link to="/">
            <img src={LogoNav} className="navbar-logo" alt="logo"></img>
          </Link>
          {/* add to FaBars css on hover cursor style(pointer etc)
          change size of hamburger icon for better UI on touch */}
          {windowWidth <= 640 ? (
            <FaBars onClick={showSidebar} />
          ) : (
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="/">
                    <img src={LogoNav} className="navbar-logo" alt="logo" />
                  </Link>
                  <AiOutlineClose />
                </li>
                <NavList className={navListClassName} />
              </ul>
            </nav>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
};
