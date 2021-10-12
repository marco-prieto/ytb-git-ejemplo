import React,{Fragment,useState} from 'react';
import { useForm } from 'react-hook-form';
/* Aca es igual de importante tener el name */
/* lo cuerios es meter onSutmit dentro de handleSubmit pero asi pide o.O */
/* cada vez q precionemos el boton deberiamos estar leyendo todos los input q tenemos */
/* en register se van a meter las reglas al parecer */
const FormHook = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data,event) =>{
        console.log(data)
        event.target.reset()
    }
    return (  
        <Fragment>
            <h1>FormHook</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name="titulo"
                className="form-control my-2"
                {...register("name",{
                    required:{
                        value: true,
                        message: 'Titulo requerido'
                    },
                    maxLength: {
                        value: 5, 
                        message: 'No más de 5 carácteres!'
                        },
                    minLength: {
                        value: 2, 
                        message: 'Mínimo 2 carácteres'
                        }
                })}/>
                {/* <input
                name="subtitulo"
                className="form-control my-2"
                {...register("name",{
                    required:{
                        value: true,
                        message: 'Subtitulo requerido'
                    },
                    maxLength: {
                        value: 5, 
                        message: 'No más de 5 carácteres!'
                        },
                    minLength: {
                        value: 2, 
                        message: 'Mínimo 2 carácteres'
                        }
                })}/> */}
                <span className="text-danger text-small d-block mb-2">
                    {errors.name &&  errors.name.message}
                </span>                
                <button className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
    );
}
 
export default FormHook;