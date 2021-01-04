import React from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';

import {
	TextPropsNative as TextProps,
	TextType,
	TextTypeEnum,
} from './TextTypes';

// font styles based on iOS Human Interface Guidelines: Typography
// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/
const textStyleDictionary: { [type: string]: TextStyle } = {
	[TextTypeEnum.pagetitle]: {
		textAlign: 'left',
		fontWeight: '600',
		fontSize: 34,
		color: 'black',
		//fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.title]: {
		textAlign: 'left',
		fontWeight: '600',
		fontSize: 28,
		color: 'black',
		//fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.subtitle]: {
		textAlign: 'left',
		fontWeight: '500',
		fontSize: 22,
		color: 'black',
		//fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.body]: {
		textAlign: 'left',
		fontWeight: '400',
		fontSize: 17,
		color: 'black',
		//fontFamily: 'SFProText-Regular',
	},
};

export const Text = (props: TextProps) => {
	let textType = props.type ? props.type : TextTypeEnum.body;
	let style: StyleProp<TextStyle> = {
		...textStyleDictionary[textType],
		...(props.style as TextStyle),
	};

	return <RNText {...props} style={style} />;
};
