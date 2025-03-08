import React, {useState} from 'react';
import UserForm from "./UserForm.jsx";
import UserList from "./UserList.jsx";

const User = (props)=> {

    const  [users,setUsers] = useState([])

    function  addUser (user){
        setUsers([...users,user])
    }
    return (
        <div>

            <UserForm  addUser={addUser}/>

            <hr/>

            <UserList users={users}/>

        </div>
    );
}

export default User;
