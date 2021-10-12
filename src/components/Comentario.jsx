import React,{Fragment} from 'react'
import Avatar from './Avatar';

/* puedes usar en lugar de props el nombre de lo q estamos enviando sujeto q es el nombre del props*/
const Comentario = ({sujeto}) => {
    return (  
        <Fragment>
            <h1>Comentario</h1>
            <hr />
            <div className="media">
                {/* <img src={sujeto.urlImagen} alt="" className="mr-3"/> */}
                <Avatar urlImagen={sujeto.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
    );
}
 
export default Comentario;