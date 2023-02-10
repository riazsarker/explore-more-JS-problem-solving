const phones =[
    {name: 'Sumsung', Camera:12,sotrage:'32gp', price:36000,color:'silver'},
    {name: 'Walton', Camera:10,sotrage:'16gp', price:20000,color:'grey'},
    {name: 'iPhone', Camera:12,sotrage:'32gp', price:30000,color:'red'},
    {name: 'Xioami', Camera:14,sotrage:'64gp', price:38000,color:'silver'},
    {name: 'POCO', Camera:12,sotrage:'16gp', price:22000,color:'silver'}
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest =phone;
        }


    }
    return cheapest

}

const mySelection = cheapestPhone(phones)
console.log(mySelection);