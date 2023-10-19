import { WorksList } from "./worksList";
import "../scss/layout/_header.scss";

export const Works = () => {
  return (
    <>
      <section className="works">
        <h2 className="works-title">How it works</h2>
        <WorksList />
        {/* TODO: change style for button, add style to base file not only in _header */}
        <button className="header_btn">Create your plan</button>
      </section>
    </>
  );
};
