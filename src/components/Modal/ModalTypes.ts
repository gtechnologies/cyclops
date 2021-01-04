import { ModalProps as RNWModalProps } from 'react-native-web';
import { ModalProps as RNModalProps } from 'react-native';

import { Children } from '../../types/Children';

export type ModalPropsWeb = RNWModalProps & {};
export type ModalPropsNative = RNModalProps & {
	children?: Children;
};
