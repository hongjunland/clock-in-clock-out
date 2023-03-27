import styled from "@emotion/styled";
import { useState } from "react";
import { useTodo } from "../hooks";
import { User } from "../types";
import ContentBox from "./ContentBox";
import Modal from "./Modal";
import ModalFooter from "./ModalFooter";

interface Props {
  user: User;
  content: string;
  onClose: () => void;
}
function TodoModal({ user, content, onClose }: Props) {
  const [currentContent, setCurrentContent] = useState(content);
  const {updateTodo} = useTodo(user);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentContent(e.currentTarget.value);
  };
  const handleSubmitTodo = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodo(currentContent, onClose);
  };
  return (
    <Modal>
      <form onSubmit={handleSubmitTodo}>
        <ContentBox>
          <TodoModalContent
            value={currentContent}
            onChange={handleContentChange}
          />
        </ContentBox>
        <ModalFooter title="저장" onClose={onClose} />
      </form>
    </Modal>
  );
}

const TodoModalContent = styled.textarea`
  margin: 0;
  padding: 1rem 1rem 0 1rem;
  width: 300px;
  height: 200px;
`;

export default TodoModal;
