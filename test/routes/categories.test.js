import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Routes.Categories`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Routes.Categories />);
    expect(wrapper).toMatchSnapshot();
  });
});
