import { Global } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader/loader";
import NavBar from "./components/NavBar";
import { useTheme } from "./context/theme-context";
import HomePage from "./pages/home-page";
import PortfolioPage from "./pages/portfolio-page";
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
  }, 1000)

  return (
    isLoadig ? <Loader /> :   
    <>
      <Global styles={background}/>
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<h1>Contact me</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
