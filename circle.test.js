const circ = require('./circle')

describe("Circle Tests", () => {
    test('Circle Area', () => {
        let inst = new circ.Circle(0);
        expect(inst.circleArea()).toBe(0);
      });
})