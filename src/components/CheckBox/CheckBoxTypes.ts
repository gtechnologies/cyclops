import { CheckBoxProps as RNWCheckBoxProps } from 'react-native-web';
import { CheckBoxProps as RNCheckBoxProps } from '@react-native-community/checkbox';

export type CheckBoxPropsWeb = RNWCheckBoxProps & {
	size?: string | number;
};
export type CheckBoxPropsNative = RNCheckBoxProps & {
	size?: string | number;

	color?: string;
};
