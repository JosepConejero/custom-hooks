import { useState } from "react";
import PropTypes from "prop-types";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  /* const incrementCounter = (evento) => {
    console.log(evento); // se envía el event por defecto como primer argumento de la función al hacer click en el botón
    setCounter(counter + 1);
  }; */
  const incrementCounter = (value = 1) => {
    setCounter((currentCounter) => currentCounter + value); // = 1 será el valor que adquirirá value si no le paso ningún valor, es decir, el valor por defecto
  };
  const resetCounter = () => {
    setCounter(initialValue);
  };
  const decrementCounter = (value = 1) => {
    //if (counter === initialValue) return; // el test falla aquí porque toma un counter sin actualizar
    setCounter((currentCounter) => currentCounter - value);
  };

  return { counter, incrementCounter, resetCounter, decrementCounter }; // será lo mismo que return {counter: counter};
};

useCounter.prototypes = {
  counter: PropTypes.number,
  incrementCounter: PropTypes.func,
  decrementCounter: PropTypes.func,
  resetCounter: PropTypes.func,
};
