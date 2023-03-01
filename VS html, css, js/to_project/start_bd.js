'use strict'

let products = [{
        carname: 'bmw',
        carprice: 5500,
        carseries: '3',
        carmodel: 'e46',
        carengine: '2.5 i',
        cardescription: 'Б/У из америки',
    },
    {
        carname: 'bmw',
        carprice: 6000,
        carseries: '5',
        carmodel: 'e39',
        carengine: '2.5 tdi',
        cardescription: 'new',
    },
    {
        carname: 'bmw',
        carprice: 7500,
        carseries: '7',
        carmodel: 'e38',
        carengine: '4.4 i',
        cardescription: 'garage keeping',
    }
];
let carnames = [];
let carprices = [];
let carserie = [];
let carmodels = [];
let carengines = [];
let cardescriptions = [];
carnames = products.map(item => item.carname);
carprices = products.map(item => item.carprice);
carserie = products.map(item => item.carseries);
carmodels = products.map(item => item.carmodel);
carengines = products.map(item => item.carengine);
cardescriptions = products.map(item => item.cardescription);

console.log(cardescriptions);
console.log(carengines);
console.log(carmodels);
console.log(carnames);
console.log(carprices);
console.log(carserie);