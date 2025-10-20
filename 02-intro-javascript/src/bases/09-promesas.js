import { getHeroById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) =>{

//     setTimeout( () => {
//         const heroe = getHeroById(4);
//         resolve( heroe );
//         // reject( 'No se pudo encontrar el heroe')
//     }, 1000 )
// });

// promesa.then( ( heroe ) => {
    
//     console.log(heroe);
// })
// .catch( err => console.warn( err) );



const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) =>{

        setTimeout( () => {
            const heroe = getHeroById( id );
            if ( heroe ) {
                resolve( heroe ) }
            else {
                reject( 'No se pudo encontrar el heroe')};
            // reject( 'No se pudo encontrar el heroe')
        }, 1000 )
    });
    
}

getHeroeByIdAsync(4)
.then( console.log )
.catch( console.warn );