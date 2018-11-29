//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";

import "./accirdion-content.less";
//@@viewOff:imports

export const AccirdionContent = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "AccirdionContent",
    classNames: {
      main: Config.CSS + "accirdioncontent",
      button: Config.CSS + "accirdioncontent-button",
      label: Config.CSS + "accirdioncontent-label"
    },
    opt: {
      parentWrapper: true
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    joke: PropTypes.object
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
  _getContent(text, rating, categories) {
    return [
        <UU5.Bricks.Span content={`<uu5string/>${text}`} />,
        <br />,
        <UU5.Bricks.Rating value={rating} />,
        <UU5.Bricks.Div>
         {categories.map(category => <UU5.Bricks.Label className={this.getClassName("label")} key={category.id} content={category.name} />)}
        </UU5.Bricks.Div>,
        <UU5.Bricks.Line />,
        <UU5.Bricks.Div className={this.getClassName("button")}>
          <UU5.Bricks.Button />
        </UU5.Bricks.Div>
        ]
  },

  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Panel {...this.getMainPropsToPass()}
                         header={this.props.joke.name}
                         content={this._getContent(this.props.joke.text, this.props.joke.averageRating, this.props.joke.categories)}
                         iconExpanded="mdi-chevron-up"
                         iconCollapsed="mdi-chevron-down"
      />
    );
  }
  //@@viewOff:render
});

export default AccirdionContent;
