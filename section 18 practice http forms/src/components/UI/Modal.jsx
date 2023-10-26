import { Fragment, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const portalElement = document.getElementById('modal');

const Modal = ({ children, open, onClose, className = '' }) => {
  const dialogRef = useRef();
  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }
    return () => {
      modal.close();
    }
  }, [open])

  return (
    <>
      {createPortal(
        <dialog
          ref={dialogRef}
          onClose={onClose}
          className={`${styles.modal} ${className}`}>
          {children}
        </dialog>,
        portalElement
      )}
    </>
  );
};

export default Modal;
