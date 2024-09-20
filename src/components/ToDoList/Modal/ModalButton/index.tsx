import { ReactNode } from "react";
import styles from "./styles.module.scss";

type ModalButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const ModalButton = ({ children, onClick, className }: ModalButtonProps) => {
  return (
    <button className={`${styles.modalButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ModalButton;
