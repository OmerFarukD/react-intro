import React from 'react';

function UserList({users}) {

    return (
        <div>
            <h2>Kullanıcı Listesi</h2>


                <ul>
                    {
                        users.map((user,index) => (
                         <li key={index}>
                             <strong> Ad :</strong> {user.name} <br/>
                             <strong> Şehir :</strong> {user.city} <br/>
                             <strong> Yaş :</strong> {user.age} <br/>
                         </li>
                        ))
                    }
                </ul>




        </div>
    );
}

export default UserList;
