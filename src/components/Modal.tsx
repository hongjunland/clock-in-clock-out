import styled from "@emotion/styled";
import React, { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
}

export default function Modal({ showModal, onClose, children }: ModalProps) {
  const [show, setShow] = useState(showModal);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
        <Wrapper>
          <ModalContent>
            {/* <span className="close" onClick={handleClose}>
              &times;
            </span> */}
            {children}
          </ModalContent>
        </Wrapper>
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
