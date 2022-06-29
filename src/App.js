import { Global } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Loader from "./components/Loader/loader";
import NavBar from "./components/NavBar";
import { useTheme } from "./context/theme-context";
import HomePage from "./pages/home-page";
import { colors } from "./styles";

function App() {
  const { theme } = useTheme();
  
  const background = css`
    body {
      background-color: ${colors[theme].background};
      transition: .3s ease-in;
    }
  `;

  const [isLoadig, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  return (
    isLoadig ? <Loader /> :   
    <>
      <Global styles={background}/>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
