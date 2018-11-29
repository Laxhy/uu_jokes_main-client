//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./table-row.less";
//@@viewOff:imports

export const TableRow = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "TableRow",
    classNames: {
      main: Config.CSS + "tablerow"
    },
    opt: {
      parentWrapper: true
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    table: PropTypes.object
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
  _handleDelete() {
    this.props.table.deleteChild(this.getId());
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
        <UU5.Bricks.Table.Tr {...this.getMainPropsToPass()}>
          <UU5.Bricks.Table.Td content='Rimmer' />
          <UU5.Bricks.Table.Td content='2nd class technician' />
          <UU5.Bricks.Table.Td content='comical' />
          <UU5.Bricks.Table.Td content={
            <UU5.Bricks.Button onClick={this._handleDelete}/>
          } />
        </UU5.Bricks.Table.Tr>
    );
  }
  //@@viewOff:render
});

export default TableRow;
