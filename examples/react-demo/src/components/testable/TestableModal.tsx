import React from 'react';
//import { SafeAreaView } from 'react-native';
import { Modal } from 'cyclops/native';

import { SafeAreaViewTestable } from './SafeAreaViewTestable';
import { ScrollViewTestable } from './ScrollViewTestable';

interface TestableModalProps {
	visible?: boolean;
}

export const TestableModal = (props: TestableModalProps) => {
	return (
		<Modal
			visible={props.visible}
			style={{ zIndex: 1000 }}
			presentationStyle="fullScreen"
		>
			<SafeAreaViewTestable />
		</Modal>
	);
};
