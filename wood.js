const prices = [20000, 16000, 50000, 10000, 12000, 30000, 35000];

function getMin(numbers) {
  let min = numbers[0];
  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log("Cheapest one is: ", cheap);
