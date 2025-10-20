

const personajes = ['Zoro', 'Luffy', 'Sanji'];
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );



//Tarea

const useState = ( valor ) => {
    return [ valor, () =>{ console.log('!!!') } ];
}

const arr = useState('Rononoa Zoro');

const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();