import { useState } from "react";
import { Link } from "react-router-dom";

export const Hero = ({ title, content, button = null }) => {
  const [linkClicked, setLinkClicked] = useState(false);

  const handleClick = () => {
    setLinkClicked(true);
    window.scrollTo(0, 0);
  };
  return (
    <div className="header_main">
      <h1 className="header_title">{title}</h1>
      <p className="header_content">{content}</p>
      {button && (
        <Link to={"/createplan"} className="header_btn" onClick={handleClick}>
          {button}
        </Link>
      )}
    </div>
  );
};
