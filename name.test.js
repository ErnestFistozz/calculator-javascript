const { name, surname, fullname } = require('./name')


describe("Name Tests", () => {
    test('Name Tests', () => {
        const result = name()
        expect(result).toBe('Ernest');
      });
});