import React from 'react';

export type ModalProps = {
	animationType?: 'none' | 'slide' | 'fade';
	children: any;
	hardwareAccelerated?: boolean | null | undefined;
	onDismiss?: () => unknown | null | undefined;
	onOrientationChange?: (e: {
		orientation: 'portrait' | 'landscape';
	}) => void | null | undefined;
	onRequestClose?: () => void | null | undefined;
	onShow?: () => void | null | undefined;
	presentationStyle?:
		| ('fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen')
		| null
		| undefined;
	statusBarTranslucent?: boolean | null | undefined;
	supportedOrientations?:
		| Array<
				| 'portrait'
				| 'portrait-upside-down'
				| 'landscape'
				| 'landscape-left'
				| 'landscape-right'
		  >
		| null
		| undefined;
	transparent?: boolean | null | undefined;
	visible?: boolean | null | undefined;
};

export default class Modal extends React.PureComponent<ModalProps> {}
