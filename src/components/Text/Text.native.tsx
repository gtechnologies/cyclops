import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';

import { TextPropsWeb as TextProps, TextType, TextTypeEnum } from './TextTypes';

// font styles based on iOS Human Interface Guidelines: Typography
// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/
const textStyleDictionary: { [type: string]: TextStyle } = {
	[TextTypeEnum.pagetitle]: {
		fontWeight: '600',
		fontSize: 34,
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.title]: {
		fontWeight: '600',
		fontSize: 28,
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.subtitle]: {
		fontWeight: '500',
		fontSize: 22,
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.body]: {
		fontWeight: '400',
		fontSize: 17,
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
};

export const Text = (props: TextProps) => {
	let textType = props.type ? props.type : TextTypeEnum.body;
	let style: TextStyle = {
		...textStyleDictionary[textType],
		...props.style,
	};

	return <RNText {...props} style={style} />;
};
