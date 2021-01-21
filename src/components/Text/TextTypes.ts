import {
	TextProps as RNTextProps,
	TextStyle as RNTextStyle,
} from 'react-native';
import {
	TextProps as RNWTextProps,
	TextStyle as RNWTextStyle,
} from 'react-native-web';

export enum TextTypeEnum {
	pagetitle = 'pagetitle',
	title = 'title',
	subtitle = 'subtitle',
	// a bolder body
	headline = 'headline',
	body = 'body',
}
export type TextType = 'pagetitle' | 'title' | 'subtitle' | 'headline' | 'body';

export type TextPropsWeb = RNWTextProps & {
	type?: TextType;
};
export type TextPropsNative = RNTextProps & {
	type?: TextType;
	children?: any | null | undefined;
};
