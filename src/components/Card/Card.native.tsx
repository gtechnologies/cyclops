import { View } from '../View/View.native';
import { ViewProps } from '../View/ViewTypes';
import React from 'react';
import { ViewStyle } from 'react-native';

// border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
//     -> makes the radius 0 when the card spans the whole screen
// box-shadow: 0 1px 2px var(--shadow-2);  shadow2 == rgba(0, 0, 0, 0.2);
// box-sizing: border-box;
// background-color: #FFFFFF;  var(--surface-background);
// position: relative;
// line-height: 1.34;
// overflow-y: hidden;
// overflow-x: hidden;

const cardStyles: ViewStyle = {
	borderRadius: 8,
	shadowColor: '#000000',
	shadowOpacity: 0.2,
	shadowOffset: { width: 1, height: 2 },
	shadowRadius: 0,
	backgroundColor: '#FFFFFF',
	position: 'relative',
};

export const Card = (props: ViewProps) => {
	return (
		<View style={{ ...cardStyles }} {...props}>
			{props.children}
		</View>
	);
};
