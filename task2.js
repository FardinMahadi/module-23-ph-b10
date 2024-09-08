function smallestName(names) {
  let smallest = names[0];
  for (let name of names) {
    if (smallest.length > name.length) {
      smallest = name;
    }
  }
  return smallest;
}

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
console.log(smallestName(heights2));
