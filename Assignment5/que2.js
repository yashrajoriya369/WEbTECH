const number2 = prompt("Enter the number: ");
let sum = 0;
for (let i = 0; i <= number2; i++) {
  document.write(`<br>${i}`);
  sum += i;
}
console.log(sum);
