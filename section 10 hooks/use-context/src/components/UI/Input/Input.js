import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {

  return (
    <div className={`${styles.control} ${props.isValid === false ? styles.invalid : ''} `}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type || 'text'}
        value={props.value || ''}
        onChange={props.onChange}
        onBlur={props.onBlur}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Input;
