const names = ['abul', 'babul', 'cabul', 'abul', 'dabul', 'cabul', 'babul', 'ebul', 'abul', 'babul', 'gabul', 'abul', 'cabul', 'fabul', 'babul', 'cabul',];
function removeDuplicate(names) {
    let uniqe = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqe.includes(name) == false) {
            uniqe.push(name);
        }
    }
    return uniqe;
}
const uniqNames = removeDuplicate(names);
console.log(uniqNames);