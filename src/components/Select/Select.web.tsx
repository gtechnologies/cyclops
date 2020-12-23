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
	onChange: (value: string | string[]) => void;
}

export function Select(props: Props) {
	var optionElemets: ReactNode = [];

	if (props.multiSelect) {
		// TODO: find a way to make useState type to string array that doesn't require filtering out the empty string later
		const [selection, setSelection] = useState(['']);
		optionElemets = props.options.map((option) => {
			return (
				<View style={{ padding: Padding.ELEMENT_WEB }}>
					<TouchableOpacity
						onPress={(e: any) => {
							//need local var so it is updated immediately
							var res = selection;
							if (res.indexOf(option) >= 0)
								res = selection.filter(
									(item) => item != option && item != '',
								);
							else res = [...selection, option];

							setSelection(res);
							props.onChange(res);
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
						onPress={(e: any) => {
							setSelection(option);
							props.onChange(option);
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
	// need alignitems to something other than the default stretch, or the touchable opacity
	// will expand far past the text and button for an option on the select
	return <View style={{ alignItems: 'flex-start' }}>{optionElemets}</View>;
}
