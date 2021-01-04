/**
 * WARNING: this modal is an early version release and currently has issues
 * Released: https://github.com/necolas/react-native-web/releases/tag/0.14.0
 * KNOWN ISSUES:
 * - when this modal is overlaid on top of a view with scrollable content, a scroll bar still appears pertaining to the underlyng content
 */
import React from 'react';
import { Modal as RNWModal } from 'react-native-web';

import { ModalPropsWeb as ModalProps } from './ModalTypes';

export const Modal = (props: ModalProps) => {
	return <RNWModal {...props} />;
};
