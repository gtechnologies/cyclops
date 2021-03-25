import React from 'react';
import { ViewStyle } from 'react-native';
import { Dialog as RNPDialog, Portal } from 'react-native-paper';

interface DialogProps {
	visible: boolean;
	children: React.ReactNode;

	dismissable?: boolean;
	onDismiss?: () => void;
	style?: ViewStyle;
}

export const Dialog: React.FC<DialogProps> = (props) => {
	return (
		<Portal.Host>
			<RNPDialog {...props}>{props.children}</RNPDialog>
		</Portal.Host>
	);
};
