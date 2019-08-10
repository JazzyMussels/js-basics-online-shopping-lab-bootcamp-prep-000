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
    return (`In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`)
  }  else 
  var msg = `In your cart, you have `
      for (var i = 0; i < cart.length; i +=1) {
       msg = msg + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`
          if (i + 1 === cart.length) {
            msg = msg + '.'
         } else if (i + 1 === cart.length - 1){
            msg = msg + ', and '
           } else {
            msg = msg + ', '
           }
         }
      return msg
    
}

function total() {
  for (var i = 0; i <= cart.length; i +=1 ) {
    var counter = 0 
  counter = cart[i]['itemPrice'] 
  }
  return counter
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
