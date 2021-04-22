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
	color?: string;
	size?: number;
	defaultSelection?: string[];
	containerStyle?: RNViewStyle;
}

const defaultLabelStyle = {
	paddingLeft: Padding.ELEMENT_WEB,
};

export const Select: React.FunctionComponent<Props> = (props: Props) => {
	var optionElemets: ReactNode = [];

	let labelStyle = {
		...defaultLabelStyle,
		...props.labelStyle,
	};

	const [selection, setSelection] = useState<string[] | undefined>(
		props.defaultSelection,
	);

	if (props.multiSelect) {
		// TODO: find a way to make useState type to string array that doesn't require filtering out the empty string later
		optionElemets = props.options.map((option) => {
			return (
				<View
					style={{
						padding: Padding.ELEMENT_WEB,
						...props.containerStyle,
					}}
				>
					<TouchableOpacity
						onPress={(e: any) => {
							//need local var so it is updated immediately
							var res = selection;
							if (res && res.indexOf(option) >= 0)
								res = selection?.filter(
									(item) => item != option && item != '',
								);
							else
								res = selection
									? [...selection, option]
									: [option];

							setSelection(res);
							if (props.onChange) props.onChange(res ?? []);
						}}
						style={{ display: 'flex', flexDirection: 'row' }}
						alignItemsV="center"
					>
						<CheckBox
							style={props.style}
							color={props.color ?? Colors.BASE}
							value={
								selection && selection.indexOf(option) >= 0
									? true
									: false
							}
							size={props.size}
						/>
						<Text style={labelStyle} type="body">
							{option}
						</Text>
					</TouchableOpacity>
				</View>
			);
		});
	} else {
		optionElemets = props.options.map((option) => {
			return (
				<View style={{ padding: Padding.ELEMENT_WEB }}>
					<TouchableOpacity
						onPress={(e: any) => {
							setSelection([option]);
							if (props.onChange) props.onChange(option);
						}}
						style={{ display: 'flex', flexDirection: 'row' }}
						alignItemsV="center"
					>
						<RadioButton
							style={props.style}
							selected={
								selection && option === selection[0]
									? true
									: false
							}
							onValueChange={() => {
								setSelection([option]);
								if (props.onChange) props.onChange(option);
							}}
							color={props.color}
							size={props.size}
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
};
