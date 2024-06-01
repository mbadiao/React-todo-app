import React from "react";
import Title from "./components/Title";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./components/TaskContext";
const App = () => {
  return (
    <TaskProvider>
      <div className="bg-[#434248] min-h-[100vh] flex flex-col  items-center">
        <Title />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
