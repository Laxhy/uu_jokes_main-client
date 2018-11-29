import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Server.Accirdion`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Server.Accirdion />);
    expect(wrapper).toMatchSnapshot();
  });
});
