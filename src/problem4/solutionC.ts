function sum_to_n_c(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Time Complexity: O(n): TThis function iterates over all the numbers from 1 to n, so the time complexity is linear in terms of n.
 * 
 * Space Complexity: O(n): This solution only uses a constant amount of space to store the variable sum and the loop counter.
 * 
 */
