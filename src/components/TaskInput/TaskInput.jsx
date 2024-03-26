import React, { useState } from "react";
import styles from "./TaskInput.module.scss";

export const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleInputValue = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      return;
    }
    addTask(task);
    setTask("");
  };

  return (
    <form action="" className={styles.form} onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Todo"
        onChange={handleInputValue}
      />
      <button>+</button>
    </form>
  );
};
