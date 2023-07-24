let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
     body.classList.add('active');
})

 closeShopping.addEventListener('click', ()=>{
     body.classList.remove('active');
})

let products=[
    {
        id: 1,
         name: 'PRODUCT NAME 1',
         image: 'book1.jpg',
         price: 120000
    },

    {
        id: 2,
         name: 'PRODUCT NAME 2',
         image: 'book2.jpg',
         price: 120000
    },
    {
        id: 3,
         name: 'PRODUCT NAME 3',
         image: 'book3.jpg',
         price: 120000
    },
    {
        id: 4,
         name: 'PRODUCT NAME 4',
         image: 'book4.jpg',
         price: 120000
    },
    {
        id: 5,
         name: 'PRODUCT NAME 5',
         image: 'book5.jpg',
         price: 120000
    },
    {
        id: 6,
         name: 'PRODUCT NAME 6',
         image: 'book6.jpg',
         price: 120000
    },

    {
        id: 7,
         name: 'PRODUCT NAME 6',
         image: 'book7.jpg',
         price: 120000
    },

    {
        id: 8,
         name: 'PRODUCT NAME 6',
         image: 'book8.jpg',
         price: 120000
    },

    {
        id: 9,
         name: 'PRODUCT NAME 6',
         image: 'book9.jpg',
         price: 120000
    },

    {
        id: 10,
         name: 'PRODUCT NAME 6',
         image: 'book10.jpg',
         price: 120000
    },

    {
        id: 11,
         name: 'PRODUCT NAME 6',
         image: 'book11.jpg',
         price: 120000
    },

    {
        id: 12,
         name: 'PRODUCT NAME 6',
         image: 'book12.jpg',
         price: 120000
    },


         
 ];

 let listCards = [];
 function initApp(){
    products.forEach((value,key)=>{
        let newDiv =document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button class ="btn btn-primary" onClick="addToCard(${key})">Add to Card</button>
        `;

        list.appendChild(newDiv);
    })
 }

 initApp(); 

 function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity =1;
    }
    reloadCard();
 }

 function reloadCard(){
    listCard.innerHTML = '';
    let count =0;
    let totalPrice =0;
    listCards.forEach((value,key)=>{
        totalPrice =totalPrice + value.price;
        count = count + value.quantity;

        if (value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            </div>
                <button onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            
            `;
            listCard.appendChild(newDiv);
        }
    })

    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerText = count;
 }

 function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];

    }else{
        listCards[key].quantity = quantity;
        listCards[key].price =quantity*products[key].price;
    }
    reloadCard();
 }