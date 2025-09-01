import React from "react";

export default function TaskItem({ index, task, toggleTaskCompletion, deleteTask }) {
  return (
    <div
      className={`task border border-2 d-flex justify-content-between align-items-center p-2 rounded mb-2 ${
        task.completed ? "border-success bg-light" : "border-secondary"
      }`}
    >
      <span
        className="flex-grow-1"
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {index + 1}. {task.text}
      </span>
      <div className="d-flex">
        <button
          className="btn btn-outline-success me-2"
          onClick={() => toggleTaskCompletion(index)}
        >
          {task.completed ? "Undo" : "Completed"}
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
