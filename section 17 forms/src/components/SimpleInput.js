import { useState } from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [nameTouched, setNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputInvalid = !enteredNameIsValid && nameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputInvalid = !enteredEmailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);
    if (!enteredNameIsValid || !emailInputInvalid) {
      return;
    }

    console.log('submitted', enteredName);
    setEnteredName('')
    setEnteredEmail('')
    setNameTouched(false);
    setEmailTouched(false);
  }

  const blurNameHandler = () => {
    setNameTouched(true);
  }

  const blurEmailHandler = () => {
    setEmailTouched(true);
  }
  
  const changeNameHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const changeEamilHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const nameInputStyle = !nameInputInvalid ? 'form-control' : 'form-control invalid';
  const emailInputStyle = !emailInputInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputStyle}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onBlur={blurNameHandler}
          onChange={changeNameHandler} />
      </div>
      {nameInputInvalid && <p className='error-text'>Name must not be empty</p>}

      <div className={emailInputStyle}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onBlur={blurEmailHandler}
          onChange={changeEamilHandler} />
      </div>
      {emailInputInvalid && <p className='error-text'>Name must be empty and have @ symbol.</p>}


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>


    </form>
  );
};

export default SimpleInput;

