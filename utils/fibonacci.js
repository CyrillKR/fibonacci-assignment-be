function recursiveFibonacci(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n < 3) return 1;
  memo[n] = recursiveFibonacci(n - 1, memo) + recursiveFibonacci(n - 2, memo);

  return memo[n];
}

module.exports = recursiveFibonacci;
