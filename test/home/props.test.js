import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Home.Props`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Home.Props />);
    expect(wrapper).toMatchSnapshot();
  });
});
