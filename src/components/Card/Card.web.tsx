import React from 'react';
import { ViewStyle } from 'react-native-web';

import { View } from '../View/View.web';
import { CardPropsWeb as CardProps, CardPropsWeb } from './CardTypes';

import { Padding } from '../../styles/Padding';

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
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
	boxSizing: 'border-box',
	backgroundColor: '#FFFFFF',
	position: 'relative',
	overflow: 'hidden',
	width: 'fit-content',
	padding: Padding.ELEMENT_WEB,
	textAlign: 'left',
};

export const Card = (props: CardPropsWeb) => {
	let style: ViewStyle = {
		...defaultCardStyle,
		...props.style,
	};

	// Note: a content container is used because overflow: 'hidden' on mobile removes shadows
	return (
		<View {...props} style={style}>
			<View
				style={{
					alignItems: 'end',
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
