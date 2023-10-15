import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './Modal.module.css';

const ErrorModal = (props) => {
    const {  message, title, onClose } = props;
    const _title = title || 'Invalid Input';

    return (
        <div className={`${styles.modal} ${styles['display-block']}`} onClick={onClose}>
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
        </div>
    );

}

export default ErrorModal;