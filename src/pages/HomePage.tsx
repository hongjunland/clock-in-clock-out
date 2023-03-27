import styled from "@emotion/styled";
import { FaPlus, FaPen } from "react-icons/fa";
import { useEffect } from "react";
import { getAttendanceStatus, isExited } from "../utils/attendanceUtils";
import { StatusButtonColor } from "../constants/status";
import { ModalType } from "../constants/modalType";
import {
  AnnualModal,
  ContentBox,
  Header,
  TodoModal,
  WorkHoursChart,
} from "../components";
import { Attendance, User } from "../types";
import {useAnnual, useAnnualDates, useAttendance, useShowModal, useTodo, useWorkhours} from "../hooks";
interface Props {
  user: User;
}

export default function HomePage({ user }: Props) {
  const {todoContent, getTodo} = useTodo(user);
  const {attendance, submitAttendance ,getAttendance} = useAttendance(user);
  const {annual, getAnnual} = useAnnual(user);
  const {workhours, getWorkhours} = useWorkhours(user);
  const {annualDates, getAnnualDates } = useAnnualDates(user);
  const {modalStatus, handleShowModal} = useShowModal(user);

  useEffect(() => {
    getTodo();
    getAttendance();
    getAnnual();
    getWorkhours();
    getAnnualDates();
    console.log("Homepage!");
  }, [
    user,
    attendance,
    annual,
    todoContent,
    getTodo,
    getAttendance,
    getAnnual,
    getWorkhours,
    getAnnualDates,
    modalStatus,
  ]);
  return (
    <Container>
      {modalStatus.annual && (
        <AnnualModal
          user={user}
          onClose={() => handleShowModal(ModalType.ANNUAL, false)}
          showModal={false}
          data={annualDates}
        />
      )}
      {modalStatus.todo && (
        <TodoModal
          user={user}
          content={todoContent}
          onClose={() => handleShowModal(ModalType.TODO, false)}
        />
      )}
      <Header />
      <Main>
        <ContentBoxGroup>
          <ContentBox
            title="연차 현황"
            iconButton={
              <FaPlus onClick={() => handleShowModal(ModalType.ANNUAL, true)} />
            }
          >
            <ContentValue>{annual}일</ContentValue>
          </ContentBox>
          <ContentBox
            title="오늘의 일정"
            iconButton={
              <FaPen onClick={() => handleShowModal(ModalType.TODO, true)} />
            }
          >
            <ContentTodo>{todoContent}</ContentTodo>
          </ContentBox>
          <ContentBox title="출/퇴근">
            <ContentToggleButton
              onClick={submitAttendance}
              disabled={isExited(attendance)}
              attendance={attendance}
            >
              {getAttendanceStatus(attendance)}
            </ContentToggleButton>
          </ContentBox>
        </ContentBoxGroup>
        <ContentChartBox>
          <ContentBox title="금주 근무시간">
            <WorkHoursChart workHours={workhours} />
          </ContentBox>
        </ContentChartBox>
      </Main>
    </Container>
  );
}
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "HanSans";
`;
const Main = styled.main`
  padding-left: 4rem;
  padding-right: 4rem;
`;
const ContentBoxGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  gap: 1rem;
  > div {
    height: 200px;
  }
`;

const ContentChartBox = styled.div`
  margin: 1rem;
`;

const ContentValue = styled.p`
  margin: auto auto;
  font-size: 2rem;
`;
const ContentTodo = styled.label`
  margin: 0;
  padding: 0 1rem 1rem 1rem;
  width: 100%;
`;

const ContentToggleButton = styled.button<{ attendance?: Attendance }>`
  width: 100px;
  height: 40px;
  font-size: 16px;
  margin: auto auto;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 2.5em;
  border: 0;
  border-radius: 4px;
  background-color: ${(props) =>
    isExited(props.attendance)
      ? StatusButtonColor.COMPLETE
      : StatusButtonColor.PROGRESS};
`;
