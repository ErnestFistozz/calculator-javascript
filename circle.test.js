const circ = require('./circle')

describe("Circle Tests", () => {
    test('Circle Area', () => {
        let inst = new circ.Circle();
        const r = 0
        expect(inst.circleArea(r)).toBe(0);
      });
})