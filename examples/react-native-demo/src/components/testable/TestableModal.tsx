import React from 'react';
import { Modal, SafeAreaView } from 'react-native';

import { ScrollViewTestable } from './ScrollViewTestable';

export const TestableModal = () => {
	return (
		<Modal>
			<SafeAreaView>
				<ScrollViewTestable />
			</SafeAreaView>
		</Modal>
	);
};
