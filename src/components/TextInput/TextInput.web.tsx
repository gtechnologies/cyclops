import React from 'react';
import {
	TextInput as RNWTextInput,
	TextInputProps,
	TextInputStyle,
} from 'react-native-web';

// TODO: bring up to pairity with mobile
// TODO: add a ref value
export const TextInput = (props: TextInputProps) => {
	return <RNWTextInput {...props} />;
};
