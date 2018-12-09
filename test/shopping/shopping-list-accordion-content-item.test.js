import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Shopping.ShoppingListAccordionContentItem`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Shopping.ShoppingListAccordionContentItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
