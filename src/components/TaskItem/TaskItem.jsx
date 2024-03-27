import React from "react";
import styles from "./TaskItem.module.scss";

export const TaskItem = ({ task, onDeleteTask, onChange }) => {
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
        <button onClick={() => onDeleteTask(task.id)}>-</button>
      </div>
    </li>
  );
};
