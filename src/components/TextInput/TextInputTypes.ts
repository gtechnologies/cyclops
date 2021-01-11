import {
	TextInputProps as RNWTextInputProps,
	TextStyle as RNWTextStyle,
} from 'react-native-web';
import {
	TextInputProps as RNTextInputProps,
	TextStyle as RNTextStyle,
} from 'react-native';

import { TextTypeEnum } from '../Text/TextTypes';
// TODO: figure out why this needs to be imported in this way
// https://stackoverflow.com/questions/54953960/typescript-errors-when-importing-a-not-exported-type-even-though-it-is-export
import type { TextType } from '../Text/TextTypes';

export type { TextTypeEnum, TextType };

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
