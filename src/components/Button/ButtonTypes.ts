import {
	TouchableOpacityProps as RNWTouchableOpacityProps,
	TextStyle as RNTextStyle,
} from 'react-native-web';
import {
	TouchableOpacityProps as RNTouchableOpacityProps,
	TextStyle as RNWTextStyle,
} from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { Children, Icon } from '../../types/Children';
import { ClickableProps } from '../../types/Clickable';

import { TextType } from '../Text/TextTypes';

export enum ButtonTypeEnum {
	none = 'none',
	filled = 'filled',
	outlined = 'outlined',
	ghost = 'ghost',
}
export type ButtonType = 'none' | 'filled' | 'outlined' | 'ghost';

export type ButtonPropsWeb = RNWTouchableOpacityProps &
	ClickableProps &
	AlignItems & {
		label?: string;
		labelStyle?: RNTextStyle;
		labelType?: TextType;

		color?: string;
		type?: ButtonType;

		// TODO: implement this
		disabled?: boolean;

		icon?: Icon;

		loading?: boolean;
	};

export type ButtonPropsNative = RNTouchableOpacityProps &
	ClickableProps &
	AlignItems & {
		label?: string;
		labelStyle?: RNWTextStyle;
		labelType?: TextType;

		color?: string;
		type?: ButtonType;

		// TODO: implement this
		disabled?: boolean;

		icon?: Icon;
		children?: Children;

		loading?: boolean;
	};
