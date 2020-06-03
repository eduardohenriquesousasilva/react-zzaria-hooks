const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  const overrideConfigs = rewireReactHotLoader(config, env);

  return overrideConfigs;
};
