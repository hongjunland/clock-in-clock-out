import styled from "@emotion/styled";
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { User } from "../types/Users";
import { Todo } from "../types/Todo";
import { attendanceAPI } from "../api/attendanceAPI";
import { todoAPI } from "../api/todoAPI";
import { Attendance } from "../types/AttendanceRecord";
import { attendancesData } from "../dummy/dummyData";
import { Header } from "../components/Header";
import { ContentBox } from "../components/ContentBox";
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
  }, [user]);
  const getAttendance = useCallback(async () => {
    const newAttendance = await attendanceAPI.fetchAttendance(user);
    setAttendance(newAttendance);
  }, [user]);
  const getAnnual = useCallback(async () => {
    const newAnnual = await attendanceAPI.fetchAnnual(user);
    setAnnual(newAnnual);
  }, [user]);
  const handleAttendanceChange = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!attendance) {
        const newAttendance = await attendanceAPI.createAttendance(user);
        setAttendance(newAttendance);
      } else {
        const newAttendance = await attendanceAPI.updateAttendance(user);
        setAttendance(newAttendance);
      }
    },
    [attendance, user]
  );
  useEffect(() => {
    getTodo();
    getAttendance();
    getAnnual();
    console.log(attendance);
    console.log(attendancesData);
  }, [
    user,
    getTodo,
    getAttendance,
    getAnnual,
    attendance,
    handleAttendanceChange,
  ]);
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
            <ContentToggleButton onClick={handleAttendanceChange}>
              {attendance === undefined ? "출근" : "퇴근"}
            </ContentToggleButton>
          </ContentBox>
        </ContentBoxGroup>
        <ContentChartBox title="금주 근무시간">ㅇㄴㅇ</ContentChartBox>
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
  > div {
    flex: 1;
    margin: 1rem;
    height: 200px;
  }
`;

const ContentChartBox = styled(ContentBox)`
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

const ContentToggleButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  margin: auto auto;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 2.5em;
  border: 0;
  border-radius: 4px;
  background-color: rgb(52, 152, 219);
`;
