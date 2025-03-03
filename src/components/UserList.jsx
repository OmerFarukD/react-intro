import React from 'react';

const UserList = ()=> {

    const  users = [
        {name: "Ömer Faruk", surname: "Doğan",email:"omer@gmail.com"},
        {name: "Buse", surname: "Doğan",email:"buse@gmail.com"},
        {name: "Evren", surname: "Doğan",email:"evren@gmail.com"},
    ]

    return (
        <div>
            <h2>Kullanıcılar listesi</h2>
            <br/>

            <table style={{border:'1px solid'}}>
                <thead>
                <th> isim </th>
                <th> Soyisim </th>
                <th> Email </th>
                </thead>
                <tbody>

                { users.map((user,index)=> {
                     return <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                        </tr>
                    }
                )}


                </tbody>


            </table>

        </div>
    );
}

export default UserList;