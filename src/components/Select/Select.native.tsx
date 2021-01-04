import React, { ReactNode } from 'react';
import { useState } from 'react';
import {
	TextStyle as RNTextStyle,
	ViewStyle as RNViewStyle,
} from 'react-native';

import { CheckBox } from '../CheckBox/CheckBox.native';
import { TouchableOpacity } from '../TouchableOpacity/TouchableOpacity.native';
import { RadioButton } from '../RadioButton/RadioButton.native';
import { VFlex, View } from '../View/View.native';
import { Text } from '../Text/Text.native';
import { Padding, Colors } from '../../../styles';

interface Props {
	options: string[];
	multiSelect?: boolean;
	onChange?: (value: string | string[]) => void;
	labelStyle?: RNTextStyle;
	style?: RNViewStyle;
}

const defaultLabelStyle = {
	paddingLeft: Padding.ELEMENT_WEB,
};

export function Select(props: Props) {
	var optionElemets: ReactNode = [];

	let labelStyle = {
		...defaultLabelStyle,
		...props.labelStyle,
	};

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
							if (props.onChange) props.onChange(res);
						}}
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<CheckBox
							color={Colors.BASE}
							value={
								selection.indexOf(option) >= 0 ? true : false
							}
							onValueChange={() => {
								//need local var so it is updated immediately
								var res = selection;
								if (res.indexOf(option) >= 0)
									res = selection.filter(
										(item) => item != option && item != '',
									);
								else res = [...selection, option];

								setSelection(res);
								if (props.onChange) props.onChange(res);
							}}
						/>
						<Text style={labelStyle} type="body">
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
							if (props.onChange) props.onChange(option);
						}}
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<RadioButton
							style={props.style}
							selected={option == selection ? true : false}
							onValueChange={() => {
								setSelection(option);
								if (props.onChange) props.onChange(option);
							}}
						/>
						<Text style={labelStyle} type="body">
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
