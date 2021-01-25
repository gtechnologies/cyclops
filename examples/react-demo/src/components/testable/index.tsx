import React from 'react';
import { Modal } from 'cyclops/native';

import { ButtonTestable } from './ButtonTestable';
import { CardTestable } from './CardTestable';
import { CheckBoxTestable } from './CheckBoxTestable';
import { RadioButtonTestable } from './RadioButtonTestable';
import { SafeAreaViewTestable } from './SafeAreaViewTestable';
import { ScrollViewTestable } from './ScrollViewTestable';
import { SelectTestable } from './SelectTestable';
import { TouchableOpacityTestable } from './TouchableOpacityTestable';
import { ViewTestable } from './ViewTestable';

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
			<TouchableOpacityTestable />
		</Modal>
	);
};
