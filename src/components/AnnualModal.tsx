import styled from "@emotion/styled";
import { useState } from "react";
import { createPortal } from "react-dom";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";
import AnnualCalendar from "./AnnualCalendar";
import ModalFooter from "./ModalFooter";

interface Props {
  showModal: boolean;
  user: User;
  onClose: () => void;
  data: Date[];
}

function AnnualModal({ user, data, onClose }: Props) {
  const [selected, setSelected] = useState<Date>(new Date());
   const handleContentChange = (date: Date) => {
    setSelected(date);
  };
  const handleSubmitTodo = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected) {
      const newDate = new Date(
        `${selected?.getFullYear()}-${
          selected?.getMonth() + 1
        }-${selected?.getDate()}`
      );
      const newAttendance = await attendanceAPI.createAnnual(user, newDate);
      console.log(newAttendance);
      onClose();
    }
  };
  return (
    <>
      {createPortal(
        <Wrapper>
          <ModalContent>
            <form onSubmit={handleSubmitTodo}>
              <AnnualCalendar data={data} selected={selected} onChangeSelect={handleContentChange}/>
              <ModalFooter title="신청" onClose={onClose} />
            </form>
          </ModalContent>
        </Wrapper>,
        document.body
      )}
    </>
  );
}
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem 2rem 0 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export default AnnualModal;
