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
import { ClickableProps } from '../../types/Clickable';

import { TextType } from '../Text/TextTypes';

export enum ButtonTypeEnum {
	none = 'none',
	filled = 'filled',
	outlined = 'outlined',
	ghost = 'ghost',
}
export type ButtonType = 'none' | 'filled' | 'outlined' | 'ghost';

export type ButtonPropsWeb = TouchableOpacityProps &
	ClickableProps &
	AlignItems & {
		label?: string;
		labelStyle?: RNTextStyle;
		labelType?: TextType;

		color?: string;
		type?: ButtonType;

		// TODO: implement this
		disabled?: boolean;

		icon?: React.ReactNode | JSX.Element;
	};

export type ButtonPropsNative = NativeTouchableOpacityProps &
	ClickableProps &
	AlignItems & {
		label?: string;
		labelStyle?: RNWTextStyle;
		labelType?: TextType;

		color?: string;
		type?: ButtonType;

		// TODO: implement this
		disabled?: boolean;

		icon?: React.ReactNode | JSX.Element;
		children?: Children;
	};
