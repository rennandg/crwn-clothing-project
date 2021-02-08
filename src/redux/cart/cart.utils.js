export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

//quantity property get attached the first time around since this if block won't run when it's a new item!

export const removeItemFromCart = (cartItems, cartItemToRemove ) => {
  const existingCartItem = cartItem.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
  }

//if the consisting quantity is at 1 remove it otherwise decrease the quantity and keep everyother cartItem the same because they need dont need to be modified
  return cartItems.map(
    cartItem =>
    cartItem.id === cartItemToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1 } 
    : cartItem
  )
}

// filter keeps the value when the function return true 
// if the id is not the one we want to remove then it will keep them but if not then we want to remove them