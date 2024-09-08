function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide a number.";
  }
  return num1 * num2;
}

const result = multiply(3, "seven");
console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "First name should be a string.";
  } else if (typeof second !== "string") {
    return "First name should be a string.";
  }
  const full = first + " " + second;
  return full;
}

const full = fullName(2, "Hasan");
console.log(full);

function getPrice(product) {
  if (typeof product !== "object") {
    return "please provide an object";
  }
  const price = product.price;
  return price;
}

const price = getPrice({ name: "chulkani dandi", price: 35, color: "blue" });
// const price = getPrice(5);
console.log(price);

function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return "Please provide an array";
  }
  console.log(typeof numbers);
  return numbers[1];
}

const second = getSecond([1, 23, 53, 543, 8]);
console.log(second);
