/*
function getSumOfArray(numbers) {
    // console.log(numbers);
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}
getSumOfArray(myNumbers);


function getOddNumbersOfArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
        }
    }
}


const myNumbers = [12, 31, 43, 53, 91, 20];
getOddNumbersOfArray(myNumbers);
*/

function getOddNumbersOfArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const herNumbers = [21, 23, 12, 4, 3, 54, 6, 567, 35, 13];
getOddNumbersOfArray(herNumbers);
