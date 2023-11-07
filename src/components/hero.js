export const Hero = ({ title, content, button = null }) => {
  return (
    <div className="header_main">
      <h1 className="header_title">{title}</h1>
      <p className="header_content">{content}</p>
      {button && <button className="header_btn">{button}</button>}
    </div>
  );
};
