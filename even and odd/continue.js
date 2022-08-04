var numbers = [45, 67, 87, 98, 67, 54, 243, 79, 43, 54,];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
        // break
    }
    console.log(number);
}