/*
for (var i = 0; i <= 20; i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}
*/
/*
var roastGiven = 0;
while (roastGiven < 10) {
    console.log('Roast Den, gift item anci');
    // console.log(roastGiven);
    roastGiven++;
    if (roastGiven > 4) {
        break;
    }
}
*/


var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item);
    if (item == 'pen') {
        break;
    }
}