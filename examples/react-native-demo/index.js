/**
 * @format
 */

import { AppRegistry } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

import App from './App';
import { name as appName } from './app.json';

// used CocoaPods for installation for react-native-vector-icons
// https://github.com/oblador/react-native-vector-icons
MaterialIcon.loadFont();

AppRegistry.registerComponent(appName, () => App);
