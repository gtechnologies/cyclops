import { ButtonPropsNative, ButtonPropsWeb } from '../Button/ButtonTypes';

import { ClickableProps } from '../../types/Clickable';
import { Children, Icon } from '../../types/Children';

export enum IconButtonTypeEnum {
	none = 'none',
	filled = 'filled',
	outlined = 'outlined',
	ghost = 'ghost',
}
export type IconButtonType = 'none' | 'filled' | 'outlined' | 'ghost';

export type IconButtonPropsWeb = ButtonPropsWeb &
	ClickableProps & {
		icon: Icon;
		label: string;

		type?: IconButtonType;
		color?: string;

		// set the height and width of an IconButton
		size?: number | string;
	};

export type IconButtonPropsNative = ButtonPropsNative &
	ClickableProps & {
		icon: Icon;
		label: string;

		type?: IconButtonType;
		color?: string;

		// set the height and width of an IconButton
		size?: number | string;

		children?: Children;
	};
