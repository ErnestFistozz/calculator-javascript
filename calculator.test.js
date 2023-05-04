const cal = require('./calculator')

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        let inst = new cal.Calculator(1,2);
        let result = inst.addition()
        // assert
        expect(result).toBe(3);
      });

})