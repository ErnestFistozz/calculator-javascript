const { days } = require('./daysOfWeek');

describe("Days Tests", () => {
    test('Mondays Tests', () => {
        const result = days(1)
        expect(result).toBe('Monday');
      });
      test('Wednesdays Tests', () => {
        const result =  days(3)
        expect(result).toBe('Wednesday');
      });
      test('Saturday Tests', () => {
        const result =  days(6)
        expect(result).toBe('Saturday');
      });
       test('Tuesday Tests', () => {
        const result =  days(2)
        expect(result).toBe('Tuesday');
      });
})
