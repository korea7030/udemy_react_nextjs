import Card from "../UI/Card";

import styles from './UsersList.module.css';

function UsersList(props) {
  return (
    <Card className={styles.user}>
        <ul>
        {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old)
            </li>
        ))}
        </ul>
    </Card>
  );
}

export default UsersList;
