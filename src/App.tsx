import React, { useState, useEffect, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";
import Footer from "./components/Footer";
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;

  }
  body{
    padding:0;
    margin:0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color:#e3e3e3;
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
`;
const ToDo = styled.article`
  height: 10vh;
  padding: 10px;
`;
interface ITodo {
  title: String;
  done: Boolean;
}
function App() {
  const [todos, setToDos] = useState<ITodo[]>([]);
  const [todo, setToDo] = useState<string>("");
  const [isOpen, setOpen] = useState<Boolean>(false);
  useEffect(() => {
    const todoList = localStorage.getItem("todo");
    if (todoList) {
      setToDos(JSON.parse(todoList));
    }
  }, []);
  const saveToDos = useCallback((todoList: Array<ITodo>) => {
    console.log(todoList);
    localStorage.setItem("todo", JSON.stringify(todoList));
    setToDos(todoList);
  }, []);
  const handleOnChange = useCallback((e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setToDo(value);
  }, []);
  const handleSubmitToDo = useCallback(
    (e) => {
      e.preventDefault();
      const newToDoList = [...todos, { title: todo, done: false }];
      saveToDos(newToDoList);
      setToDo("");
    },
    [saveToDos, todo, todos]
  );
  const handleToggle = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <GlobalStyle />
      <Header title={"TS-ToDos"} />
      <Container>
        <Form onSubmit={handleSubmitToDo}>
          <InputContainer>
            <FontAwesomeIcon
              icon={isOpen ? faChevronCircleUp : faChevronCircleDown}
              onClick={handleToggle}
            />
            <Input
              value={todo}
              onChange={handleOnChange}
              placeholder={"What needs to be done?"}
            />
          </InputContainer>
        </Form>
        {isOpen && (
          <TodoContainer>
            <ToDo>Item1</ToDo>
          </TodoContainer>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default App;
