import React from 'react';
import { Text as RNWText, TextStyle } from 'react-native-web';

import { TextPropsWeb as TextProps, TextType, TextTypeEnum } from './TextTypes';
import { View } from '../View/View.web';
import { GenericStyleProp } from 'react-native-web/types';

const defaultFontSize = 18;

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
	let style: GenericStyleProp<TextStyle> = {
		...textStyleDictionary[textType],
		...(props.style as TextStyle),
	};

	return (
		<View
			style={{
				// @ts-ignore
				fontSize: defaultFontSize,
			}}
		>
			<RNWText {...props} style={style} />
		</View>
	);
};
