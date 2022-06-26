/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { colors } from "../../styles";
import * as Style from "./styles";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavItem from "./nav-item";
import { useTheme } from "../../context/theme-context";

function NavBar (){
  const [state, setState] = useState({
    isOpen: false,
    isMove: false
  })

  const { theme, changeTheme } = useTheme();
  const colorIcon = colors[theme].font;

  const { isOpen, isMove } = state;
  const handleClickMenu = () => setState({ ...state, isOpen: !isOpen });
  const handleCloseMenu = () => setState({ ...state, isOpen: false });
  
  const hanldeClickMove = () => {
    if(window.scrollY >= 70) return setState({ ...state, isMove: true });
    return setState({ ...state, isMove: false });
  }

  window.addEventListener("scroll", hanldeClickMove);

  return (
    <Style.Container isMove={isMove} isOpen={isOpen} theme={theme}>
      <nav className="navbar">
        <Link className="logo" onClick={changeTheme} to="/">
          <span style={{color: colors.red}}>{`<`}</span>
          Enmanuel
          <span style={{color: colors.red}}>{`/>`}</span>
        </Link>
        <div className="hamburger" onClick={handleClickMenu}>
          { isOpen 
            ?
            <IoClose 
              css={Style.IconStyled}
              color={colorIcon}
            />
            :
            <HiMenuAlt3
              css={Style.IconStyled}
              color={colorIcon}
            /> }
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <NavItem to="/" onClickItem={handleCloseMenu}>Home</NavItem>
          <NavItem to="/portfolio" onClickItem={handleCloseMenu}>Portfolio</NavItem>
          <NavItem to="/contact" onClickItem={handleCloseMenu}>Contact me</NavItem>
        </ul>
      </nav>
    </Style.Container>
  )
}

export default NavBar;