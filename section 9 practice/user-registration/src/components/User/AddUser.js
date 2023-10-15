import { useState } from "react";
import styles from './AddUser.module.css';
import ErrorModal from "../Modals/ErrorModal";
import Button from "../UI/Button";


const initialUserInput = {
    username: 'Tom Bennet',
    age: 8
}

const AddUser = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);
    const [error, setError] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();

        if (!userInput.username || userInput.age <= 0) {
            setError('Please enter a valid name and age(non-empty values).');
            return;
        }

        props.onAddUser(userInput);
    };

    const changeHandler = (e, inputField) => {
        setUserInput(prev => {
            return { ...prev, [inputField]: e.target.value }
        })
    }

    const handleClose = () => {
        setError('');
    }


    return (
        <div>
            <ErrorModal show={error !== ''} text={error} onClose={handleClose} />

            <form className={styles.form} onSubmit={addUserHandler}>
                <div className={styles['form-control']}>

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={userInput.username}
                        onChange={(e) => changeHandler(e, "username")}
                        id="username" />

                </div>

                <div className={styles['form-control']}>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        value={userInput.age}
                        onChange={(e) => changeHandler(e, "age")}
                        id="age" />

                </div>

                <p className={styles.actions}>
                    <Button type="submit">
                        Add User
                    </Button>
                </p>
            </form>
        </div>
    )
}

export default AddUser;