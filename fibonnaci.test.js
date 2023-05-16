const { fib } = require('./fibonnaci')

describe("Fibonnaci Tests", () => {
    test('Fibonnaci of positive number', () => {
        const result =  fib(7)
        expect(result).toBe(13);
      });

      test('Fibonnaci of negative number', () => {
        const result =  fib(0)
        expect(result).toBe(0);
      });
})