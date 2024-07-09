const container = document.querySelector('.container');
const idNumber = document.querySelector('.idNumber');
const productDetails = document.querySelector('.productDetails')

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data => createProducts(data)).catch(err => console.log(err))
    

function createProducts(data){
    data.forEach(function(product) {
        container.innerHTML += `
             <div class="card" onclick="showProductId(${product.id})">
                <img src="${product.image}" width="150px">
   <p class="descriptions">${product.description}</p>
   <p>Price: ${product.price}</p>
   <p>Rating: ${product.category}</p>
                </div>
        `
    })
}

function showProductId(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(function(data) {
                productDetails.innerHTML = `
                <div class="selected">
                 <h1>ID: ${data.id}</h1>
                 <p>title: ${data.title}</p> 
                </div>
                
                `
            }).catch(err => console.log(err));
            
}   