var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function addToCart(item) {
 var items = {itemName: item, itemPrice: getRandomArbitrary(1, 100)}
 cart = [items]
  return (`${item} has been added to your cart.`)

}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
