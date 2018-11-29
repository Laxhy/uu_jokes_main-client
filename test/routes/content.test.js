import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Routes.Content`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Routes.Content />);
    expect(wrapper).toMatchSnapshot();
  });
});
