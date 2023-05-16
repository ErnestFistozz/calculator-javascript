const { voteDecider } = require('./voter')

describe("Decide Vote Tests", () => {
    test('Test under age voter', () => {
        const result = voteDecider(17)
        expect(result).toBe('under age to vote');
      });
      test('Test distric voter', () => {
        const result =  voteDecider(20)
        expect(result).toBe('you are eligible to vote for districts');
      });
      test('Test municipal voter', () => {
        const result =  voteDecider(23)
        expect(result).toBe('you can vote at municipal level');
      });
})