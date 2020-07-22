import React from "react";
import { observer } from "mobx-react";

// store
import taskStore from "../../stores/taskStore";

// styles
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ taskId }) => {
  const handleDelete = () => {
    taskStore.deleteTask(taskId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
