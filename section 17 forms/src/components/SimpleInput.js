import { useState } from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [nameTouched, setNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputInvalid = !enteredNameIsValid && nameTouched;

  const submitHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    console.log('submitted', enteredName);
    setEnteredName('')
    setNameTouched(false);
  }

  const blurHandler = () => {
    setNameTouched(true);
  }

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value)
  }


  const nameInputStyle = !nameInputInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputStyle}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onBlur={blurHandler}
          onChange={changeNameHandler} />
      </div>
      {nameInputInvalid && <p className='error-text'>Name must be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>


    </form>
  );
};

export default SimpleInput;

