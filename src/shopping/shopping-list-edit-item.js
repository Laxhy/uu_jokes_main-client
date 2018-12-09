//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import Config from "./config/config.js";

import "./shopping-list-edit-item.less";
//@@viewOff:imports

export const ShoppingListEditItem = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin,UU5.Forms.FormMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ShoppingListEditItem",
    classNames: {
      main: Config.CSS + "shoppinglistedititem"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    values: PropTypes.object
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
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Forms.Text name="name" label="Item Name" required/>
        <UU5.Forms.Number name="quantity" min={0} label="Item Quantity" required/>
        <UU5.Bricks.Line />
        <UU5.Forms.Controls />
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default ShoppingListEditItem;
