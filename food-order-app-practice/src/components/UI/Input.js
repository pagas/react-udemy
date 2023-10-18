import styles from './Input.module.css';


const Input = ({ label, type, input }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={input.id}>{label}</label>
            <input type={type} {...input} />
        </div>
    )
}

export default Input;