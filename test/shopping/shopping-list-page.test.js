import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Shopping.ShoppingListPage`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Shopping.ShoppingListPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
