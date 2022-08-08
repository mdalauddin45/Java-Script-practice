// [ 45,65,35,98]

const shoppingCart = [
    { name: 'shoes', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 7 },
    { name: 'belt', price: 500, quantity: 10 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = products[i];
        const totalProduct = product.price * product.quantity;
        sum = sum + totalProduct;
        // console.log(product); // this value is undefined
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);