import React from 'react';
//import { SafeAreaView } from 'react-native';
import { Modal } from 'cyclops/native';

import { CheckBoxTestable } from './CheckBoxTestable';
import { RadioButtonTestable } from './RadioButtonTestable';
import { SafeAreaViewTestable } from './SafeAreaViewTestable';
import { ScrollViewTestable } from './ScrollViewTestable';
import { SelectTestable } from './SelectTestable';
import { TextInputTestable } from './TextInputTestable';

interface TestableModalProps {
	visible?: boolean;
}

export const TestableModal = (props: TestableModalProps) => {
	return (
		<Modal visible={props.visible} presentationStyle="formSheet">
			<TextInputTestable />
		</Modal>
	);
};
