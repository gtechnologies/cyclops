import React, { ReactNode } from 'react';
import { useState } from 'react';
import { CheckBox, TouchableOpacity } from 'react-native-web';
import { RadioButton } from '../RadioButton/RadioButton.web';
import { VFlex, View } from '../View/View.web';
import { Text } from '../Text/Text.web';
import { Padding, Colors } from '../../../styles';

interface Props {
	options: string[];
	multiSelect?: boolean;
}

export function Select(props: Props) {
	var optionElemets: ReactNode = [];

	if (props.multiSelect) {
		const [selection, setSelection] = useState(['']);
		optionElemets = props.options.map((option) => {
			return (
				<View style={{ padding: Padding.ELEMENT_WEB }}>
					<TouchableOpacity
						onPress={() => {
							if (selection.indexOf(option) >= 0)
								setSelection(
									selection.filter((item) => item != option),
								);
							else setSelection([...selection, option]);
						}}
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<CheckBox
							color={Colors.BASE}
							value={
								selection.indexOf(option) >= 0 ? true : false
							}
						/>
						<Text
							style={{ paddingLeft: Padding.ELEMENT_WEB }}
							type="body"
						>
							{option}
						</Text>
					</TouchableOpacity>
				</View>
			);
		});
	} else {
		const [selection, setSelection] = useState('');
		optionElemets = props.options.map((option) => {
			return (
				<View style={{ padding: Padding.ELEMENT_WEB }}>
					<TouchableOpacity
						onPress={() => {
							setSelection(option);
						}}
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<RadioButton
							selected={option == selection ? true : false}
						/>
						<Text
							style={{ paddingLeft: Padding.ELEMENT_WEB }}
							type="body"
						>
							{option}
						</Text>
					</TouchableOpacity>
				</View>
			);
		});
	}

	return <View>{optionElemets}</View>;
}
