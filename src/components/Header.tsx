import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Wrapper>
      <Logo src={logo} alt={"logo"} />
      <MainTitle>
        <span>Noris Work Dashboard</span>
      </MainTitle>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
`;
const Logo = styled.img`
  width: 89px;
  height: 89px;
`;
const MainTitle = styled.div`
  margin: auto 0;
  span {
    font-size: 24px;
    vertical-align: middle;
  }
`;

export default Header;
