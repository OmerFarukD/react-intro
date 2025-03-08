import React, {useState} from 'react';

function Fruits(props) {

    const [fruits, setFruits] = useState(["Kivi",'Portakal','Üzüm']);

    const [name,setName] = useState("");


     function handleSubmit(event){
         event.preventDefault();

         setFruits([...fruits,name]);

         setName("")

     }

    return (
        <div>
            <h1>Meyve ekleme formu.</h1>

            <form onSubmit={handleSubmit}>
                <label>İsim</label>
                <input
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                    type="text"/>

                <div style={{padding:'10px'}}>
                    <button type="submit" style={{backgroundColor:"green"}}>Ekle</button>
                </div>
            </form>


            <ul>
                {
                    fruits.map((value)=>(
                        <li>{value}</li>

                    ))
                }
            </ul>
        </div>
    );
}

export default Fruits;