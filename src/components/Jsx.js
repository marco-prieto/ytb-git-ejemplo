import React from 'react';
const Jsx = () => {

    const saludo = 'Hola JSX';
    const temperatura = 21;
    /* Al usar llavecitas se puede usar JS */
    return (  
        <>
            <h2>Holi componente jsx {saludo}</h2>
            <h4>
                {
                    temperatura > 20 ? 'Calor' : 'Frio'
                }
            </h4>
        </>
    );
}
 
export default Jsx;