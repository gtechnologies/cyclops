/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const cyclopsPath = path.resolve(__dirname + '/../../../cyclops');

const symbolicLinkModules = {
  cyclops: cyclopsPath,
};
const watchFolders = [cyclopsPath];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    symbolicLinkModules,
  },
  watchFolders,
};
