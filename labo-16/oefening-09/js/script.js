// reduce telt alle elementen op tot één waarde, startend bij 0
function calculateTotalPrice(prices) {
  return prices.reduce((total, price) => total + price, 0);
}

const prices = [130, 150, 80, 131, 90, 300, 212];
console.log('De input array:', prices);

const totalPrice = calculateTotalPrice(prices);
console.log('De totale prijs is:', totalPrice);
// De totale prijs is: 1093
