//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import ServerCalls from "calls";
import Accordion from "../server/accirdion.js";
import ListPage from "../bricks/list-page.js"
import JokeForm from "../server/joke-form.js"

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
      onLoad: "loadJokes",
      createJoke: "createNewJoke"
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
    UU5.Environment.getPage().getModal().open({
      header: "Create new joke",
      content: <JokeForm onSave={this._handleModalCreateJokeSave}
                         onSaveDone={this._handleModalCreateJokeSaveDone}
                         onSaveFail={this._handleModalCreateJokeSaveFail}/>
    })
  },
  _handleModalCreateJokeSave(opt, joke) {
    console.log("Save", opt)
    let callReference = this.getCall("createJoke")
    callReference({
      date: opt.values,
      done: (successCallServerData) => {
        console.log(successCallServerData)
        opt.component.saveDone(successCallServerData)
        // OK
      },
      fail: (failResponseServerData) => {
        console.log(failResponseServerData)
        opt.component.saveFail(failResponseServerData.data)

      }
    })
  },

  _handleModalCreateJokeSaveDone(opt) {
    console.log("_handleModalCreateJokeSaveDone", opt)
    UU5.Environment.getPage().getModal().close();
  },
  _handleModalCreateJokeSaveFail(opt) {
    console.log("_handleModalCreateJokeSaveFail", opt)
    UU5.Environment.getPage().getModal().close();
  },

  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <ListPage label="Kategorie" onAddLabel="addLabel" onAdd={this._openModalWindowAlternative}>
        {this.getLoadFeedbackChildren(this._getChild)}
        </ListPage>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Server;
