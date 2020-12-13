import { TouchableOpacityProps } from 'react-native-web';
import { TouchableOpacityProps as NativeTouchableOpacityProps } from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { Children } from '../../types/Children';

export type ButtonProps = TouchableOpacityProps & AlignItems & {};
export type NativeButtonProps = NativeTouchableOpacityProps &
	AlignItems & {
		children?: Children;
	};
