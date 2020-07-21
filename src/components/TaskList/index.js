import React from "react";
import { observer } from "mobx-react";

//Components
import AddButton from "../buttons/AddButton";

//Stores
import taskStore from "../../stores/taskStore";

const TaskList = () => {
  const taskList = taskStore.tasks.map((task) => <p>{task.name}</p>);

  return (
    <div>
      {taskList}
      <AddButton />
    </div>
  );
};

export default observer(TaskList);
