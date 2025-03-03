import React, {useState} from 'react';

function LoginForm() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const [error,setError] = useState("")

    // Parola minimum 6 haneli olmalıdır.
    // username alanı minimum 2 haneli olmalıdır.

    const  OnChange = (e)=>{
        if(e.target.name === "password")
        {
         setPassword(e.target.value)
        }

        if (e.target.name === "username"){
            setUsername(e.target.value)
        }


    }


    const  handleSubmit = (e)=>{
        e.preventDefault();
        if (username.length<=2){
            setError("Username alanı minimum 2 haneli olmalıdır.")
        }



      alert(`Gönderilen Veriler : 
 Ad : ${username}   Parola : ${password}  `)

    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Kullanıcı adı :</label>
                    <input
                        name="username"
                        value={username}
                        onChange={OnChange} type="text"/>
                </div>
                <div>
                    <label>Kullanıcı Parolası :</label>
                    <input
                        name="password"
                        value={password}
                        onChange={OnChange} type="text"/>
                </div>

                <div>
                    <button type="submit" style={{backgroundColor: "yellow", color: "red"}}>Giriş Yap</button>
                </div>
            </form>

            <hr/>


            <p><strong>Kullanıcı Adı :</strong> <span
                style={{color: "yellow", backgroundColor: "red"}}>{username}</span></p>
            <p><strong>Kullanıcı Parolası :</strong> <span
                style={{color: "white", backgroundColor: "black"}}>{password}</span></p>



            <p>{error}</p>


        </>
    );
}

export default LoginForm;
