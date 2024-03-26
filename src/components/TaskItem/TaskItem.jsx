import React from "react";
import styles from "./TaskItem.module.scss";

export const TaskItem = ({ task, deleteTask, onChange }) => {
  const taskClassname = task.checked ? styles.taskDone : "";

  return (
    <li>
      <div className={styles.item}>
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => onChange(task.id)}
        />
        <span className={taskClassname}>{task.taskName}</span>
        <button onClick={() => deleteTask(task.id)}>-</button>
      </div>
    </li>
  );
};
