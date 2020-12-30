import { TouchableOpacityProps as RNWTouchableOpacityProps } from 'react-native-web';
import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { ClickableProps } from '../../types/Clickable';

import { Children } from '../../types/Children';

export type TouchableOpacityPropsWeb = RNWTouchableOpacityProps & AlignItems;

export type TouchableOpacityPropsNative = RNTouchableOpacityProps &
	AlignItems & {
		children?: Children;
	};
