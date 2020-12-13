import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

export const TextInput = (props: TextInputProps) => {
	return <RNTextInput {...props} />;
};
