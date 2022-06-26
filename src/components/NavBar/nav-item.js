import { NavLink } from "react-router-dom";
import { colors } from "../../styles";

function NavItem({ to, onClickItem, children }) {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className="link"
        onClick={onClickItem}
        style={({ isActive }) => {
          if(!isActive) return;
          return {
            color: colors.red
          }
        }}
      >
        { children }
      </NavLink>
    </li>
  );
};

export default NavItem;