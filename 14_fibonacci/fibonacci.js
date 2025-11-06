const fibonacci = function(n) {
  // Handle the base cases
  if (n <= 1) {
    return n;
  }

  // Initialize the first two numbers
  let a = 0;
  let b = 1;

  // Loop from 2 up to the desired number
  for (let i = 2; i <= n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }

  // Return the nth Fibonacci number
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
