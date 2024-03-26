import React, { useState } from "react";
import styles from "./Todo.module.scss";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskItem } from "../TaskItem";

export const Todo = () => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  };

  return (
    <div className={styles.todoList}>
      <TaskInput addTask={addTask} />
      <ul className={styles.todos}>
        {toDoList.map((task, key) => (
          <TaskItem task={task} key={key} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};
