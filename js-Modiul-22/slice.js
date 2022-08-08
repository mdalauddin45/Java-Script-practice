const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.slice(2, 4);//[ 32, 22 ]
const partial1 = friends.splice(2, 4);//[ 32, 22, 44, 62 ]

console.log(partial);
console.log(partial1);