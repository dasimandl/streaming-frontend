const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssLoaderOffptions: {
    url: false
  }
});
