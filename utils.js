//array methods

const cars = [
    {type: 'red', version: 1.0},
    {type: 'red', version: 1.6},
    {type: 'blue', version: 2.0},
    {type: 'green', version: 3.0}
];

// returns first match

cars.find(function (car) {
    return car.color === 'red';
});

cars.find(c => c.type === 'red')

//  {type: 'red', version: 1.0}

cars.findIndex(c => c.type === 'green')

//es5
cars.filter(c => c.type === 'green')
cars.map(c => c.version * 2)
cars.reduce((types = [], car) => types.push(car.type))


//property shorthand value

const names = ['Ram', 'Shyam', 'Hari'];
const addresses = ['Pokhara', 'Biratnagar', 'Baglung'];

let details = {"names": names, "addresses": addresses};
details = {names, addresses};

//Destructuring
let product = {
    'name': 'Wai Wai',
    'price': 15,
    'weight': '50gms',
    'manufactuing_company': 'Chaudary Group',
    'address': 'Sanepa'
};
const {name, price} = product;

let anotherProduct = {
    productName: 'Shoes',
    price: 24,
    stock: {
        store: 4,
        online: 100
    }
};
const {stock:{store}} = anotherProduct;


//spread operator, works both with array and object

const cars = {
    ford: 'american',
    ferrari: 'italian',
    audi: 'german',
    toyota: 'japanese',
    mustang: 'nepali'
};

const otherCars = {
    tata: 'india',
    hyundai: 'korea'
}


const allCars = {...cars, ...otherCars, ford:'US'};

const topParts = ['eye', 'ears', 'nose']
const bottomParts = ['leg', 'knee','toe']

const bodyParts = [...topParts, ...bottomParts]
