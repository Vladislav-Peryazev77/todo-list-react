import React, { useState } from "react";
import styles from "./TaskItem.module.scss";

export const TaskItem = ({ task, deleteTask }) => {
  const [isDone, setIsDone] = useState(false);

  const taskClassname = isDone ? styles.taskDone : "";

  const handleTaskDone = () => {
    setIsDone((prevState) => !prevState);
  };

  return (
    <li>
      <div className={styles.item}>
        <input type="checkbox" onChange={handleTaskDone} />
        <span className={taskClassname}>{task.taskName}</span>
        <button onClick={() => deleteTask(task.taskName)}>-</button>
      </div>
    </li>
  );
};
