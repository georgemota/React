import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp.js', () => { test('Debe retornar un heroe por ID', () => { 
    
        const id = 1;
        const hero = getHeroeById( id );
        console.log( hero );
 }) })
