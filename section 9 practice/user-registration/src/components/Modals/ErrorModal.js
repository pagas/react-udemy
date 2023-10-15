import Button from '../UI/Button';
import styles from './Modal.module.css';

const ErrorModal = (props) => {
    const { show, text, onClose } = props;

    const showHideClassName = show
        ? `${styles.modal} ${styles['display-block']}`
        : `${styles.modal} ${styles['display-none']}`;
    return (
        <div className={showHideClassName}>
            <section className={styles['modal-main']}>
                <div className={styles['modal-header']}>
                    <h5 className={styles['modal-title']}>Invalid Input</h5>
                </div>
                <div className={styles['modal-body']}>
                    {text}
                </div>
                <div className={styles['modal-footer']}>
                    <Button type="button" onClick={onClose}>
                        Okay
                    </Button>
                </div>
            </section>
        </div>
    );

}

export default ErrorModal;