import {
	ViewProps as RNViewProps,
	ViewStyle as RNViewStyle,
} from 'react-native';
import {
	ViewProps as RNWViewProps,
	ViewStyle as RNWViewStyle,
} from 'react-native-web';

import { ViewPropsWeb, ViewPropsNative } from '../View/ViewTypes';

export type CardPropsWeb = ViewPropsWeb & {
	contentStyle?: RNWViewStyle;
};
export type CardPropsNative = ViewPropsNative & {
	contentStyle?: RNViewStyle;
};
