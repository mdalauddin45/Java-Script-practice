function factorial(number) {
    let num = 1;
    let result = 1;
    while (num <= 7) {
        result = result * num;
        num++;
    }
    return result;
}
const number = 6;
const fact = factorial(number);
console.log('factorial Number is:', number, fact);