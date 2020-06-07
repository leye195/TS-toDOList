import React from "react";
import styled from "styled-components";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-top: 1px solid #b9b9b9;
  background-color: white;
`;
const P = styled.p`
  font-weight: bolder;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  svg {
    font-size: 2rem;
    margin: 5px;
    cursor: pointer;
  }
`;
const Link = styled.a``;
function FooterPresenter() {
  return (
    <Container>
      <LinkContainer>
        <Link href="https://github.com/leye195">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.instagram.com/dan__yj/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </LinkContainer>
      <P>TS-ToDos@2020</P>
    </Container>
  );
}
export default FooterPresenter;
