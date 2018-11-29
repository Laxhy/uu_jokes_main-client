import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Home.Lifecycle`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Home.Lifecycle />);
    expect(wrapper).toMatchSnapshot();
  });
});
