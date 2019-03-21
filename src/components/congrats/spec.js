import React from 'react';
import Enzyme, {
    shallow
} from 'enzyme';
import {
    findByTestAttr,
    checkProps
} from '../../../utils/index';
import Congrats from './congrats';

const defaultProps = {
    success: false
};

const setup = (props = {}) => {
        const setupProps = {
            ...defaultProps,
            ...props
        }
        return shallow( < Congrats {
                ...setupProps
            }
            />)
        }

        describe('Congrats Component', () => {
            it('Should render without warning', () => {
                const wrapper = setup({
                    success: false
                });
                const component = findByTestAttr(wrapper, 'component-congrats')
                expect(component.length).toBe(1)
            });

            it('Should NOT render text when success prop is false', () => {
                const wrapper = setup({
                    success: false
                });
                const component = findByTestAttr(wrapper, 'component-congrats')
                expect(component.text()).toBe('')

            });

            it('Should render non empty congrats message when success prop is true', () => {
                const wrapper = setup({
                    success: true
                });

                const message = findByTestAttr(wrapper, 'congrats-message');
                expect(message.text().length).not.toBe(0)
            });

            it('Does NOT throw warrning with expected props', () => {
                const expectProps = {
                    success: false
                };
                checkProps(Congrats, expectProps)
            })
        });