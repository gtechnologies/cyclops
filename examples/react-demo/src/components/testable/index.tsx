import React from 'react';
import { Modal } from 'cyclops/native';

import { ButtonTestable } from './ButtonTestable';
import { CheckBoxTestable } from './CheckBoxTestable';
import { RadioButtonTestable } from './RadioButtonTestable';
import { SafeAreaViewTestable } from './SafeAreaViewTestable';
import { ScrollViewTestable } from './ScrollViewTestable';
import { SelectTestable } from './SelectTestable';

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
			<ButtonTestable />
		</Modal>
	);
};
