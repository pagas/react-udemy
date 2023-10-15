import { useState } from "react";
import styles from './AddUser.module.css';
import ErrorModal from "../Modals/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";


const initialUserInput = {
    username: '',
    age: ''
}

const AddUser = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();

        const newUser = {
            ...userInput,
            username: userInput.username.trim(),
        };

        if (!newUser.username || !newUser.age) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        newUser.age = +newUser.age;

        if (userInput.age <= 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age (> 0).'
            });
            return;
        }

        props.onAddUser(userInput);
        setUserInput(initialUserInput);
    };

    const changeHandler = (e, inputField) => {
        setUserInput(prev => {
            return { ...prev, [inputField]: e.target.value }
        })
    }

    const handleClose = () => {
        setError();
    }

    return (
        <>
            {error && <ErrorModal text={error.text} message={error.message} onClose={handleClose} />}
            <Card>
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
            </Card>
        </>
    )
}

export default AddUser;