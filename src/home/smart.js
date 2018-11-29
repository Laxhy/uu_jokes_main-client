//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./smart.less";
//@@viewOff:imports

export const Smart = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Smart",
    classNames: {
      main: Config.CSS + "smart"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes

  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    return {
      count : 0
    };
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  increase(setStateCallback) {
    console.log("kliknuto ...");
    this.setState( karel => { return {
          count: this.state.count + 1
        }},
        setStateCallback
    );
    return this;
  },
  decrease(setStateCallback) {
    console.log("kliknuto ...");
    this.setState( karel => { return {
          count: this.state.count - 1
        }},
        setStateCallback
    );
    return this;
  },
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _inc() {
    this.increase();
  },
  _dec() {
    this.decrease();
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      this.props.children(this.state.count, this._inc, this._dec)
    );
  }
  //@@viewOff:render
});

export default Smart;
