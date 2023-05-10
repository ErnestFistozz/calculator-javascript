const { circleArea } = require('./circle')

describe("Circle Tests", () => {
    test('Circle Area', () => {

        const r = 0
        expect(circleArea(r)).toBe(0);
      });
})