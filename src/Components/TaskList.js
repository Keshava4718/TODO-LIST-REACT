import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task-area">
      <ul className="list-unstyled">
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskItem 
              index={index} 
              task={task} 
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
