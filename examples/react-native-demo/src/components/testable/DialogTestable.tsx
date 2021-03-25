import React from 'react';
import {
	Button,
	Dialog,
	HFlex,
	Text,
	TouchableOpacity,
	VFlex,
} from 'cyclops/native';

export const DialogTestable = () => {
	const [showDialog, setShowDialog] = React.useState(false);
	return (
		<VFlex alignItemsH="left">
			<HFlex>
				<Button
					label="toggle"
					onClick={() => {
						setShowDialog(!showDialog);
					}}
				/>
			</HFlex>
			<Dialog visible={showDialog}>
				<Text>Hallo</Text>
				<Text type="pagetitle">What the heck</Text>
			</Dialog>
		</VFlex>
	);
};
