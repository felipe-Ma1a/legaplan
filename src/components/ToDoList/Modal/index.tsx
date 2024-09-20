"use client";

import { ReactNode } from "react";
import ModalButton from "./ModalButton";
import styles from "./styles.module.scss";

type ModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  confirmText: string;
  confirmButtonClass?: string;
};

const Modal = ({
  title,
  children,
  onClose,
  onConfirm,
  confirmText,
  confirmButtonClass = "",
}: ModalProps) => {
  return (
    <div className={styles.modalOverlay}>
      <section className={styles.modal}>
        <h2>{title}</h2>
        <div>{children}</div>
        <div className={styles.modalActions}>
          <ModalButton onClick={onClose} className={styles.cancelButton}>
            Cancelar
          </ModalButton>
          <ModalButton
            onClick={onConfirm}
            className={`${styles.confirmButton} ${confirmButtonClass}`}
          >
            {confirmText}
          </ModalButton>
        </div>
      </section>
    </div>
  );
};

export default Modal;
