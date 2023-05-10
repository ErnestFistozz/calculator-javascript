const rect = require('./shapes')

describe("Shapes tests", () => {
    test('area should return 10', () => {
        let inst = new rect.Rectangle(5,2);
        expect(inst.area()).toBe(10);
      });
    
    test('Perimeter should return 20', () => {
        let inst = new rect.Rectangle(5,2);
        expect(inst.perimeter()).toBe(14);
      });
})