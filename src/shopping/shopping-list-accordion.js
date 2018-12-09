//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import ShoppingListAccordionContent from "./shopping-list-accordion-content.js";

import "./shopping-list-accordion.less";
//@@viewOff:imports

export const ShoppingListAccordion = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ShoppingListAccordion",
    classNames: {
      main: Config.CSS + "shoppinglistaccordion"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    data: PropTypes.array,
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
  //@@viewOff:overriding

  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
        <UU5.Bricks.Accordion {...this.getMainPropsToPass()} allowTags={["UuJokes.Shopping.ShoppingListAccordionContent"]} dynamic>
          {
             this.props.data.map(category =>
                 <ShoppingListAccordionContent
                       shoppingCategory={category}
                       onToggleShopped={this.props.onToggleShopped}
                       onEdit={this.props.onEdit}
                       onDelete={this.props.onDelete}
                       onUpdate={this.props.onUpdate}
                       onAdd={this.props.onAdd}
                       key={category.id}/>
             )
          }
        </UU5.Bricks.Accordion>
    );
  }
  //@@viewOff:render
});

export default ShoppingListAccordion;
