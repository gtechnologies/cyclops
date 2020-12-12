import { AlignItems } from '../../styles/Alignment';
import { TouchableOpacityProps } from 'react-native-web';
import { TouchableOpacityProps as NativeTouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps & AlignItems & {};
export type NativeButtonProps = NativeTouchableOpacityProps &
	AlignItems & {
		children?: React.ReactNode;
	};
