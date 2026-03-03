//CASOS DE USO DE CARRINHO DE COMPRAS

//1. Adicionar um item ao carrinho
async function addItemToCart(userCart, item) {
    // Lógica para adicionar o item ao carrinho
    userCart.push(item);
}
//2. Remover um item do carrinho
async function removeItemFromCart(userCart, index) {
    // Lógica para remover o item do carrinho
    const deleteIndex = index -1;
    if (index => 0 && index < userCard.length) {
        userCart.splice(deleteIndex, 1);
    }
}

//
async function displycart(userCart) {
    console.log("\n Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} |
            ${item.quantity} | Subtotal ${item.subtotal()}`)
    });
}

//3. Atualizar a quantidade de um item no carrinho
async function updateItemQuantity(userCart, index, newQuantity) {
    // Lógica para atualizar a quantidade do item no carrinho
    console.log(`Quantidade do item ${userCart[index].name} atualizada para ${newQuantity}.`);
}
//4. Calcular o total do carrinho
async function calculateTotal(userCart) {
    // Lógica para calcular o total do carrinho
    console.log("\nShopee Cart Total!");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

//5. Limpar o carrinho
async function clearCart(userCart, item) {
    // Lógica para limpar o carrinho
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if (indexFound == -1) {
        console.log("item não encontrado!");
        return;
    }
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    if (userCart[indexFound].quantity ==1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

export {addItemToCart, calculateTotal, removeItemFromCart, clearCart, updateItemQuantity, displycart}