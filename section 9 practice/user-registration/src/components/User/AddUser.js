import { useState, useRef } from "react";
import styles from './AddUser.module.css';
import ErrorModal from "../Modals/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
    const [error, setError] = useState();
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (e) => {
        e.preventDefault();

        const newUser = {
            age: ageInputRef.current.value,
            username: nameInputRef.current.value.trim(),
        };

        if (!newUser.username || !newUser.age) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        newUser.age = +newUser.age;

        if (newUser.age <= 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age (> 0).'
            });
            return;
        }

        props.onAddUser(newUser);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

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
                            ref={nameInputRef}
                            id="username" />
                    </div>

                    <div className={styles['form-control']}>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            type="number"
                            ref={ageInputRef}
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