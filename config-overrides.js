// const {injectBabelPlugin} = require('react-app-rewired');

const rootImportConfig = [
  "root-import",
  {
    rootPathPrefix: "~",
    rootPathSufix: "src"
  }
];


//deprecated, not working
// module.exports = config => injectBabelPlugin(rootImportConfig, config);