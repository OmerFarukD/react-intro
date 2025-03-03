import React from 'react';

function UserInfo(props) {
   const{name, surname, point} = props.info;
    return (
        <div>
            <h2>Kullanıcı Adı : {name}</h2>
            <p> <strong>Kullanıcı Soyadı :</strong>{surname}</p>
            <p> <strong>Kullanıcı puanı :</strong>{point}</p>
            <hr/>
        </div>
    );
}

export default UserInfo;
