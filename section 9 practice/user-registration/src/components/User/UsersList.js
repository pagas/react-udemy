import Card from '../UI/Card';
import styles from './UserList.module.css'

const UsersList = (props) => {
    return (
        <Card>
            <ul className={styles['user-list']}>
                {props.users.map(user => (
                    <li key={user.id}>{user.username} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;