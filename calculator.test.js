const cal = require('./calculator')

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        let inst = new cal.Calculator(1,2);
        let result = inst.addition()
        // assert
        expect(result).toBe(3);
      });
      test('subtracting 2 from 5 to give 3', () => {
        // arrange and act
        let inst = new cal.Calculator(5,2);
        let result = inst.subtraction()
        // assert
        expect(result).toBe(3);
      });
    
})