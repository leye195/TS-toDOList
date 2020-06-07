import React from "react";
import styled from "styled-components";

const Container = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 10px;
  background-color: white;
`;
const Title = styled.h5`
  padding-left: 10px;
  font-weight: bold;
`;

interface IProps {
  title?: string;
}
function HeaderPresenter({ title }: IProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
export default HeaderPresenter;
