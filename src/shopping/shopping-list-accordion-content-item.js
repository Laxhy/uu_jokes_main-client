//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./shopping-list-accordion-content-item.less";
//@@viewOff:imports

export const ShoppingListAccordionContentItem = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ShoppingListAccordionContentItem",
    classNames: {
      main: Config.CSS + "shoppinglistaccordioncontentitem"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    shoppingItem: PropTypes.object.isRequired,
    shoppingCategory: PropTypes.object.isRequired,
    onToggleShopped: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
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
  _toggleState() {
    this.props.onToggleShopped(this.props.shoppingCategory, this.props.shoppingItem)
  },
  _update() {
    this.props.onUpdate(this.props.shoppingCategory, this.props.shoppingItem)
  },
  _delete() {
    this.props.onDelete(this.props.shoppingCategory, this.props.shoppingItem)
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Row>
          <UU5.Bricks.Column colWidth="m-6 s-12 xs-12">{this.props.shoppingItem.name}</UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="m-3 s-6 xs-12">{this.props.shoppingItem.quantity }</UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="m-3 s-6 xs-12">
            <UU5.Bricks.ButtonSwitch
                switchedOn= {this.props.shoppingItem.shopped}
                props={{ size: 'l', onClick: this._toggleState }}
                onProps={{ content: <UU5.Bricks.Icon icon="mdi-cart" />, colorSchema: 'success' }}
                offProps={{ content: <UU5.Bricks.Icon icon="mdi-cart-outline" />, colorSchema: 'grey' }}
            />
            <UU5.Bricks.Button colorSchema = "grey" size="l" onClick={this._update}><UU5.Bricks.Icon icon="mdi-pencil"/></UU5.Bricks.Button>
            <UU5.Bricks.Button colorSchema = "grey" size="l" onClick={this._delete}><UU5.Bricks.Icon icon="mdi-delete"/></UU5.Bricks.Button>
          </UU5.Bricks.Column>
        </UU5.Bricks.Row>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default ShoppingListAccordionContentItem;
