import React, { useState } from "react";

//Components
import TaskModal from "../modals/TaskModal";

//Styling
import { AddButtonStyled } from "./styles";

const AddButton = ({ createTask }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AddButtonStyled className="float-right" onClick={openModal} />
      <TaskModal
        isOpen={isOpen}
        closeModal={closeModal}
        createTask={createTask}
      />
    </>
  );
};

export default AddButton;
