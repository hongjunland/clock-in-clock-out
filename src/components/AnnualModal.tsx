import styled from "@emotion/styled";
import { useState } from "react";
import { createPortal } from "react-dom";
import { attendanceAPI } from "../api/attendanceAPI";
import { User } from "../types";
import { formatDigit, getCurrentTime } from "../utils/dateUtils";
import AnnualCalendar from "./AnnualCalendar";
import ModalFooter from "./ModalFooter";

interface Props {
  showModal: boolean;
  user: User;
  content: string;
  onClose: () => void;
  data: Date[];
}
// interface FormState {
//   year: string;
//   month: string;
//   day: string;
// }

function AnnualModal({ showModal, user, content, data, onClose }: Props) {
  const now = getCurrentTime();
  const [selected, setSelected] = useState<Date>(new Date());
  // const [formState, setFormState] = useState<FormState>({
  //   year: now.getFullYear().toString(),
  //   month: formatDigit(now.getMonth() + 1),
  //   day: formatDigit(now.getDate()),
  // });
  // const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: formatDigit(e.target.value),
  //   });
  // };
   const handleContentChange = () => {
    // console.log(e);
    // setSelected();
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
              {/* <div>
                <AnnualTitle>
                  <span>연차 신청</span>
                </AnnualTitle>
                <AnnualInput
                  name="year"
                  type="number"
                  min={now.getFullYear()}
                  max={9999}
                  value={formState.year}
                  onChange={handleContentChange}
                />
                <AnnualInput
                  name="month"
                  type="number"
                  min={0}
                  max={12}
                  value={formState.month}
                  onChange={handleContentChange}
                />
                <AnnualInput
                  name="day"
                  type="number"
                  min={0}
                  max={31}
                  value={formState.day}
                  onChange={handleContentChange}
                />
              </div> */}
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

const AnnualTitle = styled.div`
  font-family: HanSans;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const AnnualInput = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  line-height: 40px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  margin-right: 1rem;
  width: 80px;
  height: 40px;
`;
export default AnnualModal;
