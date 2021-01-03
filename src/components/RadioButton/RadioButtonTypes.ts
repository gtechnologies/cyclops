import { ViewStyle as RNWViewStyle } from 'react-native-web';
import { ViewStyle as RNViewStyle } from 'react-native';
import { ClickableProps } from '../../types/Clickable';

// TODO: allow for disabled
// TODO: figure out why center alignment is off
// TODO: remove ClickableProps without causing typing issues in RadioButton.web.tsx

export type RadioButtonPropsWeb = ClickableProps & {
	selected: boolean;
	onValueChange?: (value: boolean) => void;

	color?: string;

	// set the height and width of an IconButton
	size?: number;

	style?: RNWViewStyle;
};

export type RadioButtonPropsNative = ClickableProps & {
	selected: boolean;
	onValueChange?: (value: boolean) => void;

	color?: string;

	// set the height and width of an IconButton
	size?: number;

	style?: RNViewStyle;
};
