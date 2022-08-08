const phones = [
    {
        name: 'sumsung', camera: 12, Storage: '32gb', price: 36000, color: 'silver'
    },
    {
        name: 'vivo', camera: 12, Storage: '32gb', price: 32000, color: 'silver'
    },
    {
        name: 'lenavo', camera: 12, Storage: '32gb', price: 40000, color: 'silver'
    },
    {
        name: 'oppo', camera: 12, Storage: '32gb', price: 56000, color: 'silver'
    },
    {
        name: 'iphon', camera: 12, Storage: '32gb', price: 100000, color: 'silver'
    },
    {
        name: 'walton', camera: 12, Storage: '32gb', price: 22000, color: 'silver'
    },
    {
        name: 'mi', camera: 12, Storage: '32gb', price: 54000, color: 'silver'
    },
    {
        name: 'Nokia', camera: 12, Storage: '32gb', price: 15000, color: 'silver'
    },
    {
        name: 'HTC', camera: 12, Storage: '32gb', price: 2000, color: 'silver'
    }
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);