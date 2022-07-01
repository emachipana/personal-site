import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const Section = styled.div`
  max-width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Card = styled(Link)`
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-size: 19px;
  font-weight: 700;
  border-radius: 15px;
  background-color: ${({ theme }) => colors[theme].card};
  color: ${({ theme }) => colors[theme].font};
  transition: .3s ease-in;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Project = styled.div`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => colors[theme].card};
  color: ${({ theme }) => colors[theme].font};
  border-radius: 15px;
  transition: .3s ease-in;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Name = styled.h2`
  font-size: 25px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
`;

export const Projects = styled.div`
  max-width: 820px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Tag = styled.span`
  padding: 3px;
  border-radius: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  background-color: ${({ theme }) => colors[theme].font};
  color: ${({ theme }) => colors[theme].background};
  transition: .3s ease-in;
`;

export const Image = styled.img`
  max-width: 300px;
  max-height: 300px;
  object-fit cover;
  border-radius: 1rem;
  margin: 0.5rem auto;
`;

export const ButtonTo = styled.a`
  background-color: ${({ theme }) => colors[theme].font};
  color: ${({ theme }) => colors[theme].background};
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 18px;
  margin: auto;
  font-weight: 700;
  outline: none;
  transtion: .3s ease-in;
  &:active {
    transform: translateY(5px);
  }
`;
