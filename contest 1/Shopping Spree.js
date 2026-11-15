function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  // TODO: Implement the function
  if (cakeCost > totalMoney) {
    return totalMoney - cakeCost;
  }
  else {
    return (totalMoney - cakeCost) % donutCost;
  }
}
