/** Cart module for managing a cart system @module cart */

// Define initial cart and list of items with prices
let cart = [{ item: 'Cat', qty: 10 }];
let list = [
{ item: 'Cat', price: 5 },
{ item: 'Dog', price: 10 },
{ item: 'Egg', price: 3.5 },
{ item: 'Milk', price: 5 }
];

/** Validates the input quantity.
@param {number} qty - The quantity to validate. 
@throws {Error} If the quantity is not a number or less than or equal to zero. */

// Function to validate input quantity
// Throws an error if quantity is not a number or less than or equal to zero
function validateInput(qty) {
    if (isNaN(qty) || qty <= 0) {
        throw new Error('Invalid quantity format. Please enter a valid number greater than 0.');
    }
}

/** Validates the item name.
@param {string} item - The item name to validate.
@throws {Error} If the item name is not a string or is an empty string. */

// Function to validate item name
// Throws an error if item name is not a string or is an empty string
function validateItemName(item) {
    if (typeof item !== 'string' || item.trim() === '') {
        throw new Error('Invalid item name format. Please enter a valid string.');
    }
}

/** Finds an item in the list.
@param {string} item - The item name to search for.
@returns {Object|undefined} The item if found, otherwise undefined. */

// Function to find an item in the list
// Returns the item if found, otherwise returns undefined
// This was suggested from ChatGPT 3.5
function findItemInList(item) {
    return list.find(listItem => listItem.item === item);
}

/** Displays the list of items and their prices.
@returns {string} A formatted string with all items and their prices. */

// Function to find an item in the cart
// Returns the item if found, otherwise returns undefined
// This was suggested from ChatGPT 3.5
function findItemInCart(item) {
    return cart.find(cartItem => cartItem.item === item);
}

/** Displays the list of items and their prices.
@returns {string} A formatted string with all items and their prices. */

// Function to display the list of items and their prices
// Returns a formatted string with all items and their prices
function displayList() {
    let listInfo = `\n========================\nLIST OF ITEMS\n========================\n`;
    list.forEach((item, index) => {
        listInfo += `Item${index + 1}: ${item.item}, Price: \$${item.price}\n========================\n`;
    });
    return listInfo;
}

/** Displays the items in the cart along with their quantities.
@returns {string} A formatted string with all cart items and their quantities. */

// Function to display the items in the cart along with their quantities
// Returns a formatted string with all cart items and their quantities
function displayCart() {
    let cartInfo = `\n============================\nTHIS IS YOUR CART\n============================\n`;
    cart.forEach((item, index) => {
        cartInfo += `Item${index + 1}: ${item.item}, Quantity: ${item.qty}\n============================\n`;
    });
    return cartInfo + totalPriceOfCart();
}

/** Adds an item with a specified quantity to the cart.
@param {string} item - The item name to add.
@param {number} qty - The quantity to add.
@throws {Error} If the item does not exist in the list or input is invalid. */

// Function to add an item with a specified quantity to the cart
// Validates the input and adds the item to the cart if it exists in the list
function addItemToCart(item, qty) {
    try {
        validateItemName(item);
        validateInput(qty);
        let listItem = findItemInList(item);
        if (!listItem) {
            throw new Error(`${item} not found in the list. Cannot add to cart.`);
        }

        let cartItem = findItemInCart(item);
        if (cartItem) {
            cartItem.qty += qty;
            console.log(`Updated quantity of ${item} in cart: ${cartItem.qty}...\n`);
        } else {
            cart.push({ item: item, qty: qty });
            console.log(`Added ${qty} ${item}(s) to cart...\n`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

/** Removes an item from the cart.
@param {string} item - The item name to remove.
@throws {Error} If the item does not exist in the cart or input is invalid */

// Function to remove an item from the cart
// Removes the item from the cart if it exists
function removeItemFromCart(item) {
    try {
        validateItemName(item);
        let index = cart.findIndex(cartItem => cartItem.item === item);
        if (index !== -1) {
            cart.splice(index, 1);
            console.log(`Removed ${item} from the cart...\n`);
        } else {
            throw new Error(`Invalid item: ${item} not found in the cart.`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

/** Updates the quantity of an item in the cart.
@param {string} item - The item name to update.
@param {number} qty - The new quantity to set.
@throws {Error} If the item does not exist in the cart or input is invalid. */

// Function to update the quantity of an item in the cart
// Updates the item's quantity if it exists in the cart
function updateItemQuantity(item, qty) {
    try {
        validateItemName(item);
        validateInput(qty);
        let cartItem = findItemInCart(item);
        if (!cartItem) {
            throw new Error(`${item} not found in the cart. Cannot update quantity.`);
        }
        cartItem.qty = qty;
        console.log(`Updated quantity of ${item} in cart to ${qty}...\n`);
    } catch (error) {
        console.error(error.message);
    }
}

/** Calculates the total price of items in the cart.
@returns {string} A formatted string with the total price of the cart. */

// Function to calculate the total price of items in the cart
// Returns a formatted string with the total price of the cart
function totalPriceOfCart() {
    let totalPrice = cart.reduce((acc, curr) => {
        let listItem = findItemInList(curr.item);
        return acc + (listItem ? listItem.price * curr.qty : 0);
    }, 0);
    return `[Total price of cart: \$${totalPrice}]\n`;
}

console.log(displayList());
console.log(displayCart());

// Test scenarios
addItemToCart('Cat', 5);
addItemToCart('Dog', 20);
addItemToCart('Dog', -1); // Throw error
addItemToCart('Bird', 10); // Throw error
console.log(displayCart());

updateItemQuantity('Cat', 8);
updateItemQuantity('Bird', 15); // Throw error
console.log(displayCart());

removeItemFromCart('Cat');
removeItemFromCart('Milk'); // Throw error
console.log(displayCart());

module.exports = {
    displayList,
    displayCart,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity
};
