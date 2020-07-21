import React from "react";
import taskStore from "../../stores/taskStore";

const TaskList = () => {
  const taskList = taskStore.tasks.map((task) => <p>{task.name}</p>);

  return <div>{taskList}</div>;
};

export default TaskList;
