import React from 'react'
import styles from './Input.module.css';


function Input({ label, id, type = 'text', ...props }) {
    return (
        <p className={styles.control}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} {...props} required />
        </p>
    )
}

export default Input