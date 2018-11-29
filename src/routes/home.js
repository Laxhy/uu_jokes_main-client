//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
import WelcomeRow from "../bricks/welcome-row.js";
import Props from "../home/props.js";
import StateComponent from "../home/state-component.js";
import Smart from "../home/smart.js";
import Dump from "../home/dump.js";
import Lifecycle from "../home/lifecycle.js";



import "./home.less";
//@@viewOff:imports

const Home = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Home",
    classNames: {
      main: Config.CSS + "home",
      welcomeRow: Config.CSS + "home-welcomerow",
      welcome: Config.CSS + "home-welcome"
    },
    lsi: Lsi.auth
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    identity: PropTypes.shape()
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
  _getDumpCMP(count, incFnc) {
    return <Dump count={count} onClick={incFnc}/>
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <Props  text="hello world" number = {124}>
           blasndlsadals asd asd asd as as
        </Props>
        <StateComponent initialCount={60}/>
        <StateComponent initialCount={40}/>
        <Smart>{(count, fnCnt) => <Dump count={count} onClick={fnCnt}></Dump>}</Smart>

        <Smart ref_={(cmp) => this._counter = cmp}>{this._getDumpCMP}</Smart>

        <UU5.Bricks.Button colorSchema="primary" onClick={() => this._counter.decrease()}/>
        <UU5.Bricks.Button colorSchema="info" onClick={() => this._counter.increase()}/>

        <Lifecycle/>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Home;
