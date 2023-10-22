import useInput from "../hooks/use-input";

const isNotEmpt = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpt)


  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpt)


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail)

  const formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;


  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmail();
    resetFirstName();
    resetLastName();
  }

  const firstNameStyles = !firstNameInputHasError ? 'form-control' : 'form-control invalid'
  const lastNameStyles = !lastNameInputHasError ? 'form-control' : 'form-control invalid'
  const emailStyles = !emailInputHasError ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameStyles}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
            id='name' />
          {firstNameInputHasError && <p className='error-text'>Firstname cant not be empty</p>}
        </div>


        <div className={lastNameStyles}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            id='lastname' />
          {lastNameInputHasError && <p className='error-text'>Lastname cant not be empty</p>}
        </div>

      </div>
      <div className={emailStyles}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          id='email' />
        {emailInputHasError && <p className='error-text'>Email is invalid</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
