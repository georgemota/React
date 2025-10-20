
import heroes, { owners } from '../data/heroes'

// console.log ( heroes );


export const getHeroById = (id) => heroes.find(( heroe ) => heroe.id === id );

// console.log( getHeroById(1));


const getHeroesByOwner = ( owner ) => heroes.filter(( heroe ) => heroe.owner === owner );

// console.log( getHeroesByOwner('DC'));
