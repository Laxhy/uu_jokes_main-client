import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Server.JokeForm`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Server.JokeForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
