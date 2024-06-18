let country="Ukraine";
let city= "Mykolaiv";
let address= "Karpenko str";
let fullAddress=`${country}, ${city}, ${address}`;
console.log (fullAddress);
let length=8;
let width=6;
let area =length*width;
console.log (area);
let result = 17 ** 6;
console.log (result);
let random = Math.floor (Math.random()*70);
console.log (random);
let number = 24;
if (number % 2 === 0) {
    console.log ('even')
} else if (number % 2 != 0 ) {
console.log ('not even')
}
let text = 'I spent 10 $ at the cinema today';
text = text.replace ('$', '€');
console.log (text);
let monthNumber = 12;
switch (monthNumber) {
    case 1 : console.log ("January");
    break;
    case 2 : console.log ("February");
    break;
    case 3 : console.log ("March");
    break;
    case 4 : console.log ("April");
    break;
    case 5 : console.log ("May");
    break;
    case 6 : console.log ("June");
    break;
    case 7 : console.log ("July");
    break;
    case 8 : console.log ("August");
    break;
    case 9 : console.log ("September");
    break;
    case 10 : console.log ("October");
    break;
    case 11 : console.log ("November");
    break;
    case 12: console.log ("December");
    break;
    default :
    console.log ('Wrong month number');
    }
let password = ' nbhjjkhlkhigehioh ';
password = password.trim ()
console.log ( password );
if (password.length > 10 && password.indexOf ('$' , '#') === -1 ) {
    console.log ('You have strong password')
} 
else {
    console.error ('Please change your password');
}
let a = 5;
let b = 7;
if (typeof a ==='number' && typeof b === 'number') {
    let sum = a + b
    console.log (sum)
} else {
    console.warn ('Sum of those items can’t be counted')
}

// module 7//

//task 1 //
const arr = [90, 124, 55, 9213, 159, 225, 1543, 1545];
const devideArr = [];
for ( let i = 0; i <= arr.length; i++) {
    if ( arr [i] % 3 === 0) {
       devideArr.push (arr [i]);
    }
}
console.log (devideArr);

//task 2//

const shoppingCart = [
    {
     name: 'Cheese',
     count: 4,
     pricePerItem: 100
     },
    {
    name: 'Water',
    count: 5,
    pricePerItem: 23
    },
     {
     name: 'Banana',
     count: 8,
     pricePerItem: 55
     },
     {
     name: 'Choccolate',
     count: 2,
     pricePerItem: 115
     }
        ];

    let finalPrice =0;
    for (let i=0; i <shoppingCart.length; i++) {
        finalPrice += shoppingCart [i].pricePerItem;
    }
    console.log (finalPrice);

//task 3 //

const arr = [
    [100, 1230, 1293123, 1236478, 9816],
    [9932, 2123123, 1293123, 1203123, 1239],
    [12391, 1235, 1123994, 1203123, 5543243],
    [1203, 92346, 288, 12309, 5543243],
    [94324, 8236, 123, 86231, 8455322],
    [2340123, 172, 123, 321, 38421340],
    ]
    let sum = 0;
    for (let i=0; i< arr.length; i++) {
        let row = arr[i];
        console.log (row);
        for (let p= 0; p< row.length; p++) {
            sum += row [p];
        }
    }
    console.log (sum);

    //task 4 //
    const arr = ["php", "php", "css", "css","script", "script", "html", "html", "java", "java", "go", "Python", "Python"];
    const uniqueArray = []
    for ( let i = 0; i < arr.length; i++) {
        if (! uniqueArray.includes (arr [i])) {
            uniqueArray.push (arr [i]);
        }
    }
    console.log (uniqueArray);

    // task 5//
    const arr = ['Jane','Bob','Bob','Luci','Jane','Bob','Peter','Felix','Felix','Bob','Andrew'];
    const result1 = {};
    for (let i = 0; i < arr.length; i ++) {
        const element = arr[i];
        if (result1[element]) {
            result1[element] +=1;
        } else {
            result1 [element] =1;
        }
    }
    console.log (result1);
    