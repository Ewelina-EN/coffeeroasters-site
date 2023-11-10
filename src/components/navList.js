import { Link } from "react-router-dom";
import { SidebarData } from "../components/sidebardata";

export const NavList = ({ onClick }) => {
  return (
    <>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path} onClick={onClick}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};
