import styled from "styled-components";
import { MdAddCircleOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
export const AddButtonStyled = styled(MdAddCircleOutline)`
  font-size: 2em;
`;
export const DeleteButtonStyled = styled(AiFillDelete)`
  color: red;
  position: absolute;
  left: 24%;
  margin-left: 5px;
`;
