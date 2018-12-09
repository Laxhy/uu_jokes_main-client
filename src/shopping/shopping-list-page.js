//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./shopping-list-page.less";
//@@viewOff:imports

export const ShoppingListPage = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ShoppingListPage",
    classNames: {
      main: Config.CSS + "shoppinglistpage"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    label: PropTypes.string.isRequired,
    onAddLabel: PropTypes.oneOfType([PropTypes.object,PropTypes.string]),
    onAddCategoryLabel: PropTypes.oneOfType([PropTypes.object,PropTypes.string])
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
        <UU5.Bricks.Row>
          <UU5.Bricks.Column>
            <h2>{this.props.label}</h2>
          </UU5.Bricks.Column>
        </UU5.Bricks.Row>
        {this.props.children}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default ShoppingListPage;
