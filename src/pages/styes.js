import styled from "@emotion/styled";
import { colors } from "../styles";

export const MainContainer = styled.div`
  margin: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.red};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    margin-top: 10vh;
  }
`;
