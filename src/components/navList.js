import { Link } from "react-router-dom";
import { SidebarData } from "../components/sidebardata";

export const NavList = () => {
  return (
    <>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </>
  );
};
