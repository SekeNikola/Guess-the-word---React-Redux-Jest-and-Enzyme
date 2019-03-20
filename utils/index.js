export const findByTestAttr = (wrapper, attr) => {
    return wrapper = wrapper.find(`[data-test='${attr}']`);

};