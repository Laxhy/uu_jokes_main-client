import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Categories.CategoriesTable`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Categories.CategoriesTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
