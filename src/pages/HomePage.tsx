import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import { User } from "../types/Users";
import { todosData, userData } from "../dummy/dummyData";
import { Todo } from "../types/Todo";
import { AttendanceRecord } from "../types/AttendanceRecord";

export default function HomePage() {
  const [user, setUser] = useState<User>();
  const [todo, setTodo] = useState<Todo>();
  const [attendanceList, setAttendanceList] = useState<AttendanceRecord[]>();
  const getUser = () => {
    setUser(userData);
    console.log(user);
  };
  const getTodo = (userId: number) => {
    const newTodo = todosData.find((el: Todo) => el.author === userId);
    setTodo(newTodo);
    console.log(todo);
  };
  // const getAttendanceList = (userId: number) =>{
  //   const newAttendanceList = attendanceList
  // }
  useEffect(() => {
    getUser();
    if (user) {
      getTodo(user.id);
    }
  }, []);
  return (
    <Container>
      <main>
        <LogoSection>
          <Logo src={logo} alt={"logo"} />
          <MainTitle>
            <span>Noris Work Dashboard</span>
          </MainTitle>
        </LogoSection>
        <ContentSection>
          <ContentBoxGroup>
            <ContentBox>
              <ContentBoxHeader>
                <ContentBoxTitle>연차 현황</ContentBoxTitle>
                <ContentBoxButton>
                  <FaPlus />
                </ContentBoxButton>
              </ContentBoxHeader>
              <ContentBoxMain>
                <ContentValue>15일</ContentValue>
              </ContentBoxMain>
            </ContentBox>
            <ContentBox>
              <ContentBoxHeader>
                <ContentBoxTitle>오늘의 일정</ContentBoxTitle>
                <ContentBoxButton>
                  <FaPen />
                </ContentBoxButton>
              </ContentBoxHeader>
              <ContentBoxMain>
                <ContentTodo>오늘의 일정!!</ContentTodo>
              </ContentBoxMain>
            </ContentBox>
            <ContentBox>
              <ContentBoxHeader>
                <ContentBoxTitle>출/퇴근</ContentBoxTitle>
              </ContentBoxHeader>
              <ContentBoxMain>
                <ContentToggleButton>출근</ContentToggleButton>
              </ContentBoxMain>
            </ContentBox>
          </ContentBoxGroup>
          <ContentChartBox>
            <ContentBoxHeader>
              <ContentBoxTitle>금주 근무시간</ContentBoxTitle>
            </ContentBoxHeader>
          </ContentChartBox>
        </ContentSection>
      </main>
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
const Logo = styled.img`
  width: 89px;
  height: 89px;
`;
const LogoSection = styled.section`
  display: flex;
  flex-direction: row;
`;
const MainTitle = styled.div`
  margin: auto 0;
  span {
    font-size: 24px;
    vertical-align: middle;
  }
`;
const ContentSection = styled.section`
  padding-left: 4rem;
  padding-right: 4rem;
`;
const ContentBoxGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  aspect-ratio: 3/2;
  width: 30%;
  font-size: 18px;
  border-radius: 10px;
  line-height: 3em;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
`;
const ContentBoxHeader = styled.div`
  display: flex;
  padding: 0 1rem;
  height: 54px;
`;
const ContentBoxTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
`;
const ContentBoxButton = styled.div`
  margin-left: auto;
  margin-right: 0;
  color: rgb(224, 224, 224);
`;
const ContentBoxMain = styled.div`
  display: flex;
  flex: 1;
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
const ContentChartBox = styled.div`
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  line-height: 3em;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  aspect-ratio: 14/5;
  margin-top: 2rem;
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
