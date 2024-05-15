# Assignment 1 Node-Cart-Module

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Notes](#notes)
- [Citation](#citation)


## [Description](#assignment-1-node-cart-module)

This Node.js module provides functionality for managing a cart system, including adding items to the cart, removing items, updating item quantities, and calculating the total price and quantity of items in the cart.

## [Installation](#assignment-1-node-cart-module)

To use this module in your Node.js project, follow these steps:

1. Install Node.js on your system if it's not already installed.
2. Create a new Node.js project or navigate to an existing one.
3. Install the node-cart module using npm:

```ruby
npm install alvan_node-cart-module
```

## [Usage](#assignment-1-node-cart-module)

Once the module is installed, you can use it in your JavaScript files as follows:

```ruby
const cart = require('node-cart');

// Display the list of items and pricing
console.log(cart.displayList());

// Add items to the cart
cart.addItemToCart('Cat', 5);
cart.addItemToCart('Dog', 20);

// Display the cart and total items in cart
console.log(cart.displayCart());

// Update item quantity in the cart
cart.updateItemQuantity('Cat', 8);

// Display the updated cart and total items in cart
console.log(cart.displayCart());

// Remove items from the cart
cart.removeItemFromCart('Cat');

// Display the updated cart and total items in cart
console.log(cart.displayCart());

// Get the total price of items in the cart
console.log(cart.totalPriceOfCart());

```

## [Functions](#assignment-1-node-cart-module)

- displayList(): Displays the list of items and their prices.
- displayCart(): Displays the items in the cart along with their quantities and total price.
- addItemToCart(item, qty): Adds the specified quantity of an item to the cart.
- removeItemFromCart(item): Removes the specified item from the cart.
- updateItemQuantity(item, qty): Updates the quantity of the specified item in the cart.
- totalItemsInCart(): Returns the total number of items in the cart.
- totalPriceOfCart(): Calculates and returns the total price of items in the cart.

## [Notes](#assignment-1-node-cart-module)

> [!NOTE]

- Ensure that you have a valid list of items with prices defined in your application.
- Modify the list array in your code to add or update items as needed.
- Validate input quantities using the validateInput(qty) function before adding items to the cart.

## [Citation](#assignment-1-node-cart-module)

- Whole README File is from ChatGPT 3.5
