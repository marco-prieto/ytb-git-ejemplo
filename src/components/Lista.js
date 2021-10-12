import React,{useState} from 'react';
/* el map hace un recorrido e item es la variable local */
/* el map debe retornar algo */
/* CUANDO TENEMOS UN MAP O CICLO NOS VA A PEDIR SIEMPRE UNA KEY */
/* Los index siempre van a empezar en cero y van a tomar cada uno de los elemntos algo asi */
/* ... esos puntitos era como q la base no recuerdo bien pero es teoria de JS la cosa q con ello agarras todo el array de arrayNumero*/
const Lista = () => {

    const [arrayNumero,setArrayNumero] = useState([1,2,3,4,5])

    const [numero,setNumero] = useState(5)

    const agregarElemento = () => {
        setNumero(numero+1)
        console.log('click')
        setArrayNumero([
            ...arrayNumero,
            numero
        ])
    }
    return (  
        <>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item,index) => 
                    <p key={index}>{item} - {index}</p>
                )
            }
        </>
    );
}
 
export default Lista;