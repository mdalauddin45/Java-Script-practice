//1 variable
var myName = 'khan';
// math operation : +,-,*,/
// shorthand: +=, -=, *=, /=
// ++, --

//2 array
var friends = ['abul', 'babul', 'cabul', 'dabul', 'hero'];
var newFriend = friends[3];//  result: dabul
friends[3] = 'alauddin'; // result: [ 'abul', 'babul', 'cabul', 'alauddin', 'hero' ]
// console.log(friends);


//3. conditionals

// >, <, >=,<=, ==, ===, !=, !==

/*
if (friends.length < 2) {
    console.log('forkir to kono friend nai')
}
else if (friends.length > 3) {
    console.log('ajk amr mon valo nai')
}
else {
    console.log('hello')
}


//4 loop 
var number = 0;
while (number <= 6) {
    console.log(number);
    number++;
}
*/
for (var i = 0; i <= 6; i++) {
    console.log(i);
}

//5. function
// function likty hy parametter a 
function isMoonUp(time) {
    if (time > 7) {
        return true;
    }
}

//6. object

var cse = {
    stusdent: 80,
    room: 2,
    teacher: 30,
    books: 10,
    cr: 'alauddin'
}