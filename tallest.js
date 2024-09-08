const height = [53, 64, 55, 66, 87, 69];

function getTallest(height) {
  let tallest = 0;
  for (let h of height) {
    if (tallest < h) {
      tallest = h;
    }
  }
  return tallest;
}

console.log("Tallest number is: " + getTallest(height));
