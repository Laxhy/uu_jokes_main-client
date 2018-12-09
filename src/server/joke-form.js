//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import Config from "./config/config.js";

import "./joke-form.less";
//@@viewOff:imports

export const JokeForm = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin,UU5.Forms.FormMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "JokeForm",
    classNames: {
      main: Config.CSS + "jokeform"
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
  _handlerTextOnChange(opt) {
    // opt.component.setValue(opt.value)
    opt.component.onChangeDefault(opt)
    console.log("new input value", opt.value)

    //validace
    if (opt.value.length < 10) {
      opt.component.setFeedback("error", "mas to spatne", opt.value)
    } else {
      opt.component.setFeedback("info", "mas to ok", opt.value)
    }
  },
  _handlerTextOnValidate(opt) {
    // opt.component.setValue(opt.value)
   console.log("onValidate", opt)
    if (opt.event === null) {
     // do nothing
    } else {
      if (opt.value.length < 20) {
        return {
          feedback: "error",
          message: "Je to moc kratke, pridej tomu"
        }
      }
    }
  },

  _getChildren() {
  return (
    <UU5.Bricks.Div>
      <UU5.Forms.Text name="name" label="Joke Name"
                      required
                      labelColWidth="xs-12"
                      inputColWidth="xs-12"
                      onChange={this._handlerTextOnChange}
                      onValidate={this._handlerTextOnValidate}
      />
      <UU5.Bricks.Line />
      <UU5.Forms.Controls />
    </UU5.Bricks.Div>
  );
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        {this.getFormChildren(this._getChildren)}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default JokeForm;
