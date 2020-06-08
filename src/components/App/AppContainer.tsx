import React, { useCallback, useState, useEffect } from "react";
import AppPresenter from "./AppPresenter";
import { v4 } from "uuid";

interface ITodo {
  _id: string;
  title: string;
  done: boolean;
}
function AppContainer() {
  const [todos, setToDos] = useState<ITodo[]>([]);
  const [todo, setToDo] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(true);
  const [isNight, setNight] = useState<boolean>(false);
  const [selected, setSelect] = useState<number>(0);
  useEffect(() => {
    const todoList = localStorage.getItem("todo"),
      flag = localStorage.getItem("dark");
    if (todoList) {
      setToDos(JSON.parse(todoList));
    }
    if (flag) {
      setNight(flag === "true");
    }
  }, []);
  const saveToDos = useCallback((todoList: Array<ITodo>) => {
    localStorage.setItem("todo", JSON.stringify(todoList));
    setToDos(todoList);
  }, []);
  const saveTheme = useCallback((flag) => {
    localStorage.setItem("dark", flag);
    setNight(flag);
  }, []);
  const handleOnChange = useCallback((e) => {
    const {
      target: { value },
    } = e;
    setToDo(value);
  }, []);
  const handleSubmitToDo = useCallback(
    (e) => {
      e.preventDefault();
      const newToDoList = [...todos, { _id: v4(), title: todo, done: false }];
      saveToDos(newToDoList);
      setToDo("");
    },
    [saveToDos, todo, todos]
  );
  const handleOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  const handleToggle = useCallback(
    (e) => {
      saveTheme(!isNight);
    },
    [isNight, saveTheme]
  );
  const handleCheck = useCallback(
    (e) => {
      const {
        currentTarget: { dataset },
      } = e;
      const _id = dataset["id"];
      if (_id) {
        const updatedTodos = todos.map((todo) => {
          if (todo._id === _id) {
            todo.done = !todo.done;
          }
          return todo;
        });
        saveToDos(updatedTodos);
      }
    },
    [todos, saveToDos]
  );
  const handleDelete = useCallback(
    (e) => {
      const {
        currentTarget: { dataset },
      } = e;
      const filteredToDos = todos.filter((todo) => todo._id !== dataset["id"]);
      saveToDos(filteredToDos);
    },
    [saveToDos, todos]
  );
  const handleSelect = useCallback(
    (idx) => () => {
      setSelect(idx);
    },
    []
  );
  return (
    <AppPresenter
      isNight={isNight}
      todos={todos}
      todo={todo}
      isOpen={isOpen}
      selected={selected}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      handleOpen={handleOpen}
      handleSubmitToDo={handleSubmitToDo}
      handleToggle={handleToggle}
      handleOnChange={handleOnChange}
      handleSelect={handleSelect}
    />
  );
}
export default AppContainer;
