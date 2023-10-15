import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


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
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>  
    </>
  );
}

export default App;
