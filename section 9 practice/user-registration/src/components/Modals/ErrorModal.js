import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
    const { message, title, onClose } = props;
    const _title = title || 'Invalid Input';
    return (
        <Card className={styles['modal-main']}>
            <div className={styles['modal-header']}>
                <h5 className={styles['modal-title']}>{_title}</h5>
            </div>
            <div className={styles['modal-body']}>
                {message}
            </div>
            <div className={styles['modal-footer']}>
                <Button type="button" onClick={onClose}>
                    Okay
                </Button>
            </div>
        </Card>
    )
}

const ErrorModal = (props) => {

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

export default ErrorModal;