function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
const number = 6;
const fact = factorial(number);
console.log('factorial Number is:', number, fact);