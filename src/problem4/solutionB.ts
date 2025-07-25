function sum_to_n_b(n: number): number {
  if (n === 0) {
    return 0;
  }
  return n + sum_to_n_b(n - 1);
}

/**
 * Time Complexity: O(n): This recursive function will make n function calls, one for each integer from n down to 1. Therefore, the time complexity is linear.
 *
 * Space Complexity: O(1): Since recursion uses the call stack, each recursive call adds to the stack. In the worst case (when n is large), the space complexity is proportional to n because there will be n recursive calls on the stack.
 *
 */
