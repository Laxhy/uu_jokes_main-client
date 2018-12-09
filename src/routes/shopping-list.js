//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import ServerCalls from "calls";
import ShoppingListPage from "../shopping/shopping-list-page.js";
import ShoppingListAccordion from "../shopping/shopping-list-accordion.js";
import ShoppingListEditItem from "../shopping/shopping-list-edit-item.js";

import "./shopping-list.less";
//@@viewOff:imports

export const ShoppingList = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin,UU5.Common.RouteMixin,UU5.Common.LoadMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ShoppingList",
    classNames: {
      main: Config.CSS + "shoppinglist"
    },calls: {
      onLoad: "loadShoppingList"
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
    return <ShoppingListAccordion
        data={dtoOut.itemList}
        onToggleShopped={this._toggleShoppedItem}
        onDelete={this._deleteItem}
        onUpdate={this._updateItem}
        onAdd={this._addItem}
    />
  },
  _toggleShoppedItem(category, item) {
    console.log(this.state.dtoOut, category, item);
    this.setState(prevState => {
          let itemList = prevState.dtoOut.itemList.map(
              cat => {
                if (cat.id === category.id) {
                  let items = cat.items.map(
                      it => {
                        if (it.id === item.id) {
                          it.shopped = (it.shopped) ? false : true;
                        }
                        return it;
                      }
                  );
                  cat.items = items;
                }
                return cat;
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
  _deleteItem(category, item) {
    console.log(this.state.dtoOut, category, item);
    this.setState(prevState => {
          let itemList = prevState.dtoOut.itemList.map(
              cat => {
                if (cat.id === category.id) {
                  let items = cat.items.filter(
                      it => { return (it.id !== item.id)}
                  );
                  cat.items = items;
                }
                return cat;
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
  _updateItem(category, item) {
    UU5.Environment.getPage().getModal().open(
        {
          content: <ShoppingListEditItem
              values={item}
              onCancel={this._onModalCancel}
              onSave={opt => this._onUpdateModalSave(opt, category, item)}
              id={UU5.Common.Tools.generateUUID()}
          />
        }
    )
  },
  _addItem(category) {
    UU5.Environment.getPage().getModal().open(
        {
          content: <ShoppingListEditItem
              //values={item}
              onCancel={this._onModalCancel}
              onSave={opt => this._onAddModalSave(opt, category)}
              id={UU5.Common.Tools.generateUUID()}
          />
        }
    )
  },
  _onAddModalSave(opt, category) {
    console.log(opt)
    UU5.Environment.getPage().getModal().close()
    this.setState(prevState => {
          let itemList = prevState.dtoOut.itemList.map(
              cat => {
                if (cat.id === category.id) {
                  let item = {
                    id : UU5.Common.Tools.generateUUID(),
                    name : opt.values.name,
                    quantity: opt.values.quantity,
                    shopped: false
                  }
                  cat.items.push(item);
                }
                return cat;
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
  _onUpdateModalSave(opt, category, item) {
    console.log(opt)
    UU5.Environment.getPage().getModal().close()
    this.setState(prevState => {
          let itemList = prevState.dtoOut.itemList.map(
              cat => {
                if (cat.id === category.id) {
                  let items = cat.items.map(
                      it => {
                        if (it.id === item.id) {
                          return {...it, ...opt.values}
                        } else {
                          return it;
                        }
                      }
                  );
                  cat.items = items;
                }
                return cat;
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
  _onModalCancel() {
    UU5.Environment.getPage().getModal().close()
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <ShoppingListPage label="Shopping List">
          {this.getLoadFeedbackChildren(this._getChild)}
        </ShoppingListPage>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default ShoppingList;
