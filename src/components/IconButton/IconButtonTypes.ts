import { ReactNode } from 'react';
import { ButtonProps } from '../Button/ButtonTypes';
import React from 'react';

export type IconButtonProps = ButtonProps & {
	icon: React.ReactNode;
	label: string;
};
