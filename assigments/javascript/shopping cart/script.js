let cart = [
    {
        title: 'Milk',
        category: 'Food',
        quantity: 3,
        price: 1.65
    },
    {
        title: 'Bread',
        category: 'Food',
        quantity: 2,
        price: 2.25
    },
    {
        title: 'Smartphone',
        category: 'Electronics',
        quantity: 1,
        price: 699.99
    },
    {
        title: 'Running Shoes',
        category: 'Fashion',
        quantity: 1,
        price: 49.99
    },
    {
        title: 'Book: The Hitchhiker\'s Guide to the Galaxy',
        category: 'Books',
        quantity: 1,
        price: 12.99
    },
    {
        title: 'Coffee Maker',
        category: 'Appliances',
        quantity: 1,
        price: 34.99
    },
    {
        title: 'Gaming Laptop',
        category: 'Electronics',
        quantity: 1,
        price: 1299.99
    },
    {
        title: 'Sunglasses',
        category: 'Fashion',
        quantity: 2,
        price: 19.99
    }
];

const products = document.querySelector('.products');
const totalPrice = document.querySelector('.totalPrice');

console.log(totalPrice);

for(let i=0; i<cart.length; i++){
    products.innerHTML += `
     <div class="product">
                <h1>Title: ${cart[i].title}</h1>
                <h1>Category: ${cart[i].category}</h1>
                <h1>Quantity:  ${cart[i].quantity}</h1>
                <h1>Price:  ${cart[i].price}</h1>
            </div>
    `
};

totalPrice.textContent = cart.reduce((acc,product) => acc + (product.quantity * product.price),0)




