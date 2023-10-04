import { useState, useSubtract, useReset } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    // console.log( event )
    // setCounter( counter + 1);
    setCounter( ( c ) => c + 1 );
  }

  const handleSubtract = () => {
    setCounter( ( c ) => {
      if (c === value ) {
        console.log( 'The value cannot decrease because it is equal to the initial value ' )
      } else return c - 1 ;
    });
  }

  const handleReset = () => {
    setCounter( value );
  }
  
  return (
          <>
            <h1>Mi novia es la mujer mas hermosa</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>      +1     </button>
            <button onClick={ handleSubtract }> -1     </button>
            <button onClick={ handleReset }>    Reset  </button>
          </>
      );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 10000
}
