import { CheckBoxProps as RNWCheckBoxProps } from 'react-native-web';

export type CheckBoxPropsWeb = RNWCheckBoxProps & {
	size?: string | number;
};
export type CheckBoxPropsNative = {
	size?: string | number;

	color?: string;
};
