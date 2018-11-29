//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import Smart from "./smart.js";
import Dump from "./dump.js";


import "./lifecycle.less";
//@@viewOff:imports

export const Lifecycle = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Lifecycle",
    classNames: {
      main: Config.CSS + "lifecycle"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  componentDidMount() {
    this._interval = setInterval(() => this._counter.increase(), 1000);
  },

  componentWillUnmount() {
    clearInterval(this._interval);
  },
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
        <Smart ref_={cmp => (this._counter = cmp)}>
          {(count, inc) => <Dump count={count} onClick={inc}/>}
        </Smart>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Lifecycle;
