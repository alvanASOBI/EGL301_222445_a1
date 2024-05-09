let cart = [
    {
        item: 'Cat',
        qty: 10,
    }
]

let list = [
    {
        item: 'Cat',
        price: 5,
    },
    {
        item: 'Dog',
        price: 10,
    },
    {
        item: 'Egg',
        price: 3.5,
    },
    {
        item: 'Milk',
        price: 5,
    }
]

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
    // Check if item exists in the cart
    let duplicateItem = cart.find(x => x.item === item);

    if (duplicateItem) {
        // Item exists, update qty
        duplicateItem.qty += qty;
        console.log(`Updated quantity of ${item} in cart: ${duplicateItem.qty}...\n`);
    } else {
        // Item doesnt exists, add to cart
        cart.push({ item: item, qty: qty });
        console.log(`Added ${qty} ${item}(s) to cart...\n`);
    }
}

// REMOVE ITEM IN THE CART
function removeItem(item) {
    // Find the index of the item in the cart
    let index = cart.findIndex(x => x.item === item);
    if (index !== -1) {
        // Item exists, remove it
        cart.splice(index, 1);
        console.log(`Removed ${item} from the cart...\n`);
    } else {
        // Item doesn't exist, throw an error
        console.log(`Invalid, ${item}(s) not found...\n`);
    }
}

// COMPILES THE QTY OF ITEMS IN THE CART
function totalItemsInCart() {
    let cartInfo = '';
    let total = 0;
    cart.forEach(i => { total += i.qty })
    cartInfo += `There are ${total} items in the cart...\n`;

    return cartInfo;
}

// TOTAL PRICE OF CART
function totalPriceOfCart() {
    let totalPrice = 0;
    cart.forEach(cartItem => {
        let listItem = list.find(listItem => listItem.item === cartItem.item);// Find the corresponding item in the list
        if (listItem) {
            totalPrice += listItem.price * cartItem.qty; // Calculate subtotal for each item
        }
    });
    return `[Total price of cart: \$${totalPrice}]\n`;
}

console.log(showList());// This will display name and pricing in the lists

console.log(showCart());// This will display name and qty in the cart
console.log(totalItemsInCart());// This will display the compiled qty in the cart

addItem('Cat', 5); // This will update the qty of 'Cat' to 15
addItem('Dog', 20); // This will add 'Dog' and qty of 20

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