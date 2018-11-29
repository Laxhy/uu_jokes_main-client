import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Home.StateComponent`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Home.StateComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
