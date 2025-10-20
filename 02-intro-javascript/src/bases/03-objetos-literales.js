

const person = {
    name: 'Zoro',
    lastname: 'Rononoa',
    age: 45,
    path: {
        ciudadcity: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

const person2 = { ... person};
person2.name = 'TuPai';

console.log( person );
console.log ( person2 );
 