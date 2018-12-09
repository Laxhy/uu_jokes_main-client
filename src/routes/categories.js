//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import ServerCalls from "calls";
import CategoriesTable from "../categories/categories-table.js"
import ListPage from "../bricks/list-page.js"
import Form from "../categories/form.js"


import "./categories.less";
import LSI from "./categories-lsi.js"

//@@viewOff:imports

export const Categories = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin,UU5.Common.RouteMixin,UU5.Common.LoadMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Categories",
    classNames: {
      main: Config.CSS + "categories"
    },
    calls: {
      onLoad: "loadCategories"
    },
    lsi: LSI
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
    return <CategoriesTable data={dtoOut} onUpdate={this._onUpdateHandle}/>
  },
  _onSearchHandler(opt) {
    console.log("heldam")
  },
  _obAddHandler(opt) {
    UU5.Environment.getPage().getModal().open(
        {
         content: <Form
             onCancel={this._onAddModalCancel}
             onSave={this._onAddModalSave}
             id={UU5.Common.Tools.generateUUID()}
         />
        }
    )
  },
  _onAddModalCancel() {
    UU5.Environment.getPage().getModal().close()
  },
  _onAddModalSave(opt) {
    //console.log("Save", opt)
    UU5.Environment.getPage().getModal().close()
    this.setState(prevState => {
      let itemList = prevState.dtoOut.itemList;
      itemList.push(
          {
            id: UU5.Common.Tools.generateUUID(),
            name: opt.values.name,
            jokeCount: 0
          }
      )
      return {
        dtoOut: {
          itemList
        }
      }
        }
    )
    this.state.dtoOut
  },
  _onUpdateHandle(category) {
    UU5.Environment.getPage().getModal().open(
        {
          content: <Form
              values={category}
              onCancel={this._onAddModalCancel}
              onSave={opt => this._onUpdateModalSave(opt, category)}
              id={UU5.Common.Tools.generateUUID()}
          />
        }
    )
  },
  _onUpdateModalSave(opt, category) {
    //console.log("Update", opt, category)
    UU5.Environment.getPage().getModal().close()
    this.setState(prevState => {
          let itemList = prevState.dtoOut.itemList.map(
              item => {
                if (item.id === category.id) {
                  return {...item, ...opt.values}
                } else {
                  return item
                }
              }
          );
          return {
            dtoOut: {
              itemList
            }
          }
        }
    );

    this.state.dtoOut
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <ListPage label="Kategorie" onAddLabel={this.getLsiComponent("addLabel")} onSearch={this._onSearchHandler} onAdd={this._obAddHandler}>
        {this.getLoadFeedbackChildren(this._getChild)}
        </ListPage>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Categories;
