import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/navbar/navbar";
import TaskList from "./components/TaskList/TaskList";

const tasks = {
  id: 0,
  title: "Nova Tarefa",
  state: "Pendente"
};

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};
export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTask((existingTask) => {
      return [...existingTask, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}
