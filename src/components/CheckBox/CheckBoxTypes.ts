import { CheckBoxProps as RNWCheckBoxProps } from 'react-native-web';
import { CheckBoxProps as RNCheckBoxProps } from 'react-native';

import { ClickableProps } from '../../types/Clickable';

export type CheckBoxPropsWeb = RNWCheckBoxProps &
	ClickableProps & {
		size?: string | number;
	};
export type CheckBoxPropsNative = RNCheckBoxProps &
	ClickableProps & {
		size?: string | number;

		color?: string;
	};
