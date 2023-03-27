import styled from "@emotion/styled";
import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
}
function Modal({children}:Props) {
  return (
    <>
      {createPortal(
        <Wrapper>
          <ModalContent>{children}</ModalContent>
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
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
export default Modal;
