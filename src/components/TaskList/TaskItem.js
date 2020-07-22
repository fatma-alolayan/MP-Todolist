import React from "react";

import { observer } from "mobx-react";

import taskStore from "../../stores/taskStore";

// component
import DeleteButton from "../buttons/DeleteButton";
// import UpdateButton from "./buttons/UpdateButton";

//styling
import { TaskWrapper } from "../../styles";

const TaskItem = ({ task }) => {
  return (
    <TaskWrapper>
      <input type="checkbox" onClick={() => taskStore.updateTask(task)} />
      <p>{task.name}</p>

      {/* <UpdateButton item={item} /> */}
      <DeleteButton taskId={task.id} />
    </TaskWrapper>
  );
};

export default observer(TaskItem);
