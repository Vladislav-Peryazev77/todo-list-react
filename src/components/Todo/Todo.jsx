import React, { useState } from "react";
import styles from "./Todo.module.scss";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskItem } from "../TaskItem";

export const Todo = () => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  const onAddTask = (taskName) => {
    const newTask = { taskName, checked: false, id: Date.now() };
    setToDoList([...toDoList, newTask]);
  };

  const handleTaskStatusChange = (checkedTaskId) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === checkedTaskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (deleteTaskId) => {
    setToDoList(toDoList.filter((task) => task.id !== deleteTaskId));
  };

  localStorage.setItem("todolist", JSON.stringify(toDoList));

  return (
    <div className={styles.todoList}>
      <TaskInput onAddTask={onAddTask} />
      <ul className={styles.todos}>
        {toDoList.map((task, key) => (
          <TaskItem
            task={task}
            key={key}
            onChange={handleTaskStatusChange}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
