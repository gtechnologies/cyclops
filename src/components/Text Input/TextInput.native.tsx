import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import React from 'react';

export const TextInput = (props: TextInputProps) => {
	return <RNTextInput {...props} />;
};
