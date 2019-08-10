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
  cart.push(items)
  return (`${item} has been added to your cart.`)

}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.' 
  } else if  (cart.length === 1) {
    var msg = (`In your cart, you have ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`)
    return msg
  }  else 
      for (var i = 0; i < cart.length; i +=1)
       return msg + (', and ') + msg
      
    
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
