
import { usContext } from '../../src/tests-base/06-deses-obj'

describe('Unity test in src/tests-base/06-deses-obj', () => { 
    test('usContext is a function that must return an object', () => {  
    
        const clave = 'Sanka The Boss';
        const edad = 24;
        const user = usContext( {
            clave: clave, 
            edad: edad});
        expect( user ).toEqual({ 
            nombreClave: clave,
            anios: edad,
            latlng:
            {
                lat: 14.1232,
                lng: -12.3232        
            } 
        }

    );   
})
  });