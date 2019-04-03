import {
    correctGuess,
    actionTypes
} from './index';

describe('Correct Guess Test', () => {
    it('should return an action with tytpe CORRECT_GUESS', async () => {
        const action = correctGuess();
        expect(action).toEqual({
            type: actionTypes.CORRECT_GUESS
        })
    });
});