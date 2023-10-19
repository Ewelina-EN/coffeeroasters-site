import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { NavList } from "./navList";
import Logo from "../assets/shared/desktop/logo.svg";

export const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#333D4B" }}>
        <div className="navbar">
          <Link to="/">
            <img src={Logo} className="navbar-logo" alt="logo"></img>
          </Link>
          {/* add to FaBars css on hover cursor style(pointer etc)
          change size of hamburger icon for better UI on touch */}
          <FaBars onClick={showSidebar} />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/">
                <img src={Logo} className="navbar-logo" alt="logo"></img>
              </Link>
              {/* the same like in 23 line */}
              <AiOutlineClose />
            </li>
            <NavList />
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
