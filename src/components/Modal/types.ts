export interface ModalProps {
  header: string;
  buttons?: Array<ModalButton>;
}

export interface ModalButton {
  name: string;
  onClick: () => void;
}
