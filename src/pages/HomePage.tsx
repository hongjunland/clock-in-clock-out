import styled from "@emotion/styled";
import logo from "../assets/logo.png";

export default function HomePage() {
  return (
    <div>
      <header>
        <LogoBox>
          <Logo src={logo} alt={"logo"} />
          <MainTitle>
            <span>Noris Work Dashboard</span>
          </MainTitle>
        </LogoBox>
      </header>
      <main>sss</main>
    </div>
  );
}

const Logo = styled.img`
  width: 89px;
  height: 89px;
`;
const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const MainTitle = styled.div`
    margin: auto auto 0;
    span{
        font-size: 21px;
        font-family: 'HanSans';
        vertical-align: middle;
    }
`;
