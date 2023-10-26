import React from 'react';
import styles from './Button.module.css';

const Button = ({ type = 'button', children, textOnly, className = '', ...props }) => {

    const cssClasses = textOnly ? styles['text-button'] : styles.button;

    return (
        <button className={`${cssClasses} ${className}`} type={type} {...props}>
            {children}
        </button>
    )
}

export default Button