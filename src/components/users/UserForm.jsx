import React, {useState} from 'react';

function UserForm({addUser}) {

    const [formData, setFormData] = useState({
        name:"",
        age:0,
        city:""
    })


    function handleOnChange(e){
        const {name,value} = e.target;
        setFormData({...formData, [name]:value})
    }



    function  handleSubmit(e){
        e.preventDefault();

        if (formData.name && formData.age && formData.city) {
            addUser(formData);
            setFormData({name: "", age: 0, city:""})

        }else{
            alert("Lütfen tüm alanları doldurunuz")
        }

    }

    return (
        <div  onSubmit={handleSubmit}>
            <h2>Kullanıcı Formu :</h2>
            <form>
                <div>
                    <label>Kullanıcı Adı</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleOnChange}
                        type="text"/>
                </div>
                <div>
                    <label>Kullanıcı Yaşı :</label>
                    <input
                        name="age"
                        value={formData.age}
                        onChange={handleOnChange}
                        type="number"/>
                </div>
                <div>
                    <label>Kullanıcı Şehri :</label>
                    <input
                        name="city"
                        value={formData.city}
                        onChange={handleOnChange}
                        type="text"/>
                </div>

                <button type="submit">Kullanıcı Ekle</button>
            </form>
        </div>
    );
}

export default UserForm;