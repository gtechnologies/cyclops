/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { ColorValue, DimensionValue } from './index';

type NumberOrString = number | string;

/**
 * Animations and transitions
 */
type AnimationDirection =
	| 'alternate'
	| 'alternate-reverse'
	| 'normal'
	| 'reverse';
type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both';
type AnimationIterationCount = number | 'infinite';
type AnimationKeyframes = string | Object;
type AnimationPlayState = 'paused' | 'running';

export type AnimationStyles = {
	animationDelay?: (string | Array<string>) | null | undefined;
	animationDirection?:
		| (AnimationDirection | Array<AnimationDirection>)
		| null
		| undefined;
	animationDuration?: (string | Array<string>) | null | undefined;
	animationFillMode?:
		| (AnimationFillMode | Array<AnimationFillMode>)
		| null
		| undefined;
	animationIterationCount?:
		| (AnimationIterationCount | Array<AnimationIterationCount>)
		| null
		| undefined;
	animationKeyframes?:
		| (AnimationKeyframes | Array<AnimationKeyframes>)
		| null
		| undefined;
	animationPlayState?:
		| (AnimationPlayState | Array<AnimationPlayState>)
		| null
		| undefined;
	animationTimingFunction?: (string | Array<string>) | null | undefined;
	transitionDelay?: (string | Array<string>) | null | undefined;
	transitionDuration?: (string | Array<string>) | null | undefined;
	transitionProperty?: (string | Array<string>) | null | undefined;
	transitionTimingFunction?: (string | Array<string>) | null | undefined;
};

/**
 * Border
 */
type BorderRadiusValue = number | string;
type BorderStyleValue = 'solid' | 'dotted' | 'dashed';

export type BorderStyles = {
	borderColor?: ColorValue | null | undefined;
	borderBottomColor?: ColorValue | null | undefined;
	borderEndColor?: ColorValue | null | undefined;
	borderLeftColor?: ColorValue | null | undefined;
	borderRightColor?: ColorValue | null | undefined;
	borderStartColor?: ColorValue | null | undefined;
	borderTopColor?: ColorValue | null | undefined;
	borderRadius?: BorderRadiusValue | null | undefined;
	borderBottomEndRadius?: BorderRadiusValue | null | undefined;
	borderBottomLeftRadius?: BorderRadiusValue | null | undefined;
	borderBottomRightRadius?: BorderRadiusValue | null | undefined;
	borderBottomStartRadius?: BorderRadiusValue | null | undefined;
	borderTopEndRadius?: BorderRadiusValue | null | undefined;
	borderTopLeftRadius?: BorderRadiusValue | null | undefined;
	borderTopRightRadius?: BorderRadiusValue | null | undefined;
	borderTopStartRadius?: BorderRadiusValue | null | undefined;
	borderStyle?: BorderStyleValue | null | undefined;
	borderBottomStyle?: BorderStyleValue | null | undefined;
	borderEndStyle?: BorderStyleValue | null | undefined;
	borderLeftStyle?: BorderStyleValue | null | undefined;
	borderRightStyle?: BorderStyleValue | null | undefined;
	borderStartStyle?: BorderStyleValue | null | undefined;
	borderTopStyle?: BorderStyleValue | null | undefined;
};

/**
 * Interactions
 */
type CursorValue =
	| 'alias'
	| 'all-scroll'
	| 'auto'
	| 'cell'
	| 'context-menu'
	| 'copy'
	| 'crosshair'
	| 'default'
	| 'grab'
	| 'grabbing'
	| 'help'
	| 'pointer'
	| 'progress'
	| 'wait'
	| 'text'
	| 'vertical-text'
	| 'move'
	| 'none'
	| 'no-drop'
	| 'not-allowed'
	| 'zoom-in'
	| 'zoom-out' // resize
	| 'col-resize'
	| 'e-resize'
	| 'ew-resize'
	| 'n-resize'
	| 'ne-resize'
	| 'ns-resize'
	| 'nw-resize'
	| 'row-resize'
	| 's-resize'
	| 'se-resize'
	| 'sw-resize'
	| 'w-resize'
	| 'nesw-resize'
	| 'nwse-resize';

type TouchActionValue =
	| 'auto'
	| 'inherit'
	| 'manipulation'
	| 'none'
	| 'pan-down'
	| 'pan-left'
	| 'pan-right'
	| 'pan-up'
	| 'pan-x'
	| 'pan-y'
	| 'pinch-zoom';

type UserSelect = 'all' | 'auto' | 'contain' | 'none' | 'text';

export type InteractionStyles = {
	// https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Formal_syntax
	cursor?: CursorValue | null | undefined;
	// https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#Formal_syntax
	touchAction?: TouchActionValue | null | undefined;
	// https://developer.mozilla.org/en-US/docs/Web/CSS/user-select#Formal_syntax_2
	userSelect?: UserSelect | null | undefined;
	willChange?: string | null | undefined;
};

/**
 * Layout
 */
type OverflowValue = 'auto' | 'hidden' | 'scroll' | 'visible';
type VisiblilityValue = 'hidden' | 'visible';

