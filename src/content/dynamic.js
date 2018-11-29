//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import TableRow from "./table-row.js";

import "./dynamic.less";
//@@viewOff:imports

export const Dynamic = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Dynamic",
    classNames: {
      main: Config.CSS + "dynamic"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  deleteTableRow(rowId) {
    console.log(rowId);
    this._table.deleteChild(rowId);
  },
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _addTableRow() {
    this._table.insertChild (
        <TableRow table={this._table}/>
    )
   },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Button onClick={this._addTableRow}/>
        <UU5.Bricks.Table header='Table' footer='Table footer'>
          <UU5.Bricks.Table.THead>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Th content='Name' />
              <UU5.Bricks.Table.Th content='Rank' />
              <UU5.Bricks.Table.Th content='Promotion prospects' />
            </UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table.THead>
          <UU5.Bricks.Table.TBody ref_={tbody => this._table = tbody} allowTags={["UuJokes.Content.TableRow"]} dynamic>
            <TableRow table={this._table}/>
          </UU5.Bricks.Table.TBody>
        </UU5.Bricks.Table>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Dynamic;
