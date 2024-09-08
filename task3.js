let products = {
  laptop: 35000,
  tablet: 15000,
  mobile: 20000,
};

function calculateElectronicsBudget(object) {
  let total = 0;
  for (let obj in object) {
    total += object[obj];
  }
  return total;
}

console.log("Total cost:", calculateElectronicsBudget(products));
