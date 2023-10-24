import React from 'react';

const Button = ({ type = 'button', children, textOnly, className, ...props }) => {

    const cssClasses = textOnly ? 'text-button' : 'button';

    return (
        <button className={`${cssClasses} ${className}`} type={type} {...props}>
            {children}
        </button>
    )
}

export default Button