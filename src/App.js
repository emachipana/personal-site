import { Global } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavBar from "./components/NavBar";
import { useTheme } from "./context/theme-context";
import { colors } from "./styles";

function App() {
  const { theme } = useTheme();
  
  const background = css`
    body {
      background-color: ${colors[theme].background};
    }
  `;

  return (
    <>
      <Global styles={background}/>
      <NavBar />
    </>
  );
}

export default App;
