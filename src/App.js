import React from "react";
import TaskList from "./components/TaskList";
import { Title } from "./styles";

function App() {
  return (
    <div>
      <Title>MY TASK LIST</Title>
      <TaskList />
    </div>
  );
}

export default App;
