
// const saludar = function ( name ) {
//     return `Hi, ${name} `
// }


const saludar = ( name ) => `Hi, ${name}`;

// console.log( saludar( 'Rononoa Zoro' ));

const getUser = () => ({

    uid: 'ABC123',
    username: 'Motafoka',
}) 

const user = getUser();
// console.log(user);

function getActiveUser( name ) {
    return{
        uid: 'Senior Officer of Straw Hat Pirates',
        username: name
    }
}

const activeUser = getActiveUser( 'Rononoa Zoro');
console.log( activeUser );

//Tarea
// 1. Transformen a una funcion de flechas
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getActiveUserHomeWork = ( name ) => ( {
    
    uid: 'Senior Officer of Straw Hat Pirates',
    username: name
} )

const activeUserHomeWork = getActiveUserHomeWork( 'Rononoa Zoro');
console.log( activeUserHomeWork );




