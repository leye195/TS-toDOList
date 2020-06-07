import React, { useState, useEffect, useCallback } from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  body,p,ul,li{
    padding:0;
    margin:0;
  }
  li{
    list-style:none
  }
`;
interface ITodo {
  name: String;
  done: Boolean;
}
function App() {
  const [todos, setToDos] = useState<ITodo[]>([]);
  useEffect(() => {
    const todoList = localStorage.getItem("todo");
    if (todoList) {
      setToDos(JSON.parse(todoList));
    }
  }, []);
  const saveToDos = useCallback(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  const handleSubmitToDo = useCallback((e) => {}, []);
  return (
    <>
      <GlobalStyle />
      <div className="App"></div>
    </>
  );
}

export default App;
