function calculateQuantity(item, taxRate) {
  let quantity = (item.price - (( item.price / 100 ) * item.discount)) * item.quantity;
  return quantity + ((quantity / 100) * taxRate);
}

function calculateCartTotal(items, taxRate) {
  // Your code here
  let res = 0;
  for (let item of items) res += calculateQuantity(item, taxRate);

  return Number(res.toFixed(2));
}