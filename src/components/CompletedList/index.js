import React from "react";
import { observer } from "mobx-react";

//Components
import AddButton from "../buttons/AddButton";

import TaskItem from "../TaskList/TaskItem";

//Stores
import taskStore from "../../stores/taskStore";

//styling
import { ListWrapper } from "../../styles";

const TaskList = () => {
  const filteredList = taskStore.tasks.filter((task) => task.complete === true);

  const taskList = filteredList.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));

  return (
    <div>
      <h1>Completed List</h1>
      <ListWrapper>{taskList}</ListWrapper>
    </div>
  );
};

export default observer(TaskList);
