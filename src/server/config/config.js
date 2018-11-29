import Config from "../../config/config.js";

export default {
  ...Config,

  TAG: Config.TAG + "Server.",
  CSS: Config.CSS + "server-"
};
