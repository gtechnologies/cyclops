import React from 'react';
import { Text as RNWText, TextStyle } from 'react-native-web';

import { TextPropsWeb as TextProps, TextType, TextTypeEnum } from './TextTypes';

const textStyleDictionary: { [type: string]: TextStyle } = {
	[TextTypeEnum.pagetitle]: {
		fontWeight: '600',
		fontSize: '2em',
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.title]: {
		fontWeight: '600',
		fontSize: '1.5em',
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.subtitle]: {
		fontWeight: '500',
		fontSize: '1.17em',
		color: 'black',
		fontFamily: 'SFProText-Regular',
	},
	[TextTypeEnum.body]: {
		fontWeight: '400',
		fontSize: '1em',
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

	return <RNWText {...props} style={style} />;
};
