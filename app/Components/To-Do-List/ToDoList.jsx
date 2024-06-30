"use client";
import React, { useState } from "react";
import "./toDoList.css";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handelTask = (e) => {
    setTask(e.target.value);
  };

  const handelList = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleRemoveItems = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handelMoveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const handelMoveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className="toDoList">
        <h1>The To Do List of Tasks</h1>
        <input
          type="text"
          onChange={handelTask}
          value={task}
          placeholder="Enter the task"
        />
        <button className="send" onClick={handelList}>
          Send
        </button>
        <ul>
          {tasks.map((task, index) => (
            <div key={index}>
              <li onClick={() => index}>{task}</li>
              <button onClick={() => handelMoveUp(index)}>👆</button>
              <button onClick={() => handelMoveDown(index)}>👇</button>
              <button
                className="remove"
                onClick={() => handleRemoveItems(index)}
              >
                X
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
