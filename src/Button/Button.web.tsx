// @ts-ignore
import { Button as RNWButton } from 'react-native-web';
import React from 'react';

import { ButtonProps } from './ButtonTypes';

export const Button = (props: ButtonProps) => {
	return <RNWButton {...props} onPress={props.onClick}></RNWButton>;
};
