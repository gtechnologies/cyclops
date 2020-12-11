/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { ColorValue, GenericStyleProp } from '../../types';
import { ViewProps, ViewStyle } from '../View/types';

type FontWeightValue =
	| 'normal'
	| 'bold'
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| '900';

type NumberOrString = number | string;

export type TextStyle = ViewStyle & {
	color?: ColorValue | null | undefined;
	fontFamily?: string | null | undefined;
	fontFeatureSettings?: string | null | undefined;
	fontSize?: NumberOrString | null | undefined;
	fontStyle?: 'italic' | 'normal';
	fontWeight?: FontWeightValue | null | undefined;
	fontVariant?: ReadonlyArray<
		| 'small-caps'
		| 'oldstyle-nums'
		| 'lining-nums'
		| 'tabular-nums'
		| 'proportional-nums'
	>;
	letterSpacing?: NumberOrString | null | undefined;
	lineHeight?: NumberOrString | null | undefined;
	textAlign?:
		| 'center'
		| 'end'
		| 'inherit'
		| 'justify'
		| 'justify-all'
		| 'left'
		| 'right'
		| 'start';
	textAlignVertical?: string | null | undefined;
	textDecorationColor?: ColorValue | null | undefined;
	textDecorationLine?:
		| 'none'
		| 'underline'
		| 'line-through'
		| 'underline line-through';
	textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
	textIndent?: NumberOrString | null | undefined;
	textOverflow?: string | null | undefined;
	textRendering?:
		| 'auto'
		| 'geometricPrecision'
		| 'optimizeLegibility'
		| 'optimizeSpeed';
	textShadowColor?: ColorValue | null | undefined;
	textShadowOffset?: { width?: number; height?: number };
	textShadowRadius?: number | null | undefined;
	textTransform?: 'capitalize' | 'lowercase' | 'none' | 'uppercase';
	unicodeBidi?:
		| 'normal'
		| 'bidi-override'
		| 'embed'
		| 'isolate'
		| 'isolate-override'
		| 'plaintext';
	whiteSpace?: string | null | undefined;
	wordBreak?: 'normal' | 'break-all' | 'break-word' | 'keep-all';
	wordWrap?: string | null | undefined;
	writingDirection?: 'auto' | 'ltr' | 'rtl';

	/* @platform web */
	MozOsxFontSmoothing?: string | null | undefined;
	WebkitFontSmoothing?: string | null | undefined;
};

export type TextProps = ViewProps & {
	accessibilityRole?:
		| 'button'
		| 'header'
		| 'heading'
		| 'label'
		| 'link'
		| 'listitem'
		| 'none'
		| 'text';
	accessibilityState?: {
		busy?: boolean | null | undefined;
		checked?: (boolean | null | undefined) | 'mixed';
		disabled?: boolean | null | undefined;
		expanded?: boolean | null | undefined;
		grabbed?: boolean | null | undefined;
		hidden?: boolean | null | undefined;
		invalid?: boolean | null | undefined;
		pressed?: boolean | null | undefined;
		readonly?: boolean | null | undefined;
		required?: boolean | null | undefined;
		selected?: boolean | null | undefined;
	};
	dir?: 'auto' | 'ltr' | 'rtl';
	numberOfLines?: number | null | undefined;
	onPress?: (e: any) => void;
	selectable?: boolean;
	style?: GenericStyleProp<TextStyle>;
	testID?: string | null | undefined;
};
