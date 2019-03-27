import React from 'react';
import {
    shallow
} from 'enzyme';
import {
    findByTestAttr,
    checkProps
} from '../../../utils/index';
import GuessedWords from './guessedWords';

const defaultProps = {
    guessedWords: [{
        guessedWord: 'train',
        letterMatchCount: 3
    }]
};

const setup = (props = {}) => {
        const setUpProps = {
            ...defaultProps,
            ...props
        };
        return shallow( < GuessedWords {
                ...setUpProps
            }
            />)
        }

        describe('Guessed Word Component', () => {
            let wrapper;
            beforeEach(() => {
                wrapper = setup({
                    guessedWord: []
                });
            })
            it('Should NOT throw warning with expected props', () => {
                checkProps(GuessedWords, defaultProps);
            })

            describe('If there are NO word', () => {
                it('should render without error', () => {
                    const component = findByTestAttr(wrapper, 'component-guessed-words');
                    expect(component.length).toBe(1)
                });
                it('should renders instructions to guess a word', () => {
                    const instructions = findByTestAttr(wrapper, 'guess-instructions');
                    expect(instructions.text().length).not.toBe(0)
                });
            });

            describe('If there are words', () => {
                it('should ', () => {

                });
            });
        });