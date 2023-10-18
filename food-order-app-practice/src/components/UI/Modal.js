import Card from './Card';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
    const { children } = props;

    return (
        <Card className={styles['modal']}>
            <div className={styles['content']}>
                {children}
            </div>
        </Card>
    )
}

const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop {...props} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay  {...props} />,
                document.getElementById('overlay-root')
            )}
        </>
    );

}

export default Modal;