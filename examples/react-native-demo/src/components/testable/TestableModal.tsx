import React from 'react';
//import { SafeAreaView } from 'react-native';
import { Modal, SafeAreaView } from 'cyclops/native';

import { ScrollViewTestable } from './ScrollViewTestable';

interface TestableModalProps {
	visible?: boolean;
}

export const TestableModal = (props: TestableModalProps) => {
	return (
		<Modal visible={props.visible}>
			<SafeAreaView>
				<ScrollViewTestable />
			</SafeAreaView>
		</Modal>
	);
};