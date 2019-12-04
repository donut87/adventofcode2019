
function hasTwoAdjacentDigits(number) {
  var digits = (""+number).split("");
  return (digits[0] == digits[1] && digits[1] != digits[2]) ||
  (digits[1] == digits[2] && digits[2] != digits[3] && digits[1] != digits[0]) ||
  (digits[2] == digits[3] && digits[3] != digits[4] && digits[2] != digits[1]) ||
  (digits[3] == digits[4] && digits[4] != digits[5] && digits[3] != digits[2]) ||
  (digits[4] == digits[5] && digits[4] != digits[3])
}

console.log(hasTwoAdjacentDigits(112233));
console.log(hasTwoAdjacentDigits(123444));
console.log(hasTwoAdjacentDigits(111222));
function doesNotDecrease(number) {
  var digits = (""+number).split("");
  return digits[0] <= digits[1] && digits[1] <= digits[2] && digits[2] <= digits[3] && digits[3] <= digits[4] && digits[4] <= digits[5]
}

let counter = 0
for (var i = 136760; i <= 595730; i++) {
  if (hasTwoAdjacentDigits(i) && doesNotDecrease(i)) {
    counter++
  }
}

console.log(counter);