export type LayoutStyles = {
	alignContent?:
		| 'center'
		| 'flex-end'
		| 'flex-start'
		| 'space-around'
		| 'space-between'
		| 'stretch';
	alignItems?:
		| ('baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch')
		| null
		| undefined;
	alignSelf?:
		| (
				| 'auto'
				| 'baseline'
				| 'center'
				| 'flex-end'
				| 'flex-start'
				| 'stretch'
		  )
		| null
		| undefined;
	backfaceVisibility?: VisiblilityValue | null | undefined;
	borderWidth?: DimensionValue | null | undefined;
	borderBottomWidth?: DimensionValue | null | undefined;
	borderEndWidth?: DimensionValue | null | undefined;
	borderLeftWidth?: DimensionValue | null | undefined;
	borderRightWidth?: DimensionValue | null | undefined;
	borderStartWidth?: DimensionValue | null | undefined;
	borderTopWidth?: DimensionValue | null | undefined;
	bottom?: DimensionValue | null | undefined;
	boxSizing?:
		| ('border-box' | 'content-box' | 'padding-box')
		| null
		| undefined;
	direction?: ('inherit' | 'ltr' | 'rtl') | null | undefined;
	display?: string | null | undefined;
	end?: DimensionValue | null | undefined;
	flex?: number | null | undefined;
	flexBasis?: DimensionValue | null | undefined;
	flexDirection?:
		| ('column' | 'column-reverse' | 'row' | 'row-reverse')
		| null
		| undefined;
	flexGrow?: number | null | undefined;
	flexShrink?: number | null | undefined;
	flexWrap?: ('nowrap' | 'wrap' | 'wrap-reverse') | null | undefined;
	height?: DimensionValue | null | undefined;
	justifyContent?:
		| (
				| 'center'
				| 'flex-end'
				| 'flex-start'
				| 'space-around'
				| 'space-between'
				| 'space-evenly'
		  )
		| null
		| undefined;
	left?: DimensionValue | null | undefined;
	margin?: DimensionValue | null | undefined;
	marginBottom?: DimensionValue | null | undefined;
	marginHorizontal?: DimensionValue | null | undefined;
	marginEnd?: DimensionValue | null | undefined;
	marginLeft?: DimensionValue | null | undefined;
	marginRight?: DimensionValue | null | undefined;
	marginStart?: DimensionValue | null | undefined;
	marginTop?: DimensionValue | null | undefined;
	marginVertical?: DimensionValue | null | undefined;
	maxHeight?: DimensionValue | null | undefined;
	maxWidth?: DimensionValue | null | undefined;
	minHeight?: DimensionValue | null | undefined;
	minWidth?: DimensionValue | null | undefined;
	order?: number | null | undefined;
	overflow?: OverflowValue | null | undefined;
	overflowX?: OverflowValue | null | undefined;
	overflowY?: OverflowValue | null | undefined;
	padding?: DimensionValue | null | undefined;
	paddingBottom?: DimensionValue | null | undefined;
	paddingHorizontal?: DimensionValue | null | undefined;
	paddingEnd?: DimensionValue | null | undefined;
	paddingLeft?: DimensionValue | null | undefined;
	paddingRight?: DimensionValue | null | undefined;
	paddingStart?: DimensionValue | null | undefined;
	paddingTop?: DimensionValue | null | undefined;
	paddingVertical?: DimensionValue | null | undefined;
	position?:
		| ('absolute' | 'fixed' | 'relative' | 'static' | 'sticky')
		| null
		| undefined;
	right?: DimensionValue | null | undefined;
	start?: DimensionValue | null | undefined;
	top?: DimensionValue | null | undefined;
	visibility?: VisiblilityValue | null | undefined;
	width?: DimensionValue | null | undefined;
	zIndex?: number | null | undefined;

	/**
	 * @platform unsupported
	 */
	aspectRatio?: number | null | undefined;

	/**
	 * @platform web
	 */
	gridAutoColumns?: string | null | undefined;
	gridAutoFlow?: string | null | undefined;
	gridAutoRows?: string | null | undefined;
	gridColumnEnd?: string | null | undefined;
	gridColumnGap?: string | null | undefined;
	gridColumnStart?: string | null | undefined;
	gridRowEnd?: string | null | undefined;
	gridRowGap?: string | null | undefined;
	gridRowStart?: string | null | undefined;
	gridTemplateColumns?: string | null | undefined;
	gridTemplateRows?: string | null | undefined;
	gridTemplateAreas?: string | null | undefined;
};

/**
 * Shadows
 */
export type ShadowStyles = {
	shadowColor?: ColorValue | null | undefined;
	shadowOffset?: {
		width?: DimensionValue;
		height?: DimensionValue;
	};
	shadowOpacity?: number | null | undefined;
	shadowRadius?: DimensionValue | null | undefined;
};

/**
 * Transforms
 */
export type TransformStyles = {
	perspective?: NumberOrString | null | undefined;
	perspectiveOrigin?: string | null | undefined;
	transform?: Array<
		| { readonly perspective: NumberOrString }
		| { readonly rotate: string }
		| { readonly rotateX: string }
		| { readonly rotateY: string }
		| { readonly rotateZ: string }
		| { readonly scale: number }
		| { readonly scaleX: number }
		| { readonly scaleY: number }
		| { readonly scaleZ: number }
		| { readonly scale3d: string }
		| { readonly skewX: string }
		| { readonly skewY: string }
		| { readonly translateX: NumberOrString }
		| { readonly translateY: NumberOrString }
		| { readonly translateZ: NumberOrString }
		| { readonly translate3d: string }
	>;
	transformOrigin?: string | null | undefined;
	transformStyle?: ('flat' | 'preserve-3d') | null | undefined;
};
