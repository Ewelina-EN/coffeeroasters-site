import { Link } from "react-router-dom";
import { WorksList } from "./worksList";
import "../scss/layout/_header.scss";
import { useState } from "react";

export const Works = ({ button }) => {
  const [linkClicked, setLinkClicked] = useState(false);

  const handleClick = () => {
    setLinkClicked(true);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="works">
        <h2 className="works-title">How it works</h2>
        <WorksList />
        <Link
          to={{ pathname: "/createplan", hash: "#top" }}
          className="header_btn"
          onClick={handleClick}
        >
          Create your plan
        </Link>
      </section>
    </>
  );
};
