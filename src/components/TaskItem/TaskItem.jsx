import React from "react";
import styles from "./TaskItem.module.scss";

export const TaskItem = ({ task, onDeleteTask, onChange }) => {
  const taskClassname = task.completed ? styles.taskDone : "";

  return (
    <li>
      <div className={styles.item}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onChange(task.id)}
        />
        <span className={taskClassname}>{task.title}</span>
        <button onClick={() => onDeleteTask(task.id)}>-</button>
      </div>
    </li>
  );
};
