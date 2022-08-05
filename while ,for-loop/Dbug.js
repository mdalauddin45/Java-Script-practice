function getFactorial(number) {
    let factorial = 1;
    for (let i = 0; i <= 7; i++) {
        factorial = factorial * 1;
        console.log(i, factorial);
    }
    return factorial;
}

const factorial = getFactorial(6);
const fact = getFactorial(number);
console.log('factorial is:', factorial);