import Config from "../../config/config.js";

export default {
  ...Config,

  TAG: Config.TAG + "Content.",
  CSS: Config.CSS + "content-"
};
