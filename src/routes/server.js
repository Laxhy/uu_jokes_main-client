//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import ServerCalls from "calls";
import Accordion from "../server/accirdion.js";

import "./server.less";
//@@viewOff:imports

export const Server = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin,
    UU5.Common.RouteMixin,
      UU5.Common.LoadMixin,
      UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Server",
    classNames: {
      main: Config.CSS + "server"
    },
    calls: {
      onLoad: "loadJokes"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  componentWillMount() {
    this.setCalls(ServerCalls)
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _getChild(dtoOut) {
    return <Accordion data={dtoOut} />
  },

  _openModalWindowAlternative() {
    this.getCcrComponentByKey("UU5.Bricks.Page").getModal().open({
      header: "JokeName",
      content: <UU5.Bricks.Paragraph />
    })
  },
  _openModalWindow() {
    this._modal.open({
         header: "JokeName",
         content: <UU5.Bricks.Paragraph />
        }
    );
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Button content="Novy vtip" onClick={this._openModalWindowAlternative} />
        {this.getLoadFeedbackChildren(this._getChild)}
        {
          /* <UU5.Bricks.Modal ref_={modal => this._modal = modal} /> */
        }
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Server;
