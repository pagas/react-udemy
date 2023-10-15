import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';
import Card from './components/UI/Card';


function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers(prev => {
      const newUser = {...user};
      newUser.id = Math.random().toString();
      return [...prev, newUser];
    })
  }

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUserHandler}/>
      </Card>
      <Card>
        <UsersList users={users}/>  
      </Card>
    </div>
  );
}

export default App;
