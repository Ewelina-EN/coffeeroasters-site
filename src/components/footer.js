import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { NavList } from "./navList";
import "../scss/layout/_footer.scss";
import LogoFooter from "../assets/shared/desktop/logofooter.svg";
import { IconContext } from "react-icons/lib";

export const Footer = () => {
  const [linkClicked, setLinkClicked] = useState(false);

  const handleClick = () => {
    setLinkClicked(true);
    window.scrollTo(0, 0);
  };
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <footer className="footer">
        <div className="footer-container">
          <Link to="/coffeeroasters-site/">
            <img src={LogoFooter} className="footer-logo" alt="logo"></img>
          </Link>

          <nav className="footer-menu">
            <ul className="footer-list">
              <NavList isFooter={true} onClick={handleClick} />
            </ul>
          </nav>

          <div className="footer-social">
            <a href="https://www.facebook.com/home.php">
              <AiFillFacebook className="social-item" />
            </a>
            <a href="https://twitter.com/?lang=pl">
              <AiOutlineTwitter className="social-item" />
            </a>
            <a href="https://www.instagram.com/">
              <AiOutlineInstagram className="social-item" />
            </a>
          </div>
        </div>
      </footer>
    </IconContext.Provider>
  );
};
