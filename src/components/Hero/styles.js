import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    margin-top: 10vh;
  }
`;

export const Info = styled.div`
  max-width: 440px;
  margin: 0 1rem;
`;

export const Name = styled.span`
  font-size: 45px;
  color: ${colors.red};
`;

export const Detail = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({theme}) => colors[theme].font};
`;

export const Text = styled.h2`
  font-size: 30px;
  line-height: 50px;
`;

export const Image = styled.div`
  border-radius: 45%;
  width: 300px;
  height: 440px;
  background: url(./image.png);
  background-size: cover;
  background-blend-mode: darken;
  background-position: center center;
`;