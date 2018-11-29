//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./responsive.less";
//@@viewOff:imports

export const Responsive = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Responsive",
    classNames: {
      main: Config.CSS + "responsive"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Row {...this.getMainPropsToPass()}>
        <UU5.Bricks.Column colWidth="xs-3" style={{backgroundColor: "yellow"}}> 1. sloupec</UU5.Bricks.Column>
        <UU5.Bricks.Column colWidth="xs-3" style={{backgroundColor: "red"}}> 2. sloupec</UU5.Bricks.Column>
        <UU5.Bricks.Column colWidth="xs-6" style={{backgroundColor: "blue"}}> 3. sloupec</UU5.Bricks.Column>

      </UU5.Bricks.Row>
    );
  }
  //@@viewOff:render
});

export default Responsive;
