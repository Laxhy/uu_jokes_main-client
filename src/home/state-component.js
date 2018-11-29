//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./state-component.less";
//@@viewOff:imports

export const StateComponent = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "StateComponent",
    classNames: {
      main: Config.CSS + "statecomponent"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    initialCount: PropTypes.number
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      initialCount: 5
    }
  },

  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    return {
      count : this.props.initialCount
    };
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _handleClick() {
    console.log("kliknuto ...");
    this.setState( karel => { return {
      count: this.state.count + 1
    }},
        () => {
         console.log(this.state.count);
        }
    );

  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        Component Hodnota je: {this.state.count}
        <UU5.Bricks.Button onClick={this._handleClick}/>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default StateComponent;
