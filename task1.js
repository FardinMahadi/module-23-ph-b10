function lowestNumber(numbers) {
  let lowest = numbers[0];
  for (let num of numbers) {
    if (lowest > num) {
      lowest = num;
    }
  }
  return lowest;
}

const heights2 = [167, 190, 120, 165, 137];
console.log(lowestNumber(heights2));
