import { ActivityIndicatorProps as RNWActivityIndicatorProps } from 'react-native-web';
import { ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native';

import { AlignItems } from '../../styles/Alignment';
import { Children } from '../../types/Children';

export type ActivityIndicatorPropsWeb = RNWActivityIndicatorProps &
	AlignItems & {};
export type ActivityIndicatorPropsNative = RNActivityIndicatorProps &
	AlignItems & {};
