// Function declarations:
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

// Still use `?` for optional values
// TS can probably "infer" that the result is a number
function addTwoOrThreeNumbers(a: number, b: number, c?: number) {
  let result = a + b;

  // Must check to see if `c` is defined before using!
  if (c !== undefined) {
    result += c;
  }

  return result;
}

function addManyNumbers(a: number, ...others: number[]) {
  let finalResult = others.reduce((sum, current) => {
    return sum + current;
  }, a);
}
