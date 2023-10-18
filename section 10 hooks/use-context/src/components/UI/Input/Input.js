import React, { useRef, useImperativeHandle } from 'react';

import styles from './Input.module.css';


const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }

  // use imerative is not required, it helps to expose limited functionality, 
  // not the entire DOM element
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  });

  return (
    <div className={`${styles.control} ${props.isValid === false ? styles.invalid : ''} `}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        ref={inputRef}
        type={props.type || 'text'}
        value={props.value || ''}
        onChange={props.onChange}
        onBlur={props.onBlur}
        disabled={props.disabled}
      />
    </div>
  );
});

export default Input;
