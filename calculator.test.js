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

      test('multiplication of 2 by 3 to equal 6', () => {
        // arrange and act
        let inst = new cal.Calculator(3,2);
        let result = inst.multiplication()
        // assert
        expect(result).toBe(6);
      });

      test('division of 6 by 2 to equal 3', () => {
        // arrange and act
        let inst = new cal.Calculator(6,2);
        let result = inst.division()
        // assert
        expect(result).toBe(3);
      });

      test("division by zero to throw error", () => {

        let inst = new cal.Calculator(1,0)
        expect(inst.division).toThrow(Error)
        expect(inst.division).toThrow('Cannot divide by zero')
      });

      test("modulus by zero to throw error", () => {

        let inst = new cal.Calculator(1,0)
        expect(inst.modulus).toThrow(Error)
        expect(inst.modulus).toThrow('Cannot modularise by zero')
      })

      test("Modulus of 9 by 3 to equal zero", () => {

        let inst = new cal.Calculator(4,2)
        let result = inst.modulus()
        expect(result).toBe(0)
      })

      test("constructor throws an error", () => {
        expect(() => {
            new Calculator();
          }).toThrow();
      })
      
})