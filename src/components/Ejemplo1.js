import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
/* Si error de titulo no esta definido (undefined) se pasa a ejecutar el span "no entiendo u.u" */
/* ese data dentro de onsubmit ya es un objeto automaticamente ezz */

const Ejemplo1 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const [entradas,setEntradas] = useState([])

    const onSubmit = (data,e) => {
        console.log(data)
        setEntradas([
            ...entradas,
            data
        ])
        e.target.reset()
    }
    return (  
        <Fragment>
            <h1>Ejemplo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    placeholder="Ingrese titulo"
                    className="form-control my-2"
                    {...register("titulo",{
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
                {   
                    errors.titulo &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.titulo.message}
                    </span>
                }
                <input
                    name="descripcion"
                    placeholder="Ingrese descripción"
                    className="form-control my-2"
                    {...register("descripcion",{
                        required:{
                            value: true,
                            message: 'Descripción requerida'
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
                {   
                    errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.descripcion.message}
                    </span>
                }
                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    entradas.map(item => 
                        <li>{item.titulo} - {item.descripcion}</li>)
                }
            </ul>
        </Fragment>
    );
}
 
export default Ejemplo1;