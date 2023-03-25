import styled from "@emotion/styled";
import { FaPlus, FaPen } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { User } from "../types/User";
import { Todo } from "../types/Todo";
import { attendanceAPI } from "../api/attendanceAPI";
import { todoAPI } from "../api/todoAPI";
import { Attendance } from "../types/Attendance";
import { Header } from "../components/Header";
import { ContentBox } from "../components/ContentBox";
import { getAttendanceStatus, isExited } from "../utils/attendanceUtils";
import { StatusButtonColor } from "../constants/status";
interface Props {
  user: User;
}
export default function HomePage({ user }: Props) {
  const [todo, setTodo] = useState<Todo>();
  const [attendance, setAttendance] = useState<Attendance>();
  const [annual, setAnnual] = useState(0);
  const getTodo = useCallback(async () => {
    const newTodo = await todoAPI.fetchTodo(user);
    setTodo(newTodo);
  },[user]);
  const getAttendance = useCallback(async () => {
    const newAttendance = await attendanceAPI.fetchAttendance(user);
    setAttendance(newAttendance);
  },[user]);
  const getAnnual = useCallback(async () => {
    const newAnnual = await attendanceAPI.fetchAnnual(user);
    setAnnual(newAnnual);
  },[user]);
  const handleAttendanceChange = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!attendance) {
      const newAttendance = await attendanceAPI.createAttendance(user);
      setAttendance(newAttendance);
    } else {
      const newAttendance = await attendanceAPI.updateAttendance(user);
      setAttendance(newAttendance);
    }
  };
  useEffect(() => {
    getTodo();
    getAttendance();
    getAnnual();
  }, [user, attendance, annual, getTodo, getAttendance, getAnnual]);
  return (
    <Container>
      <Header />
      <Main>
        <ContentBoxGroup>
          <ContentBox title="연차 현황" iconButton={<FaPlus />}>
            <ContentValue>{annual}일</ContentValue>
          </ContentBox>
          <ContentBox title="오늘의 일정" iconButton={<FaPen />}>
            <ContentTodo>{todo?.content}</ContentTodo>
          </ContentBox>
          <ContentBox title="출/퇴근">
            <ContentToggleButton
              onClick={handleAttendanceChange}
              disabled={isExited(attendance)}
              attendance={attendance}
            >
              {getAttendanceStatus(attendance)}
            </ContentToggleButton>
          </ContentBox>
        </ContentBoxGroup>
        <ContentChartBox>
          <ContentBox title="금주 근무시간">
            <input value={attendance?.endTime} />
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

const ContentToggleButton = styled.button<{attendance?: Attendance}>`
  width: 100px;
  height: 40px;
  font-size: 16px;
  margin: auto auto;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 2.5em;
  border: 0;
  border-radius: 4px;
  background-color: ${props=> isExited(props.attendance) ? StatusButtonColor.COMPLETE : StatusButtonColor.PROGRESS};
`;
