import useInput from '../hooks/use-input';


const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput((name) => {
    return name.trim() !== ''
  })

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput((email) => {
    return email.includes('@')
  })


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();


    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log('submitted', enteredName);
    resetName();
    resetEmail();
  }


  const nameInputStyle = !nameInputHasError ? 'form-control' : 'form-control invalid';
  const emailInputStyle = !emailInputHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputStyle}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler} />
      </div>
      {nameInputHasError && <p className='error-text'>Name must not be empty</p>}

      <div className={emailInputStyle}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler} />
      </div>
      {emailInputHasError && <p className='error-text'>Name must be empty and have @ symbol.</p>}


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>


    </form>
  );
};

export default SimpleInput;

