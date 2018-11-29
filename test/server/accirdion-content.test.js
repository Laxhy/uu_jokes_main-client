import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Server.AccirdionContent`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Server.AccirdionContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
