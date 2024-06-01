import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) {
      setError("Please enter a task");
      return;
    }
    const newTask = {
      id: Date.now(),
      content: task,
      state: "in progress",
    };
    addTask(newTask);
    setTask("");
    setError("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#2B2C30] w-[42.75vw] h-[10vh] rounded-[15px] flex items-center justify-between">
          <input
            className="rounded-[15px] w-[90%] h-full bg-[#2B2C30] focus:outline-none p-4 text-white text-xl"
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="Enter a task"
          />
          <button
            type="submit"
            className="cursor-pointer p-1 m-2 rounded-2xl bg-transparent border-none bg-gradient-to-r from-[#FD5A0C] via-[#E64767] to-[#CD32C8]"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 24.5H11M23.5 12V37"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};

export default TaskForm;
