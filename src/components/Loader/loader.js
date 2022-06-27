import styled from "@emotion/styled";
import ReactLoading from "react-loading";
import { useTheme } from "../../context/theme-context";
import { colors } from "../../styles";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: ${({theme}) => colors[theme].background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Loader() {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <ReactLoading type="bubbles" color={colors[theme].font} height={150} width={80}/>
    </Container>
  )
}

export default Loader;