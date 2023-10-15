import styles from './UserList.module.css'

const UsersList = (props) => {
    return (
        <ul className={styles['user-list']}>
            {props.users.map(user => (
                <li key={user.id}>{user.username} ({user.age} years old)</li>
            ))}
        </ul>
    )
}

export default UsersList;