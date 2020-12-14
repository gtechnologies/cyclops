import {
	TouchableOpacityProps,
	TextStyle as RNTextStyle,
} from 'react-native-web';
import {
	TouchableOpacityProps as NativeTouchableOpacityProps,
	TextStyle as RNWTextStyle,
} from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { Children } from '../../types/Children';

import { TextType } from '../Text/TextTypes';

export enum ButtonTypeEnum {
	filled = 'filled',
	outlined = 'outlined',
	ghost = 'ghost',
}
export type ButtonType = 'filled' | 'outlined' | 'ghost';

export type ButtonPropsWeb = TouchableOpacityProps &
	AlignItems & {
		label?: string;
		labelStyle?: RNTextStyle;
		labelType?: TextType;

		color?: string;
		type?: ButtonType;

		// TODO: implement this
		disabled?: boolean;
	};
export type ButtonPropsNative = NativeTouchableOpacityProps &
	AlignItems & {
		label?: string;
		labelStyle?: RNWTextStyle;
		labelType?: TextType;

		color?: string;
		type?: ButtonType;

		// TODO: implement this
		disabled?: boolean;

		children?: Children;
	};
