import React, { useState } from 'react';
import { ViewStyle, TouchableOpacity } from 'react-native-web';
import { View } from '../View/View.web';
import { Colors } from '../../styles/Colors';
import { GenericStyleProp } from 'react-native-web/types';
import { hasOnlyExpressionInitializer } from 'typescript';

interface Props {
	style?: ViewStyle;
	initialState?: boolean;
}

export function RadioButton(props: Props) {
	const [selected, setSelected] = useState(
		props.initialState ? props.initialState : false,
	);

	let style: GenericStyleProp<ViewStyle> = {
		height: 24,
		width: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: Colors.BASE,
		alignItems: 'center',
		justifyContent: 'center',
		...props.style,
	};
	return (
		<TouchableOpacity
			onPress={() => {
				setSelected(!selected);
			}}
		>
			<View style={style}>
				{selected ? (
					<View
						style={{
							height: 12,
							width: 12,
							borderRadius: 6,
							backgroundColor: Colors.BASE,
						}}
					/>
				) : null}
			</View>
		</TouchableOpacity>
	);
}
