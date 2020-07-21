import React, { useState } from "react";
import TaskList from "./components/TaskList";

//Data
import tasks from "./tasks";

function App() {
  const [_tasks, setTasks] = useState(tasks);

  const createTask = (newTask) => {
    setTasks([..._tasks, newTask]);
  };
  return (
    <div>
      <TaskList createTask={createTask} />
    </div>
  );
}

export default App;
