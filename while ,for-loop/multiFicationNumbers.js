// 7!=7*6*5*4*3*2*1
// n!=n*(n-1)!
// 1 to 7 all num gun
function multipicationOfNumber(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}
multipicationOfNumber(7);