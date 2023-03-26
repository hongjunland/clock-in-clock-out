import styled from "@emotion/styled";

interface Props {
  title: string;
  onClose: () => void;
}
function ModalFooter({ title, onClose }: Props) {
  return <Wrapper>
    <Submit type="submit">{title}</Submit>
    <CloseButton onClick={onClose}>닫기</CloseButton>
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  button{
    margin: 0.5rem;
  }
`;
const Submit = styled.button`
    font-size: 16px;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 2.5em;
    border-radius: 4px;
    background-color: rgb(52, 152, 219);
    border: 0;
    width: 50px;
    height: 40px;
`;

const CloseButton = styled.button`
    font-size: 16px;
    color: rgb(64, 64, 64);
    text-align: center;
    line-height: 2.5em;
    border-radius: 4px;
    background-color: rgb(224, 224, 224);
    border: 0;
    width: 50px;
    height: 40px;
`;

export default ModalFooter;