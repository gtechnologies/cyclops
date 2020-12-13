import React from 'react';
import { TextInput as RNWTextInput, TextInputProps } from 'react-native-web';

export const TextInput = (props: TextInputProps) => {
	return <RNWTextInput {...props} />;
};
