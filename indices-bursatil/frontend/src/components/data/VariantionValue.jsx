import { faChevronDown, faChevronUp, faMinus   } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const StringEvaluator = ({ inputString }) => {
    const evaluateString = () => {
        // Verificar si 'inputString' está definido y es una cadena
        if (typeof inputString === 'string') {
            if (inputString.startsWith('+')) {
                return (
                    <>
                        {inputString}
                        <FontAwesomeIcon icon={faChevronUp} style={{ color: 'green', margin: '0 10px' }} />
                    </>
                );
            } else if (inputString.startsWith('-')) {
                return (
                    <>
                        {inputString}
                        <FontAwesomeIcon icon={faChevronDown } style={{ color: 'red', margin: '0 10px' }} />
                    </>
                );
            } else {
                return (
                    <>
                        {inputString}
                        <FontAwesomeIcon icon={ faMinus } style={{ color: '#5f5f5f', margin: '0 10px' }} />
                    </>
                );
            } 
        }
        // Devolver un valor predeterminado si 'inputString' no es válido
        return <>{inputString || "Valor no disponible"}</>;
    };

    return <>{evaluateString()}</>;
};

export default StringEvaluator;
