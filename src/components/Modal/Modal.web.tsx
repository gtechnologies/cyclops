import React from 'react';
import { Modal as RNWModal } from 'react-native-web';

import { ModalPropsWeb as ModalProps } from './ModalTypes';

export const Modal = (props: ModalProps) => {
	return <RNWModal {...props} />;
};
