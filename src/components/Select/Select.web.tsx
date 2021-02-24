import React, { ReactNode } from 'react';
import { useState } from 'react';
import {
	TextStyle as RNWTextStyle,
	ViewStyle as RNWViewStyle,
} from 'react-native-web';

import { CheckBox } from '../CheckBox/CheckBox.web';
import { TouchableOpacity } from '../TouchableOpacity/TouchableOpacity.web';
import { RadioButton } from '../RadioButton/RadioButton.web';
import { VFlex, View } from '../View/View.web';
import { Text } from '../Text/Text.web';
import { Padding, Colors } from '../../../styles';

interface Props {
	options: string[];
	multiSelect?: boolean;
	onChange?: (value: string | string[]) => void;
	labelStyle?: RNWTextStyle;
	style?: RNWViewStyle;
	color?: string;
	size?: number;
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

	const [selection, setSelection] = useState<string[] | undefined>(undefined);

	if (props.multiSelect) {
		// TODO: find a way to make useState type to string array that doesn't require filtering out the empty string later
		optionElemets = props.options.map((option) => {
			return (
				<View style={{ padding: Padding.ELEMENT_WEB }}>
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
