import { Fragment, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

const portalElement = document.getElementById('modal');

const Modal = ({ children, open, className = '' }) => {
  const dialogRef = useRef();
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    }
  }, [open])

  return (
    <Fragment>
      {/* {createPortal(<Backdrop onClose={props.onClose} />, portalElement)} */}
      {createPortal(
        <dialog ref={dialogRef} className={`${styles.modal} ${className}`}>{children}</dialog>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
