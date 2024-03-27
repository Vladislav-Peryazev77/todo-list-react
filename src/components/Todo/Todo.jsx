import React, { useState, useEffect } from "react";
import styles from "./Todo.module.scss";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskItem } from "../TaskItem";

export const Todo = () => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(toDoList));
  }, [toDoList]);

  const handleTaskAdd = (taskName) => {
    const newTask = { taskName, checked: false, id: Date.now() };
    setToDoList([...toDoList, newTask]);
  };

  const handleTaskStatusChange = (checkedTaskId) => {
    const foundIndex = toDoList.findIndex((task) => task.id === checkedTaskId);

    if (foundIndex === -1) {
      return;
    }

    setToDoList((prevState) => {
      const newTodoList = [...prevState];
      newTodoList[foundIndex] = {
        ...newTodoList[foundIndex],
        checked: !newTodoList[foundIndex].checked,
      };

      return newTodoList;
    });
  };

  const handleDeleteTask = (deleteTaskId) => {
    setToDoList(toDoList.filter((task) => task.id !== deleteTaskId));
  };

  return (
    <div className={styles.todoList}>
      <TaskInput onAddTask={handleTaskAdd} />
      <ul className={styles.todos}>
        {toDoList.map((task, key) => (
          <TaskItem
            task={task}
            key={key}
            onChange={handleTaskStatusChange}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
