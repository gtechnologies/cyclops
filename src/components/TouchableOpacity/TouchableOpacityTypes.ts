import { TouchableOpacityProps as RNWTouchableOpacityProps } from 'react-native-web';
import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

// TODO: possibly implement AlignItems
//import { AlignItems } from '../../styles/Alignment';
import { ClickableProps } from '../../types/Clickable';

import { Children } from '../../types/Children';

export type TouchableOpacityPropsWeb = RNWTouchableOpacityProps &
	ClickableProps;

export type TouchableOpacityPropsNative = RNTouchableOpacityProps &
	ClickableProps & {
		children?: Children;
	};
