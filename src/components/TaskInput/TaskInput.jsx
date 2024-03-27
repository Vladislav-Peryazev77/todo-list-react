import React, { useState } from "react";
import styles from "./TaskInput.module.scss";

export const TaskInput = ({ onAddTask }) => {
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleInputValueChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskInputValue.trim() === "") {
      return;
    }
    onAddTask(taskInputValue);
    setTaskInputValue("");
  };

  return (
    <form action="" className={styles.form} onSubmit={handleAddTask}>
      <input
        type="text"
        value={taskInputValue}
        placeholder="Todo"
        onChange={handleInputValueChange}
      />
      <button>+</button>
    </form>
  );
};
