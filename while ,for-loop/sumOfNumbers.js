// 1 to 7 sum
/*
let sum = 0;
for (let i = 1; i <= 7; i++) {
    sum = sum + i;
    console.log(i, sum);
}
*/
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
sumOfNumbers(7);