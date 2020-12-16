import React from 'react';
import {
	TextInput as RNWTextInput,
	TextInputProps,
	TextInputStyle,
} from 'react-native-web';

export const TextInput = (props: TextInputProps) => {
	return <RNWTextInput {...props} />;
};
