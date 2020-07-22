import React, { useState } from "react";
import TaskList from "./components/TaskList";
import { Title } from "./styles";
//Data
import tasks from "./tasks";

function App() {
  const [_tasks, setTasks] = useState(tasks);

  const createTask = (newTask) => {
    setTasks([..._tasks, newTask]);
  };
  return (
    <div>
      <Title>MY TASK LIST</Title>
      <TaskList createTask={createTask} />
    </div>
  );
}

export default App;
