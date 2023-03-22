import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { FaPlus } from "react-icons/fa";

export default function HomePage() {
  return (
    <Container>
      <main>
        <LogoBox>
          <Logo src={logo} alt={"logo"} />
          <MainTitle>
            <span>Noris Work Dashboard</span>
          </MainTitle>
        </LogoBox>
        <ContentBoxGroup>
          <ContentBox>
            <ContentBoxHeader>
              <ContentBoxTitle>연차 현황</ContentBoxTitle>
              <ContentBoxButton>
                <FaPlus />
              </ContentBoxButton>
            </ContentBoxHeader>
            <ContentValue>15일</ContentValue>
          </ContentBox>
          <ContentBox>
            <ContentBoxTitle>연차 현황</ContentBoxTitle>
          </ContentBox>
          <ContentBox>
            <ContentBoxTitle>연차 현황</ContentBoxTitle>
          </ContentBox>
        </ContentBoxGroup>
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
`;
const Logo = styled.img`
  width: 89px;
  height: 89px;
`;
const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const MainTitle = styled.div`
  margin: auto 0;
  span {
    font-size: 21px;
    font-family: "HanSans";
    vertical-align: middle;
  }
`;
const ContentBoxGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 2rem 0;
`;
const ContentBox = styled.div`
  font-family: "HanSans";
  font-size: 18px;
  border-radius: 10px;
  line-height: 3em;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  flex: 1;
  margin: 2rem;
  color: #333;
`;
const ContentBoxHeader = styled.div`
  display: flex;
`;
const ContentBoxTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
const ContentBoxButton = styled.div`
  margin-left: auto;
  margin-right: 0;
`;
const ContentValue = styled.span`
  margin: auto;
  width: 100%;
`;
