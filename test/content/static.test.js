import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Content.Static`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Content.Static />);
    expect(wrapper).toMatchSnapshot();
  });
});
