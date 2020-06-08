import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import {
  faChevronCircleDown,
  faChevronCircleUp,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header";
import Footer from "../Footer";
const GlobalStyle = createGlobalStyle<{ isNight: boolean }>`
  ${reset}
  *{
    box-sizing:border-box;
    transition:color,background-color 0.5s ease-out;
  }
  body{
    padding:0;
    margin:0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) =>
      props.isNight ? "rgb(54, 53, 55)" : "#e3e3e3"};
  }
  a{
    color:inherit;
    cursor:pointer;
    text-decoration:none;
  }
  li{
    list-style:none
  }
  svg{
    cursor:pointer;
  }
`;
const Container = styled.main`
  min-height: 80vh;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const InputContainer = styled.div`
  padding: 10px;
  font-size: 1.4rem;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  width: 60vw;
  box-shadow: 2px 2px 8px 1px #08080845;
  svg {
    color: #e3e3e3;
    cursor: pointer;
  }
`;
const Input = styled.input`
  all: unset;
  padding: 10px;
  font-size: 1.4rem;
  width: 100%;
  &::placeholder {
    color: #cccccc;
  }
`;
const TodoContainer = styled.section`
  width: 55vw;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: white;
  border: 1px solid #e3e3e3;
  box-shadow: 2px 2px 0px 0px white;
  &::after {
    content: "";
    height: 100%;
    width: 100%;
  }
`;
const ToDo = styled.article`
  position: relative;
  height: 10vh;
  padding: 10px;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  &:hover .delete-container {
    opacity: 1;
  }
`;
const Title = styled.p<{ done: boolean }>`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
  color: ${(props) => (props.done ? "#e3e3e3" : "black")};
`;
const CheckBox = styled.div<{ done: boolean }>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => (props.done ? "white" : "#cecece61")};
  border-radius: 50%;
  border: 1px solid ${(props) => (props.done ? "#1abc9c" : "white")};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.done ? "#1abc9c" : "white")};
`;
const DeleteContainer = styled.div`
  position: absolute;
  right: 5%;
  font-size: 1.2rem;
  opacity: 0;
  & svg {
    color: #ff7675;
  }
`;
const ControlContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Category = styled.p<{ selected: boolean }>`
  padding: 10px;
  border: ${(props) => (props.selected ? "1px solid #00b894" : "")};
  cursor: pointer;
`;
interface ITodo {
  _id: string;
  title: string;
  done: boolean;
}
interface IProps {
  isNight: boolean;
  isOpen: boolean;
  todos: Array<ITodo>;
  todo: string;
  selected: number;
  handleCheck: (e: React.SyntheticEvent<HTMLDivElement>) => void;
  handleDelete: (e: React.SyntheticEvent<HTMLDivElement>) => void;
  handleOnChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  handleOpen: (e: React.SyntheticEvent<HTMLOrSVGElement>) => void;
  handleSubmitToDo: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  handleToggle: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  handleSelect: (
    idx: number
  ) => (e: React.SyntheticEvent<HTMLParagraphElement>) => void;
}
function AppPresenter({
  isNight,
  isOpen,
  todos,
  todo,
  selected,
  handleCheck,
  handleDelete,
  handleOnChange,
  handleOpen,
  handleSubmitToDo,
  handleToggle,
  handleSelect,
}: IProps) {
  return (
    <>
      <GlobalStyle isNight={isNight} />
      <Header
        title={"TS-ToDos"}
        isNight={isNight}
        handleToggle={handleToggle}
      />
      <Container>
        <Form onSubmit={handleSubmitToDo}>
          <InputContainer>
            <FontAwesomeIcon
              icon={isOpen ? faChevronCircleUp : faChevronCircleDown}
              onClick={handleOpen}
            />
            <Input
              value={todo}
              onChange={handleOnChange}
              placeholder={"What needs to be done?"}
            />
          </InputContainer>
        </Form>
        {isOpen && (
          <>
            <TodoContainer>
              <ControlContainer>
                <CategoryContainer>
                  <Category selected={selected === 0} onClick={handleSelect(0)}>
                    All
                  </Category>
                  <Category selected={selected === 1} onClick={handleSelect(1)}>
                    Active
                  </Category>
                  <Category selected={selected === 2} onClick={handleSelect(2)}>
                    Completed
                  </Category>
                </CategoryContainer>
              </ControlContainer>
              {todos
                ?.filter((todo) => {
                  if (selected === 0) {
                    return todo;
                  } else if (selected === 1) {
                    return todo.done === false;
                  } else if (selected === 2) {
                    return todo.done === true;
                  }
                })
                ?.map((todo) => (
                  <ToDo key={todo._id}>
                    <CheckBox
                      done={todo.done}
                      data-id={todo._id}
                      onClick={handleCheck}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </CheckBox>
                    <Title done={todo.done}>{todo.title}</Title>
                    <DeleteContainer
                      className={"delete-container"}
                      data-id={todo._id}
                      onClick={handleDelete}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </DeleteContainer>
                  </ToDo>
                ))}
            </TodoContainer>
          </>
        )}
      </Container>
      <Footer isNight={isNight} />
    </>
  );
}
export default AppPresenter;
