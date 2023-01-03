"use strict";

if (2) {
    console.log('OK');
} else {
    console.log('not ok');
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok')
// }

// (num === 50) ? console.log('Ok') : console.log('Error');
const num = 50;
switch (num) {
    case 49:
        console.log('Not');
        break;
    case 100:
        console.log('Not');
        break;
    case 50: 
        console.log('Правда');
        break;
    default: 
        console.log('Не в этот раз');
        break;
}
