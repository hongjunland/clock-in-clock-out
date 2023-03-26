import styled from "@emotion/styled";
import { useState } from "react";
import { createPortal } from "react-dom";
import { todoAPI } from "../api/todoAPI";
import { User } from "../types/User";
import { ContentBox } from "./ContentBox";
import ModalFooter from "./ModalFooter";

interface Props {
  user: User;
  content: string;
  onClose: () => void;
}
function TodoModal({ user, content, onClose }: Props) {
  const [currentContent, setCurrentContent] = useState(content);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentContent(e.currentTarget.value);
  };
  const handleSubmitTodo = async () => {
    const todo = await todoAPI.fetchTodo(user);
    if (todo) {
      const newTodo = { ...todo, content: currentContent };
      const result = await todoAPI.updateTodo(user, newTodo);
      console.log(result);
      onClose();
    }
  };
  return (
    <>
      {createPortal(
      <Wrapper>
        <ModalContent>
          <ContentBox>
            <TodoModalContent
              value={currentContent}
              onChange={handleContentChange}
            />
          </ContentBox>
          <ModalFooter
            title="저장"
            onClose={onClose}
            onSubmit={handleSubmitTodo}
          />
        </ModalContent>
      </Wrapper>
      , document.body)}
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
const TodoModalContent = styled.textarea`
  margin: 0;
  padding: 1rem 1rem 0 1rem;
  width: 300px;
  height: 200px;
`;

export default TodoModal;
