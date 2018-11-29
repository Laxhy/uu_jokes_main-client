import React from "react";
import { shallow } from "enzyme";
import UuJokes from "uu_jokes_main-client";

describe(`UuJokes.Content.TableRow`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuJokes.Content.TableRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
