let cart = [];

function addCart(product) {
    let productInCart = { ...product }
    productInCart['isInCart'] = true;
    cart.push(productInCart);
}

function removeFromCart(product) {
    console.log(product['name']);
    let newCart = [];
    cart.map((prod) => {
        console.log(prod['id'] != product['id']);
        if (prod['id'] != product['id']) newCart.push(prod);
    })
    console.log(cart);
    console.log(newCart);
    cart = newCart;
}

module.exports = { addCart, removeFromCart, cart };