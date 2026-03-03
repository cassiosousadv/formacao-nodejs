import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("notebbok", 20.99, 2);
const item2 = await createItem("mouse", 35.99, 3);

await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);

// await cartService.removeItemFromCart(myCart, 2);

await cartService.clearCart(myCart, item1);

await cartService.displycart(myCart);

await cartService.calculateTotal(myCart);