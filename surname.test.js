const { name, surname, fullname} = require('./name')


describe("Surname Tests", () => {
    test('surname Tests', () => {
        const result = surname()
        expect(result).toBe('Mamba');
      });
      test('fullname Tests', () => {
        const result = fullname()
        expect(result).toBe('Ernest Mamba');
      });
});