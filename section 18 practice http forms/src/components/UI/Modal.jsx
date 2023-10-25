import { Fragment, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const portalElement = document.getElementById('modal');

const Modal = ({ children, open, className = '' }) => {
  const dialogRef = useRef();
  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }
    return () => {
      console.log('open clean up', open)
      modal.close();
    }
  }, [open])

  return (
    <>
      {createPortal(
        <dialog ref={dialogRef} className={`${styles.modal} ${className}`}>{children}</dialog>,
        portalElement
      )}
    </>
  );
};

export default Modal;
