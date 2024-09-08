const rohim = 6;
const selim = 3;

if (rohim > selim) {
  console.log("Rohim will get the strawberry.");
} else {
  console.log("Rohim will get the strawberry.");
}

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max1 = getMax(98, 32);
const max2 = getMax(23, 32);
const ultimateMax = getMax(max1, max2);
console.log("max of two is: ", ultimateMax);
