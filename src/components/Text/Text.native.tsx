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
		fontWeight: 'normal',
		fontSize: 34,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.title]: {
		textAlign: 'left',
		fontWeight: 'normal',
		fontSize: 28,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.subtitle]: {
		textAlign: 'left',
		fontWeight: 'normal',
		fontSize: 22,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.headline]: {
		textAlign: 'left',
		fontWeight: 'bold',
		fontSize: 17,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.body]: {
		textAlign: 'left',
		fontWeight: 'normal',
		fontSize: 17,
		color: 'black',
		//fontFamily: 'San Francisco',
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
