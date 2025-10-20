
// Template String


const name = 'Zoro'
const lastName = 'Rononoa'
const style = '!x!'

function getName( lastName, name, style ) {
    return `${ lastName } ${ name } ${style}`;
}

console.log ( `This is my name: ${ getName(lastName, name, style) }`);