import { useTheme } from "../../context/theme-context";
import * as Style from "./styles";

function ButtonSwitch() {
  const { theme, changeTheme } = useTheme();

  return (
    <Style.Switch theme={theme}>
      <input type="checkbox" onClick={changeTheme} className="check" checked={theme==="light"} />
      <span className="slider"></span>
    </Style.Switch>
  )
}

export default ButtonSwitch;