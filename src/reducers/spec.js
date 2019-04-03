import {
    actionTypes
} from '../actions';
import
successReducer
from './successReducer';

describe('Success Reducer Test', () => {
    it('should return default state of false if no actions are passed', () => {
        const newState = successReducer(undefined, {});
        expect(newState).toBe(false);
    });

    it('should return true upon receiving an action of type CORRECT_GUESS', () => {
        const newState = successReducer(undefined, {
            type: actionTypes.CORRECT_GUESS
        });

        expect(newState).toBe(true);
    });
});