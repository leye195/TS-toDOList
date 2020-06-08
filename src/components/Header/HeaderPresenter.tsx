import React from "react";
import styled from "styled-components";
import { flex } from "../../mixin";
const Container = styled.header<{ isNight: boolean }>`
  height: 10vh;
  ${flex("row", "center", "space-between")}
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 10px;
  background-color: white;
  background: ${(props) =>
    props.isNight ? props.theme.dark : "rgb(255, 255, 255)"};
`;
const Title = styled.h5<{ isNight: boolean }>`
  padding-left: 10px;
  font-weight: bold;
  color: ${(props) => (props.isNight ? "white" : "black")};
`;
const ButtonContainer = styled.div`
  height: 60%;
  width: 100px;
  margin: auto 0;
  margin-right: 10px;
`;
const Button = styled.button<{ isNight: boolean }>`
  all: unset;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.greyColor};
  background-image: ${(props) =>
    props.isNight
      ? "linear-gradient(to right, #667195 0%, #00269c 100%)"
      : "linear-gradient(to right, #e7feff 2%, #f4f5e2 100%)"};
  cursor: pointer;
  ${flex("row", "center", "center")}
  color: ${(props) => (props.isNight ? "white" : "#4c4c4c")};
  font-weight: 800;
`;
interface IProps {
  title?: string;
  isNight: boolean;
  handleToggle: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
function HeaderPresenter({ title, isNight, handleToggle }: IProps) {
  return (
    <Container isNight={isNight}>
      <Title isNight={isNight}>{title}</Title>
      <ButtonContainer>
        <Button isNight={isNight} onClick={handleToggle}>
          {isNight ? "Night On" : "Night Off"}
        </Button>
      </ButtonContainer>
    </Container>
  );
}
export default HeaderPresenter;
