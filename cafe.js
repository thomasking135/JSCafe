// -- JAVASCRIPT CAFE! -- //


// -- PRODUCTS -- //
let products = {
    whiteCoffee: {
        stock: 4,
        price: 4
    },
    blackCoffee: {
        stock: 7,
        price: 3.5
    },
    muffin: {
        stock: 5,
        price: 8.5
    },
    eggs: {
        stock: 1,
        price: 12.50
    }
}

function displayProducts () {
    document.getElementById('whiteCoffee').innerHTML = 'White Coffee: ' + products.whiteCoffee.stock
    document.getElementById('blackCoffee').innerHTML = 'Black Coffee: ' + products.blackCoffee.stock
    document.getElementById('muffin').innerHTML = 'Muffin: ' + products.muffin.stock
    document.getElementById('eggs').innerHTML = 'Eggs: ' + products.eggs.stock
}

displayProducts()






// -- CUSTOMERS -- //
let customer = {
    order: []
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder () {
    // get a random size for the order in a range, 1-5
    let orderSize = getRandomInt(minOrderSize, maxOrderSize)

    // make a new array of the things they're ordering
    let newOrder = []
    let productNames = Object.keys(products)

    for (let i = 0; i <= orderSize; i++) {
        let productIndex = getRandomInt(0, productNames.length - 1)
        let productName = productNames[productIndex]
        newOrder.push(productName)
    }

    //assign the new order to the customer object 
    customer.order = newOrder

    //display the customer order
    //create the function
    displayCustomerOrder()
}

function displayCustomerOrder () {
    document.getElementById('customerOrder').innerHTML = 'Customer order: ' + customer.order
}

// Generating the button 
document.getElementById('customerButton').onclick = generateCustomerOrder







// -- TRANSACTIONS -- //
let cash = 0

function displayCash () {
    document.getElementById('cash').innerHTML = 'Cash: ' + cash
}

displayCash()

//logic to process the sale
function fillOrder () {
    //variable to keep track of our sale total
    let saleTotal = 0

    //loop through the customer order array
    //if we have their product in stock, sell it to them, and keep track of the sale
    //if we don't have it, alert we're out of this product
    for (let i = 0; i < customer.order.length; i++) {
        let productName = customer.order[i]
        if (products[productName].stock > 0) {
            products[productName].stock--
            saleTotal += products[productName].price
        } else {
            alert("I'm sorry, we're out of " + productName)
        }
    }

    //add the sale total to our cash
    cash += saleTotal

    // clear customer order & display new
    customer.order = []
    displayProducts()
    displayCash()
    displayCustomerOrder()
}

document.getElementById('fillOrder').onclick = fillOrder








//Util to get a random no for the function generateCustomerOrder
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}