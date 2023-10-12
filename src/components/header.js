export const Header = ({ title, content, button }) => {
  return (
    <div className="header header_main">
      <h1 className="header_title">{title}</h1>
      <p className="header_content">{content}</p>
      <button className="header_btn">{button}</button>
    </div>
  );
};
