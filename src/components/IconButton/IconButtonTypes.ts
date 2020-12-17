import { ReactNode } from 'react';
import { ButtonPropsNative, ButtonPropsWeb } from '../Button/ButtonTypes';
import React from 'react';

export type IconButtonPropsWeb = ButtonPropsWeb & {
	icon: React.ReactNode;
	label: string;
};

export type IconButtonPropsNative = ButtonPropsNative & {
	icon: React.ReactNode;
	label: string;
};
