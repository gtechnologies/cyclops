import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { View } from '../View/View.native';
import { CardPropsNative as CardProps } from './CardTypes';

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
	shadowColor: '#000000',
	shadowOpacity: 0.2,
	shadowOffset: { width: 1, height: 2 },
	shadowRadius: 2,
	backgroundColor: '#FFFFFF',
	position: 'relative',
	padding: Padding.ELEMENT_NATIVE,
};

export const Card = (props: CardProps) => {
	const { hideShadow, cornerType } = props;

	let style: StyleProp<ViewStyle> = {
		...defaultCardStyle,
		...(hideShadow && { shadowColor: 'transparent', shadowRadius: 0 }),
		...(cornerType !== 'rounded' && { borderRadius: 0 }),
		...(props.style as ViewStyle),
	};

	// Note: a content container is used because overflow: 'hidden' on mobile removes shadows
	return (
		<View style={style}>
			<View
				{...props}
				style={{
					flex: 1,
					borderRadius: 8,
					...(cornerType !== 'rounded' && { borderRadius: 0 }),
					overflow: 'hidden',
					...props.contentStyle,
				}}
			>
				{props.children}
			</View>
		</View>
	);
};

Card.defaultProps = {
	cornerType: 'rounded',
};
