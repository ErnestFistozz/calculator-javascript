const { name, surname } = require('./name')


describe("Surname Tests", () => {
    test('surname Tests', () => {
        const result = surname()
        expect(result).toBe('Mamba');
      });
});