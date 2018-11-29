import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Content.Dynamic`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Content.Dynamic />);
    expect(wrapper).toMatchSnapshot();
  });
});
