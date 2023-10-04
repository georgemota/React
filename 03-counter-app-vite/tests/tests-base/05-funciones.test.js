import { getUser, getUsuarioActivo } from '../../src/tests-base/05-funciones'

describe('Unity test in src/tests-base/05-funciones', () => { 
    
    test('getUser is a function that must return an object', () => { 

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const message = getUser();
        expect( userTest ).toEqual(message);     
    })
 })

 describe('getUsuarioActivo must return an object', () => { 

    const name = 'George';
    const user = getUsuarioActivo( name );
    expect( user ).toEqual({
        uid: 'ABC567',
        username: name
    });   
  })