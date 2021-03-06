import './App.css';
import Boton from './Button/Boton';
import Contador from './Contador/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

const onClick = () => {
  setNumClics(numClics + 1)
}

const reiniciarContador = () => {
  setNumClics(0)
}

const restar = () => {
  if ( numClics > 0 ) {
    setNumClics(numClics - 1)
  }
}

  return (

    <div className="App">

      <h1>Hello World</h1>

      <Boton 
      text= 'Sumar'
      cssClass={true}
      onClick={onClick}/>

      <Boton 
      text= 'Restar'
      cssClass={true}
      onClick={restar}/>

      <Boton 
      text= 'Reiniciar'
      cssClass={false}
      onClick={reiniciarContador}/>

      <Contador 
      numClics={numClics}/>

    </div>

  );
}

export default App;