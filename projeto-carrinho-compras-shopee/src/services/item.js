//CASOS DE USO DOS ITENS

async function createItem(name, price, quantity) {
    return {
        name, price, quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;