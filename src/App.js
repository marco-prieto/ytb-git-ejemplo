import React from 'react'
import Contador from './components/Contador' /* Aca en js no es necesario especificar q es .js */
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import Ejemplo1 from './components/Ejemplo1';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';
function App() {

  const sujeto = {
    nombre: 'Juanito',
    urlImagen: 'https://via.placeholder.com/100',
    texto: 'Lorem ipsops raa'
  }
  return (
    <div className="container mt-5">
      {/* <h1>Hola mundo React</h1> */}
      {/* <Contador></Contador>
      <Jsx/>
      <Lista/> */}
      {/* <Formulario></Formulario> */}
      {/* <FormHook/> */}
      {/* <Ejemplo1/> */}
      {/* aca entre llavecitas para pasar numero sino seria string */}
      {/* <Saludo persona="Juanito" edad={25}/> */}
      {/* <Saludo persona="Juanito"/>
      <Saludo persona="Miguelito"/>
      <Saludo persona="Carlita"/> */}
      <Comentario sujeto={sujeto}/>
      <Comentario sujeto={sujeto}/>
      <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;
