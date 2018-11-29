//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./static.less";
//@@viewOff:imports

export const Static = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Static",
    classNames: {
      main: Config.CSS + "static"
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
  _basicContentPro() {
    return <UU5.Bricks.Div content="Muze byt i cislo" />;
  },
  _uu5stringContentPro() {
    return <UU5.Bricks.Div content="<uu5string /><strong>Muze</strong> byt i cislo" />;
  },

  _dynamicContentPro() {
    return <UU5.Bricks.Div content={<UU5.Bricks.Paragraph />} />;
  },
  _stringObjectContentProp() {
    return (
        <UU5.Bricks.Div
            content={{
              tag: "UU5.Bricks.P",
              props: {
                content: "Hello"
              }
            }}>

        </UU5.Bricks.Div>
    );
  },
  _stringJsonObjectContentProp() {
    return (
        <UU5.Bricks.Div
        content = '<uu5json /> {"tag":"UU5.Bricks.Paragraph"}'
        />
    );
  },

  _multiContentProp() {
    return (
        <UU5.Bricks.Div
            content = {{
              tag: "UU5.Bricks.Icon",
              propsArray: [{icon: "mdi-pencil"}, {icon: "mdi-eye"}]
            }}
        />
    )
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        {this._basicContentPro()}
        {this._uu5stringContentPro()}
        {this._dynamicContentPro()}
        {this._stringObjectContentProp()}
        {this._stringJsonObjectContentProp()}
        {this._multiContentProp()}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Static;
