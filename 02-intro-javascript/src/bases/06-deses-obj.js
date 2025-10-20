

const person = {
    name: 'Zoro',
    age: 23,
    style: 'Swordman',
    title: 'Senior Officer of Straw Hat Pirates'
};

const useContext = ({ name, age, style = 'Style 0'}) => {
    // console.log( name, age, style);

    return {
        nombreClave: style,
        anios: age,
        latlng: {
            lat: 1465151651,
            lng: 1323333423
        }
    }
}




const { nombreClave, anios, latlng: { lat, lng} } = useContext( person );

console.log( nombreClave, anios, lat, lng );


