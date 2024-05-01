let cart = [
    {
        item: 'Cat',
        qty: 10,
    }
]

function showCart() {
    let cartInfo = '';
    cart.forEach(item => {
        cartInfo += `Item: ${item.item} & Quantity: ${item.qty}\n`;
    });
    return cartInfo;
}

function addItem(item, qty) {
    // Check if item exists in the cart
    let duplicateItem = cart.find(x => x.item === item);

    if (duplicateItem) {
        // Item exists, update qty
        duplicateItem.qty += qty;
        console.log(`Updated quantity of ${item} in cart: ${duplicateItem.qty}\n`);
    } else {
        // Item dont exists, add to cart
        cart.push({ item: item, qty: qty });
        console.log(`Added ${qty} ${item}(s) to cart\n`);
    }
}

function removeItem(item) {
    cart = cart.filter(i => i.item !== item);
    console.log(`Removed ${item} for the cart\n`);
}

addItem('Cat', 5); // This will update the qty of 'Cat' to 15
addItem('Dog', 20); // This will add 'Dog' and qty of 20

console.log(showCart());

removeItem('Cat'); // This will remove 'Cat'

console.log(showCart());