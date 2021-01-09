import {
	TextInputProps as RNWTextInputProps,
	TextStyle as RNWTextStyle,
} from 'react-native-web';
import {
	TextInputProps as RNTextInputProps,
	TextStyle as RNTextStyle,
} from 'react-native';

import { TextType, TextTypeEnum } from '../Text/TextTypes';

export { TextType, TextTypeEnum };

export type TextInputType = 'none' | 'rounded';
export enum TextInputTypeEnum {
	none = 'none',
	rounded = 'rounded',
}

export type TextInputPropsWeb = RNWTextInputProps & {
	type?: TextInputType;

	// TODO: actually implement stuff for textType
	textType?: TextType;
};
export type TextInputPropsNative = RNTextInputProps & {
	type?: TextInputType;

	textType?: TextType;
};
