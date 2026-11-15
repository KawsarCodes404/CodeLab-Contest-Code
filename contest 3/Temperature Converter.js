function convertTemperature(value, unit) {
  // TODO: Implement the temperature conversion
  return (unit === 'C') ? Number(((value * 9 / 5) + 32).toFixed(2)) : Number(((value - 32) * 5 / 9).toFixed(2))
}
