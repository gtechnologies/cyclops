import React from 'react';
import { TextInput as RNTextInput, ViewStyle } from 'react-native';

import { Colors } from '../../styles/Colors';

import {
	TextInputPropsNative as TextInputProps,
	TextType,
	TextTypeEnum,
	TextInputType,
	TextInputTypeEnum,
} from './TextInputTypes';

const textInputStyleDictionary: { [type: string]: ViewStyle } = {
	[TextInputTypeEnum.none]: {},
	[TextInputTypeEnum.rounded]: {
		borderRadius: 20,
		padding: 10,
		backgroundColor: Colors.LIGHT_GRAY,
	},
};

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
	(props, ref) => {
		// TODO: fix how style is implemented here and add it to web as well but this is temporary to be a non blocker
		let textInputType = props.type ? props.type : 'none';
		let style: ViewStyle = {
			...textInputStyleDictionary[textInputType],
			...(props.style as ViewStyle),
		};

		return <RNTextInput ref={ref} {...props} style={style} />;
	},
);

TextInput.defaultProps = {
	type: 'none',
};
