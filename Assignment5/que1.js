function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const number = prompt("Enter the number: ");
if (number <= 0) {
  console.log("Enter a positive number.");
} else {
  for (let i = 0; i < number; i++) {
    document.write(`<br>${fibonacci(i)}`);
  }
}
