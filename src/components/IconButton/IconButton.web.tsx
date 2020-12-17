import React from 'react';
import { Button } from '../Button/Button.web';
import { IconButtonPropsWeb as IconButtonProps } from './IconButtonTypes';

export const IconButton = (props: IconButtonProps) => {
	return (
		<Button {...props}>
			{props.icon}
			{props.children}
		</Button>
	);
};
