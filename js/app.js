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
