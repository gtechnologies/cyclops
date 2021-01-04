import React from 'react';
import { Modal as RNModal } from 'react-native';

import { ModalPropsNative as ModalProps } from './ModalTypes';

export const Modal = (props: ModalProps) => {
	return <RNModal {...props} />;
};
