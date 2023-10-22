import { useReducer } from "react";


const initialState = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return { ...state, value: action.value }
        case 'TOUCHED':
            return { ...state, isTouched: true }
        case 'RESET':
            return { value: '', isTouched: false }
        default:
            return initialState
    }
}

const useInput = (validateValue) => {

    const [{ value: enteredValue, isTouched }, dispatch] = useReducer(inputReducer, initialState);

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'SET_VALUE', value: event.target.value })
    }

    const inputBlurHandler = (value) => {
        dispatch({ type: 'TOUCHED' })
    }

    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;