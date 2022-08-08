const country = 'Bangaldesh';
const age = 52;
const IsIndependent = true;
const student = { id: 312, class: 12, name: 'alauddin' }
const friend = [12, 3, 1, 432, 214, 34, 414, 36];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country); //string
console.log(typeof age); //number
console.log(typeof IsIndependent); //boolean
console.log(typeof student); //object
console.log(Array.isArray(friend)); //true
console.log(typeof add); //function


console.log(friend.includes(12));
console.log(friend.includes(3));

if (friend.indexOf(12) !== -1) {

}
const newFriends = [21, 43, 65, 76, 10];
const allFriends = newFriends.concat(friend);
console.log(allFriends);