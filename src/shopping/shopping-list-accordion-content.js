//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import ShoppingListAccordionContentItem from "./shopping-list-accordion-content-item.js";

import "./shopping-list-accordion-content.less";
//@@viewOff:imports

export const ShoppingListAccordionContent = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ShoppingListAccordionContent",
    classNames: {
      main: Config.CSS + "shoppinglistaccordioncontent"
    },
    opt: {
      parentWrapper: true
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    shoppingCategory: PropTypes.object,
    onToggleShopped: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    onAdd: PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  _add() {
    this.props.onAdd(this.props.shoppingCategory)
  },
  //@@viewOff:overriding

  //@@viewOn:private
  _getContent(items) {
    return [
      items.map(item =>
         <ShoppingListAccordionContentItem
               shoppingItem={item}
               shoppingCategory={this.props.shoppingCategory}
               onToggleShopped={this.props.onToggleShopped}
               onDelete={this.props.onDelete}
               onEdit={this.props.onEdit}
               onUpdate={this.props.onUpdate}
         />
      ),
      <UU5.Bricks.Button colorSchema="blue" content="Add" onClick={this._add}/>
    ]
  },

  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Panel {...this.getMainPropsToPass()}
                         header={this.props.shoppingCategory.name}
                         content={this._getContent(this.props.shoppingCategory.items)}
                         iconExpanded="mdi-chevron-up"
                         iconCollapsed="mdi-chevron-down"
      />
    );
  }
  //@@viewOff:render
});

export default ShoppingListAccordionContent;
