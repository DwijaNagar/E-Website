export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, state) => {  
  console.log(product);
 
  const updatedProducts = [...state.products];
  console.log('state console---->', updatedProducts);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

   const productIndex = updatedProducts.findIndex((item) => item.id === product.id );
//    const updatedProduct = updatedProducts[productIndex];
//    console.log('updatedProductQuantity Before adding', updatedProduct['quantity']);
//    if (updatedProduct['quantity'] === undefined) {
//     updatedProduct['quantity'] = 1;
//    } else {
//      updatedProduct.quantity +=1;
//    }
//  //  console.log('updatedProductQuantity After adding', newQuantity);
//  //  updatedProduct['quantity'] = newQuantity;
//    console.log('product after updation', updatedProduct);

//  //  updatedProducts.push(updatedProduct);
//    console.log('updatedProducts before returning', updatedProducts);
//    updatedProducts[productIndex] = updatedProduct;
//    console.log('updatedProduct from list', updatedProducts);

let newProduct = { ...updatedProducts[productIndex] };
if (updatedProducts[productIndex]['quantity']=== undefined){
    newProduct['quantity'] = 1;
} else {
    newProduct.quantity++;
}
updatedProducts[productIndex] = newProduct;

console.log('New Product',newProduct);
console.log('Products List',updatedProducts);
   
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  
  return { ...state, cart: updatedCart, products : updatedProducts };
};

const removeProductFromCart = (productId, state) => {
  console.log("Removing product with id: " + productId);
  const updatedCart = [...state.cart];
   const updatednewcart= [...state.cart];
  console.log('state console---->', updatednewcart);
  const cartIndex = updatednewcart.findIndex((item) => item.id === productId );


  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);


  let newCart = { ...updatednewcart[cartIndex] };
if (updatednewcart[cartIndex]['quantity']=== undefined){
  newCart['quantity'] = 1;
} else {
  newCart.quantity++;
}
updatednewcart[cartIndex] = newCart;

console.log('New Product',newCart);
console.log('Cart List',updatednewcart);
  
  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart, newCart: updatednewcart };
  
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
