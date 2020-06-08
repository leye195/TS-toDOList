import React from "react";
import styled from "styled-components";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled.footer<{ isNight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-top: 1px solid #b9b9b9;
  background: ${(props) =>
    props.isNight ? "rgb(54, 53, 55)" : "rgb(255, 255, 255)"};
`;
const P = styled.p<{ isNight: boolean }>`
  font-weight: bolder;
  color: ${(props) => (props.isNight ? "white" : "black")};
`;
const LinkContainer = styled.div<{ isNight: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  svg {
    font-size: 2rem;
    margin: 5px;
    cursor: pointer;
    color: ${(props) => (props.isNight ? "white" : "black")};
  }
`;
const Link = styled.a``;
interface IProps {
  isNight: boolean;
}
function FooterPresenter({ isNight }: IProps) {
  return (
    <Container isNight={isNight}>
      <LinkContainer isNight={isNight}>
        <Link href="https://github.com/leye195">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.instagram.com/dan__yj/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </LinkContainer>
      <P isNight={isNight}>TS-ToDos@2020</P>
    </Container>
  );
}
export default FooterPresenter;
