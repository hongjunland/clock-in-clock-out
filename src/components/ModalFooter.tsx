import styled from "@emotion/styled";

interface Props {
  title: string;
  onClose: () => void;
  onSubmit: () => void;
}
export default function ModalFooter({ title, onClose, onSubmit }: Props) {
  return <Wrapper>
    <button onClick={onSubmit}>{title}</button>
    <button onClick={onClose}>닫기</button>
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
