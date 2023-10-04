import { getSaludo } from '../../src/tests-base/02-template-string'
describe('Unity test in src/tests-base/02-template-string', () => { 
    
    test('getSaludo is a function that must return "Hello George" ', () => { 

        const name = 'George';
        const message = getSaludo( name );
        expect( message ).toBe(`Hello ${ name }`);     
    })
 })