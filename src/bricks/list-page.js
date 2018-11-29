//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import Config from "./config/config.js";

import "./list-page.less";
//@@viewOff:imports

export const ListPage = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ListPage",
    classNames: {
      main: Config.CSS + "listpage"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    label: PropTypes.string.isRequired,
    onAddLabel: PropTypes.object,
    onAdd: PropTypes.func,
    onSearch: PropTypes.func
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
          <UU5.Bricks.Column colWidth="xs-12 m-6">
            <h2>{this.props.label}</h2>
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs-12 m-6">
            <UU5.Forms.TextButton
                label='Search'
                placeholder='Category name.'
                buttons={[{
              icon: 'mdi-magnify',
              onClick: this.props.onSearch,
              colorSchema: 'info',
            }]}/>
          </UU5.Bricks.Column>
          <UU5.Bricks.Button colorSchema="blue" content={this.props.onAddLabel} onClick={this.props.onAdd}/>
        </UU5.Bricks.Row>
        {this.props.children}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default ListPage;
