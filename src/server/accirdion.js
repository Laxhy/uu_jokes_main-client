//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import AccirdionContent from "./accirdion-content.js";

import "./accirdion.less";
//@@viewOff:imports

export const Accirdion = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Accirdion",
    classNames: {
      main: Config.CSS + "accirdion"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    data: PropTypes.array
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
        <UU5.Bricks.Accordion {...this.getMainPropsToPass()} allowTags={["UuJokes.Server.AccirdionContent"]} dynamic>
          {
            this.props.data.map(joke =>
               <AccirdionContent joke={joke} key={joke.id}/>
            )
          }
        </UU5.Bricks.Accordion>
    );
  }
  //@@viewOff:render
});

export default Accirdion;
