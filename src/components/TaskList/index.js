import React from "react";
import { observer } from "mobx-react";

//Components
import AddButton from "../buttons/AddButton";
import CompletedList from "../CompletedList";
import TaskItem from "./TaskItem";

//Stores
import taskStore from "../../stores/taskStore";

//styling
import { ListWrapper } from "../../styles";

const TaskList = () => {
  const filteredList = taskStore.tasks.filter(
    (task) => task.complete === false
  );

  const taskList = filteredList.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));

  return (
    <div>
      <h1>To Do List</h1>
      <ListWrapper>{taskList}</ListWrapper>

      <AddButton />
      {/* <button > completed</button> */}
      <CompletedList />
    </div>
  );
};

export default observer(TaskList);
