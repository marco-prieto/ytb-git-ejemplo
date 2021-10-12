import React,{useState,Fragment} from 'react'; 
/* imr para import */
/* sfc para para constante */
/* lo q esta antes de return es logica de js */
/* React nos recomienda q para modificar ese estado numero o algo asi usemos el setNumero */
/* primer nombre del estado y funcion q lo modifica */
/* dentro del usestate vamos a especificar el valor inicial de numero */
/* CUando quieremos leer algo q viene de JS tenemos q usar las llavecitas */
/* dentro de ese useState puede estar el valor inicial puede ser string,objeto,bool,etc */
/* Dentro del return debemos devolver 1 solo elemento */
/* Fragment sirve para reemplazar cosas q no se usa de html x ejemplo poner fragment en lugar de un supuesto div inicial */
/* se coloca de nombre de preferencia setNumero y mas q todo es x una regla interna de react pero c puede usar otros nombres */
const Contador = () => {

    const [numero,setNumero] = useState(0);

    const aumentar = () => {
        console.log('Me diste un click xD')
        setNumero(numero + 1)
    }

    return (
        <Fragment>
            <h3>Aca en contador xD {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;