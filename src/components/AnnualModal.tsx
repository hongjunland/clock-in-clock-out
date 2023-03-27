import styled from "@emotion/styled";
import { useState } from "react";
import { createPortal } from "react-dom";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";
import AnnualCalendar from "./AnnualCalendar";
import Modal from "./Modal";
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
    <Modal>
      <form onSubmit={handleSubmitTodo}>
        <AnnualCalendar
          data={data}
          selected={selected}
          onChangeSelect={handleContentChange}
        />
        <ModalFooter title="신청" onClose={onClose} />
      </form>
    </Modal>
  );
}
export default AnnualModal;
