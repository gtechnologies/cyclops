import React from 'react';

export type ButtonProps = {
	accessibilityLabel?: string | null | undefined;
	color?: string | null | undefined;
	disabled?: boolean;
	onPress?: (e: any) => void | null | undefined;
	testID?: string | null | undefined;
	title: string;
};

export default class Button extends React.PureComponent<ButtonProps> {}
