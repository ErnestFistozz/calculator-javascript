const { name, surname } = require('./name')


describe("Name Tests", () => {
    test('Name Tests', () => {
        const result = name()
        expect(result).toBe('Ernest');
      });
});