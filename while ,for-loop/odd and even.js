
// even and odd
// even = true
// odd = false


// console.log(4 % 2);
// console.log(86 % 2);
// console.log(40 % 2);
// console.log(34 % 2);
// console.log(74 % 2);
// console.log(94 % 2);
// console.log(39 % 2);
// console.log(69 % 2);
// console.log(45 % 2);
// console.log(39 % 2);
// console.log(73 % 2);
// console.log(91 % 2);

function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumber = isEven(303);
console.log(myNumber);
const herNumber = isEven(1280);
console.log(herNumber);




