//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./dump.less";
//@@viewOff:imports

export const Dump = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Dump",
    classNames: {
      main: Config.CSS + "dump"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  },
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
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        Component Dump Hodnota je: {this.props.count}
        <UU5.Bricks.Button onClick={this.props.onClick}/>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Dump;
