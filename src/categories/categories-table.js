//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./categories-table.less";
//@@viewOff:imports

export const CategoriesTable = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "CategoriesTable",
    classNames: {
      main: Config.CSS + "categoriestable"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    data: PropTypes.object,
    onUpdate: PropTypes.func
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
  _renderTableRow(category) {
    return (
        <UU5.Bricks.Table.Tr key={category.id}>
          <UU5.Bricks.Table.Td content={category.name} />
          <UU5.Bricks.Table.Td content={category.jokeCount} />
          <UU5.Bricks.Table.Td content={
            <UU5.Bricks.Button content="Update" onClick = {() => this.props.onUpdate(category)}/>
          } />
        </UU5.Bricks.Table.Tr>
    );
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Table {...this.getMainPropsToPass()}>
        <UU5.Bricks.Table.THead>
          <UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Th content='Kategorie' />
            <UU5.Bricks.Table.Th content='Pocet vtipu v kategorii' />
          </UU5.Bricks.Table.Tr>
        </UU5.Bricks.Table.THead>
        <UU5.Bricks.Table.TBody ref_={tbody => this._table = tbody}>
          {
            this.props.data.itemList.map(category => this._renderTableRow(category)
            )
          }
        </UU5.Bricks.Table.TBody>
      </UU5.Bricks.Table>
    );
  }
  //@@viewOff:render
});

export default CategoriesTable;
