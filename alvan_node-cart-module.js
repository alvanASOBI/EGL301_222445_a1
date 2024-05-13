let cart = [{item: 'Cat',qty: 10,}]

let list = [
    {item: 'Cat',price: 5,},
    {item: 'Dog',price: 10,},
    {item: 'Egg',price: 3.5,},
    {item: 'Milk',price: 5,}
]

// VALIDATES INPUTS, keeps the code reusable and encourages clean coding
function validateInput(qty) {
    if (isNaN(qty) || qty <= 0) {
        throw new Error('Invalid quantity format. Please enter a valid number greater than 0.');
    }
}

// DISPLAY ALL THE ITEMS AND PRICING
function showList() {
    let listInfo = '\n========================\nLIST OF ITEMS\n========================\n';
    let index = 0
    list.forEach(item => {
        index += 1
        listInfo += `Item${index}: ${item.item}, Price: \$${item.price}\n========================\n`;
    });
    return listInfo;
}

// DISPLAY ALL THE ITEMS AND ITS DETAILS
function showCart() {
    let cartInfo = '\n============================\nTHIS IS YOUR CART\n============================\n';
    let index = 0
    cart.forEach(item => {
        index += 1
        cartInfo += `Item${index}: ${item.item}, Quantity: ${item.qty}\n============================\n`;
    });
    return cartInfo + totalPriceOfCart();
}

// ADD ITEM TO THE CART
function addItem(item, qty) {
    try {
        validateInput(qty);
        let listItem = list.find((listItem) => listItem.item === item);
        if (!listItem) {
            throw new Error(`${item} not found in the list. Cannot add to cart.`);
        }

        let cartItem = cart.find((cartItem) => cartItem.item === item);
        if (cartItem) {
            cartItem.qty += qty;
            console.log(`Updated quantity of ${item} in cart: ${cartItem.qty}...\n`);
        } else {
            cart.push({ item: item, qty: qty });
            console.log(`Added ${qty} ${item}(s) to cart...\n`);
        }
    } catch (error) {
        console.error(error.message);
        return; // Stop further execution on error
    }
}

// REMOVE ITEM IN THE CART
function removeItem(item) {
    let index = cart.findIndex((x) => x.item === item);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`Removed ${item} from the cart...\n`);
    } else {
        console.error(`Invalid item: ${item} not found in the cart.\n`);
        return; // Stop further execution on error
    }
}

// TOTAL PRICE OF CART - Optimized version
function totalPriceOfCart() {
    let itemMap = new Map();
    list.forEach((item) => itemMap.set(item.item, item.price));

    let totalPrice = cart.reduce((acc, curr) => {
        let price = itemMap.get(curr.item);
        return acc + (price ? price * curr.qty : 0);
    }, 0);

    return `[Total price of cart: \$${totalPrice}]\n`;
}

// COMPILES THE QTY OF ITEMS IN THE CART
function totalItemsInCart() {
    let total = cart.reduce((acc, curr) => acc + curr.qty, 0);
    return `There are ${total} items in the cart...\n`;
}

// TOTAL PRICE OF CART
function totalPriceOfCart() {
    let totalPrice = cart.reduce((acc, curr) => {
        let listItem = list.find((listItem) => listItem.item === curr.item);
        return acc + (listItem ? listItem.price * curr.qty : 0);
    }, 0);
    return `[Total price of cart: \$${totalPrice}]\n`;
}

console.log(showList());// This will display name and pricing in the lists

console.log(showCart());// This will display name and qty in the cart
console.log(totalItemsInCart());// This will display the compiled qty in the cart

addItem('Cat', 5); // This will update the qty of 'Cat' to 15
addItem('Dog', 20); // This will add 'Dog' and qty of 20
addItem('Dog', -1); // This will throw an error for invalid input type
addItem('Dog', 'i'); // This will throw an error for invalid input type

console.log(showCart());
console.log(totalItemsInCart());

removeItem('Cat'); // This will remove 'Cat'
removeItem('Milk'); // This will throw an error

console.log(showCart());
console.log(totalItemsInCart());

module.exports = {
    showList,
    showCart,
    addItem,
    removeItem,
    totalItemsInCart,
    totalPriceOfCart
}