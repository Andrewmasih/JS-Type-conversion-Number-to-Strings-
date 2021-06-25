/* use the 'toString()' method on a numberwith an argument in the parentheses that specifys the numeral system and not just decimal point number system (base -10) or base-8(octal) base-16 (hexadecimal), base-2 (binary)  

*/

let a = 12;
let b = 13;
let c = 22;
let d = 15;


let num1 = a.toString();
//binary system
let num2 = b.toString(2);
//octal system
let num3 = c.toString(8);
//hexadecimal system
let num4 = d.toString(16);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(num3));
console.log(typeof(num4));