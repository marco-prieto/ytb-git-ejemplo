import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
/* Esse props pasa como objeto */
const Saludo = (props) => {
    console.log(props)
    return (  
        <Fragment>
            <h2>Hola {props.persona}</h2>
        </Fragment>
    );
}
 
export default Saludo;