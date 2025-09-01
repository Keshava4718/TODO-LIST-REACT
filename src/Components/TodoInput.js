import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TodoInput() {
  const [text, setText] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function handleChange(event) {
    setText(event.target.value);
  }

  function addText() {
    if (text.trim() === "") return;
    const newTask = { text: text, completed: false };
    setTaskArr([...taskArr, newTask]);
    setText("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addText();
    }
  }

  function toggleTaskCompletion(index) {
    const updatedTasks = [...taskArr];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskArr(updatedTasks);
  }

  function deleteTask(index) {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const updatedTasks = taskArr.filter((_, i) => i !== index);
      setTaskArr(updatedTasks);
    }
  }

  function toggleFilter() {
    setShowCompleted(!showCompleted);
  }

  const displayedTasks = showCompleted
    ? taskArr.filter((task) => task.completed)
    : taskArr;

  return (
    <div>
      <div className="d-flex p-2">
        <input
          className="form-control me-2 border border-secondary w-85"
          placeholder="Add Task..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={text}
        />
        <button className="btn btn-outline-primary w-15" onClick={addText}>
          +
        </button>
      </div>

      <button
        className="btn btn-outline-primary w-100 mb-2"
        onClick={toggleFilter}
      >
        {showCompleted ? "Show All Tasks" : "Show Completed Tasks"}
      </button>

      <TaskList
        tasks={displayedTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}
