import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import taskStore from "../../stores/taskStore";

//Styling
import { CreateButtonStyled } from "./styles";

const TaskModal = ({ isOpen, closeModal }) => {
  const [task, setTask] = useState({ name: "" });

  const handleChange = (event) => {
    setTask({ ...task, name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    taskStore.createTask(task);
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Task Modal"
      >
        <h3>New Task</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={task.name} onChange={handleChange} />
          <CreateButtonStyled className="btn float-right">
            Add
          </CreateButtonStyled>
        </form>
      </Modal>
    </>
  );
};

export default TaskModal;
