import React from 'react';
import { ViewStyle } from 'react-native';

import { View } from '../View/View.native';
import { CardPropsNative as CardProps } from './CardTypes';

// border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
//     -> makes the radius 0 when the card spans the whole screen
// box-shadow: 0 1px 2px var(--shadow-2);  shadow2 == rgba(0, 0, 0, 0.2);
// box-sizing: border-box;
// background-color: #FFFFFF;  var(--surface-background);
// position: relative;
// line-height: 1.34;
// overflow-y: hidden;
// overflow-x: hidden;

const defaultCardStyle: ViewStyle = {
	borderRadius: 8,
	shadowColor: '#000000',
	shadowOpacity: 0.2,
	shadowOffset: { width: 1, height: 2 },
	shadowRadius: 2,
	backgroundColor: '#FFFFFF',
	position: 'relative',
};

export const Card = (props: CardProps) => {
	let style: ViewStyle = {
		...defaultCardStyle,
		...props.style,
	};

	// Note: a content container is used because overflow: 'hidden' on mobile removes shadows
	return (
		<View style={style}>
			<View
				{...props}
				style={{
					borderRadius: 8,
					overflow: 'hidden',
					...props.contentStyle,
				}}
			>
				{props.children}
			</View>
		</View>
	);
};
