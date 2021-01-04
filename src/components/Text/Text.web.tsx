import React from 'react';
import { Text as RNWText, TextStyle } from 'react-native-web';

import { TextPropsWeb as TextProps, TextType, TextTypeEnum } from './TextTypes';
import { View } from '../View/View.web';
import { GenericStyleProp } from 'react-native-web/types';

const defaultFontSize = 18;

const textStyleDictionary: { [type: string]: TextStyle } = {
	[TextTypeEnum.pagetitle]: {
		textAlign: 'left',
		fontWeight: '600',
		fontSize: '2em',
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.title]: {
		textAlign: 'left',
		fontWeight: '600',
		fontSize: '1.5em',
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.subtitle]: {
		textAlign: 'left',
		fontWeight: '500',
		fontSize: '1.17em',
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.body]: {
		textAlign: 'left',
		fontWeight: '400',
		fontSize: '1em',
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
};

export const Text = (props: TextProps) => {
	let textType = props.type ? props.type : TextTypeEnum.body;
	let style: GenericStyleProp<TextStyle> = {
		...textStyleDictionary[textType],
		...(props.style as TextStyle),
	};

	return <RNWText {...props} style={style} />;
};
