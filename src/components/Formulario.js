import React,{Fragment,useState} from 'react';
/* Es facil meter boopstrap ya q solo copias el link de css q te da en getstarted y lo pegas en index.html q esta en la carpeta public */
/* en jsx se usa className en lugar de class */
/* submit es para ejecutar el evento q tenga el formulario o form */
/* COmo regla general es bueno colocar atributo name el nombre de la variable q vamos a asociar esto no quiere decir q ya se asocio */
/* Evento onChange estará pendiente de los cambios de los inputs*/
/* ese handleinputchange puede ser cualquier nombre .. y esta funcion estara pendiente de un evento q le ponemos como variable event x placer xD*/
/* con event.target.value estaremos al pendiente del valor q este en el input */
/* ... esos puntitos era pa hacer una copia de lo q ya habia en datos y q no se pierda al agregar ya q solo quedaria el nuevo elemento sino */
/* recuerdas lo de name q se ponga el nombre de las variables bueno ese event.target.name esta relacionado con los names q pusimos en los input entonces ya no hay necesidad de estar agregando nombre y apellido y rellenar con el value sino q ya automatico lo sabe xD*/
/* event.preventDefault() eso es para evitar el procesamiento automatico de los formularios... esto es JS puro... ademas ese prevent evita q si yo aumatico apreto el boton enviar se haga de fresa sin preguntar nada */
/* ese enviar datos ya c procesa con el back end */

const Formulario = () => {
    
    const [datos,setDatos] = useState({
        nombre: '',
        apellido: ''
    })
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese Nombre"
                        className="form-cotrol"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}/>
                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Apellido"
                        className="form-cotrol"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}/>
                </div>
                <div className="col-md-3">
                    <button
                        className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>  
    );
}
 
export default Formulario;