// Define initial cart and list of items with prices
let cart = [{ item: 'Cat', qty: 10 }];
let list = [
    { item: 'Cat', price: 5 },
    { item: 'Dog', price: 10 },
    { item: 'Egg', price: 3.5 },
    { item: 'Milk', price: 5 }
];

// Function to validate input quantity
function validateInput(qty) {
    if (isNaN(qty) || qty <= 0) {
        throw new Error('Invalid quantity format. Please enter a valid number greater than 0.');
    }
}

// Function to display the list of items and their prices
function displayList() {
    let listInfo = '\n========================\nLIST OF ITEMS\n========================\n';
    let index = 0;
    list.forEach(item => {
        index += 1;
        listInfo += `Item${index}: ${item.item}, Price: \$${item.price}\n========================\n`;
    });
    return listInfo;
}

// Function to display the items in the cart along with their quantities
function displayCart() {
    let cartInfo = '\n============================\nTHIS IS YOUR CART\n============================\n';
    let index = 0;
    cart.forEach(item => {
        index += 1;
        cartInfo += `Item${index}: ${item.item}, Quantity: ${item.qty}\n============================\n`;
    });
    return cartInfo + totalPriceOfCart();
}

// Function to add an item with a specified quantity to the cart
function addItemToCart(item, qty) {
    try {
        validateInput(qty); // Validate input quantity
        let listItem = list.find(listItem => listItem.item === item); // Find item in the list
        if (!listItem) {
            throw new Error(`${item} not found in the list. Cannot add to cart.`);
        }

        let cartItem = cart.find(cartItem => cartItem.item === item); // Find item in the cart
        if (cartItem) {
            cartItem.qty += qty; // Update quantity if item already exists in cart
            console.log(`Updated quantity of ${item} in cart: ${cartItem.qty}...\n`);
        } else {
            cart.push({ item: item, qty: qty }); // Add item to cart if it doesn't exist
            console.log(`Added ${qty} ${item}(s) to cart...\n`);
        }
    } catch (error) {
        console.error(error.message);
        return; // Stop further execution on error
    }
}

// Function to remove an item from the cart
function removeItemFromCart(item) {
    let index = cart.findIndex(x => x.item === item);
    if (index !== -1) {
        cart.splice(index, 1); // Remove item from cart
        console.log(`Removed ${item} from the cart...\n`);
    } else {
        console.error(`Invalid item: ${item} not found in the cart.\n`);
        return; // Stop further execution on error
    }
}

// Function to update the quantity of an item in the cart
function updateItemQuantity(item, qty) {
    try {
        validateInput(qty); // Validate input quantity
        let cartItem = cart.find(cartItem => cartItem.item === item); // Find item in the cart
        if (!cartItem) {
            throw new Error(`${item} not found in the cart. Cannot update quantity.`);
        }

        cartItem.qty = qty; // Update quantity of item in cart
        console.log(`Updated quantity of ${item} in cart to ${qty}...\n`);
    } catch (error) {
        console.error(error.message);
        return; // Stop further execution on error
    }
}

// Function to calculate the total price of items in the cart
function totalPriceOfCart() {
    let totalPrice = cart.reduce((acc, curr) => {
        let listItem = list.find(listItem => listItem.item === curr.item); // Find item in the list
        return acc + (listItem ? listItem.price * curr.qty : 0); // Calculate total price
    }, 0);
    return `[Total price of cart: \$${totalPrice}]\n`; // Return formatted total price
}

// Console log initial list and cart
console.log(displayList());
console.log(displayCart());

// Test scenarios
addItemToCart('Cat', 5);
addItemToCart('Dog', 20);
addItemToCart('Dog', -1); // Throw error
addItemToCart('Bird', 10); // Throw error
console.log(displayCart());

updateItemQuantity('Cat', 8); // Update 'Cat' quantity to 8
updateItemQuantity('Bird', 15); // Throw error
console.log(displayCart());

removeItemFromCart('Cat');
removeItemFromCart('Milk'); // Throw error
console.log(displayCart());

// Export functions for use in other modules
module.exports = {
    displayList,
    displayCart,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity
};