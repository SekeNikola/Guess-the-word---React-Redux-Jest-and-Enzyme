import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../utils/index";
import Input from "./input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input />, { context: { store } }).childAt(0);
};

setup();

describe("Input Component", () => {
  describe("word has not been guessed", () => {
    it("renders component without error", () => {});

    it("should render input box", () => {});

    it("should render submit button", () => {});
  });

  describe("word has been guessed", () => {
    describe("word has not been guessed", () => {
      it("should not renders component without error", () => {});

      it("should not render input box", () => {});

      it("should not render submit button", () => {});
    });

    describe("update state", () => {});
  });
});
