import { TextInput as RNWTextInput, TextInputProps } from 'react-native-web';
import React from 'examples/react-demo/node_modules/@types/react';

export const TextInput = (props: TextInputProps) => {
	return <RNWTextInput {...props} />;
};
