const { voteDecider } = require('./voter')

describe("Decide Vote Tests", () => {
    test('Test under age voter', () => {
        const result = voteDecider(17)
        expect(result).toBe('under age to vote');
      });

})