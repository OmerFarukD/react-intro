import React, {useState} from 'react';

function CityForm(props) {

    const  [formData,setFormData] = useState({
        name:"",
        population:0,
        altitude:0
    })


    function  handleOnChange(e){
const {name,value} = e.target;
setFormData({...formData, [name]:value})
    }


    return (
        <div>
            <h1>Şehir Formu</h1>

            <div>
                <label>Şehir adı :</label>
                <input
                    name={"name"}
                    value={formData.name}
                    onChange={handleOnChange}
                    type="text"/>
            </div>

            <div>
                <label>nüfus :</label>
                <input
                    name={"population"}
                    value={formData.population}
                    onChange={handleOnChange}
                    type="number"/>
            </div>


            <div>
                <label>Rakım :</label>
                <input
                    name={"altitude"}
                    value={formData.altitude}
                    onChange={handleOnChange}
                    type="number"/>
            </div>

            <hr/>

            <h3>Girdiğiniz Veriler : </h3>
            <p><strong>Şehir Adı :</strong>{formData.name}</p>
            <p><strong>Şehir Nüfusu :</strong>{formData.population} </p>
            <p><strong>Şehir Rakımı :</strong>{formData.altitude} </p>
        </div>
    );
}

export default CityForm;