function reconcileInventory(initialInventory, transactions) {
  // TODO: Implement your solution here
  let inventory = {...initialInventory};

  for (let trans of transactions) {
    let {productId, type, quantity} = trans;

    if (!inventory[productId]) inventory[productId] = 0;
    
    if (type === "in") inventory[productId] += quantity;
    else inventory[productId] = Math.max(0, inventory[productId] - quantity);
  }

  return inventory;
}