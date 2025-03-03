import React, {useState} from 'react';

function Counter() {
    const  [count,setCount]=useState(0);
    const  [range,setRange] = useState(1)

    return (
        <>

            <p>
                sayaç : {count}

                <hr/>

                Aralık : {range}
            </p>

            <button
                onClick={() => setCount(count + range)}
                style={{backgroundColor: "red", margin:"10px"}}
            > Arttır
            </button>

            <button
                onClick={() => setCount(count - range)}
                style={{backgroundColor: "yellow"}}
            > Azalt
            </button>
            <hr/>

            <button onClick={()=> setRange(1)}>1</button>
            <button onClick={()=> setRange(3)}>3</button>
            <button onClick={()=> setRange(5)}>5</button>

        </>
    );
}

export default Counter;

