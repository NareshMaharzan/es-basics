//String.prototype.startsWith


const about = "My name is Naresh Maharjan";

//es5

console.log(about.indexOf('My') === 0) //true
console.log(about.indexOf('Mi') === 0) //false

//es6

console.log(about.startsWith('My'))
console.log(about.startsWith('name',3))


//String.prototype.endsWith
console.log(about.endsWith('Maharjan'))

//String.prototype.includes

console.log(about.includes('Naresh'))

//String.prototype.repeat

console.log('naresh '.repeat(3));


//String template literals
//Template literals allow us to have multi line strings and use expressions & variables within a string

const world = 'World';
let helloWorld = `Hello ${world} and today is ${new Date}`;
console.log(helloWorld)
