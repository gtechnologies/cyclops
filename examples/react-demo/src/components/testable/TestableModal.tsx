import React from 'react';
import { Modal } from 'cyclops/web';

import { ScrollViewTestable } from './ScrollViewTestable';

interface TestableModalProps {
	visible?: boolean;
}

export const TestableModal = (props: TestableModalProps) => {
	return (
		<Modal visible={props.visible}>
			<ScrollViewTestable />
		</Modal>
	);
};
