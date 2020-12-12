import React from 'react';
import { Button } from '../Button/Button.web';
import { IconButtonProps } from './IconButtonTypes';

const IconButton = (props: IconButtonProps) => {
	return (
		<Button {...props}>
			{props.icon}
			{props.children}
		</Button>
	);
};
