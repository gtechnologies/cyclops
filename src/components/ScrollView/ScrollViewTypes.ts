import { ScrollViewProps as RNWScrollViewProps } from 'react-native-web';
import { ScrollViewProps as RNScrollViewProps } from 'react-native';

// TODO: possibly implement AlignItems
// import { AlignItems } from '../../styles/Alignment';
import { Children } from '../../types/Children';

export type ScrollViewPropsWeb = RNWScrollViewProps & {};
export type ScrollViewPropsNative = RNScrollViewProps & {
	children?: Children;
};
