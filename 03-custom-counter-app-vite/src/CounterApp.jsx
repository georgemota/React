import PropTypes from 'prop-types';
import { useState } from 'react';

// const handleAdd = ( event ) => { console.log(event) };

//Functional component que renderiza un componente que imprimer un h1, un h2 y varios botones alimentadas algunas etiquetas con propiedades recibidas del componente padre.
export const CounterApp = ({ value }) => {

    console.log('render');

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => setCounter( counter + 1 );

    const handleSub = () => setCounter( counter - 1 );

    const handleReset = () => setCounter( value );

    return (
      <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSub}> -1 </button>
      <button onClick={ handleReset }> Reset </button>
      </>
    )
  }

CounterApp.propTypes = { value: PropTypes.number.isRequired }
 