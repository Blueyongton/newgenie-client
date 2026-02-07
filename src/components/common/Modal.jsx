import styled from "styled-components";

const Modal = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalSection onClick={(e) => e.stopPropagation()}>
        <Dialog role="dialog" aria-modal="true">
          <ModalTitle>{title}</ModalTitle>
          <Message>{content}</Message>

          <ActionButton onClick={onClose}>닫기</ActionButton>
        </Dialog>
      </ModalSection>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 900;
  cursor: pointer;
`;

const ModalSection = styled.section`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Dialog = styled.div`
  width: 90%;
  max-width: 500px;
  background: rgb(227, 241, 255);
  border-radius: 16px;
  padding: 24px;
  text-align: left;

`;

const ModalTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
`;

const Message = styled.p`
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-line;
`;

const ActionButton = styled.button`
  margin-top: 20px;
  border: none;
  border-radius: 999px;
  padding: 10px 25px;
  background: black;
  color: white;
  cursor: pointer;
  background:#2563eb;
`;
