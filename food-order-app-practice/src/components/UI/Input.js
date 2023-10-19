import styles from './Input.module.css';
import React, { useRef, useImperativeHandle } from 'react';


const Input = React.forwardRef(({ label, type, input }, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            value() {
                return inputRef.current.value
            },
            reset() {
                inputRef.current.value = 1;
            }
        }
    }, []);

    return (
        <div className={styles.input}>
            <label htmlFor={input.id}>{label}</label>
            <input ref={inputRef} type={type} {...input} />
        </div>
    )
})

export default Input;