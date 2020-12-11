/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { ColorValue, GenericStyleProp, LayoutEvent } from '../../types';

import {
	AnimationStyles,
	BorderStyles,
	InteractionStyles,
	LayoutStyles,
	ShadowStyles,
	TransformStyles,
} from '../../types/styles';

type NumberOrString = number | string;

type OverscrollBehaviorValue = 'auto' | 'contain' | 'none';

export type ViewStyle = AnimationStyles &
	BorderStyles &
	InteractionStyles &
	LayoutStyles &
	ShadowStyles &
	TransformStyles & {
		backdropFilter?: string | null | undefined;
		backgroundAttachment?: string | null | undefined;
		backgroundBlendMode?: string | null | undefined;
		backgroundClip?: string | null | undefined;
		backgroundColor?: ColorValue | null | undefined;
		backgroundImage?: string | null | undefined;
		backgroundOrigin?: 'border-box' | 'content-box' | 'padding-box';
		backgroundPosition?: string | null | undefined;
		backgroundRepeat?: string | null | undefined;
		backgroundSize?: string | null | undefined;
		boxShadow?: string | null | undefined;
		clip?: string | null | undefined;
		filter?: string | null | undefined;
		opacity?: number | null | undefined;
		outlineColor?: ColorValue | null | undefined;
		outlineOffset?: NumberOrString | null | undefined;
		outlineStyle?: string | null | undefined;
		outlineWidth?: NumberOrString | null | undefined;
		overscrollBehavior?: OverscrollBehaviorValue | null | undefined;
		overscrollBehaviorX?: OverscrollBehaviorValue | null | undefined;
		overscrollBehaviorY?: OverscrollBehaviorValue | null | undefined;
		scrollbarWidth?: 'auto' | 'none' | 'thin';
		scrollSnapAlign?: string | null | undefined;
		scrollSnapType?: string | null | undefined;
		WebkitMaskImage?: string | null | undefined;
		WebkitOverflowScrolling?: 'auto' | 'touch';
	};

export type ViewProps = {
	accessibilityLabel?: string | null | undefined;
	accessibilityLiveRegion?: 'none' | 'polite' | 'assertive';
	accessibilityRole?: string | null | undefined;
	accessibilityState?: {
		busy?: boolean | null | undefined;
		checked?: (boolean | null | undefined) | 'mixed';
		disabled?: boolean | null | undefined;
		expanded?: boolean | null | undefined;
		grabbed?: boolean | null | undefined;
		hidden?: boolean | null | undefined;
		invalid?: boolean | null | undefined;
		modal?: boolean | null | undefined;
		pressed?: boolean | null | undefined;
		readonly?: boolean | null | undefined;
		required?: boolean | null | undefined;
		selected?: boolean | null | undefined;
	};
	accessibilityValue?: {
		max?: number | null | undefined;
		min?: number | null | undefined;
		now?: number | null | undefined;
		text?: string | null | undefined;
	};
	accessible?: boolean;
	children?: any | null | undefined;
	importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants';
	nativeID?: string | null | undefined;
	onBlur?: (e: any) => void;
	onClick?: (e: any) => void;
	onClickCapture?: (e: any) => void;
	onContextMenu?: (e: any) => void;
	onFocus?: (e: any) => void;
	onKeyDown?: (e: any) => void;
	onKeyUp?: (e: any) => void;
	onLayout?: (e: LayoutEvent) => void;
	onMoveShouldSetResponder?: (e: any) => boolean;
	onMoveShouldSetResponderCapture?: (e: any) => boolean;
	onResponderEnd?: (e: any) => void;
	onResponderGrant?: (e: any) => void;
	onResponderMove?: (e: any) => void;
	onResponderReject?: (e: any) => void;
	onResponderRelease?: (e: any) => void;
	onResponderStart?: (e: any) => void;
	onResponderTerminate?: (e: any) => void;
	onResponderTerminationRequest?: (e: any) => boolean;
	onScrollShouldSetResponder?: (e: any) => boolean;
	onScrollShouldSetResponderCapture?: (e: any) => boolean;
	onSelectionChangeShouldSetResponder?: (e: any) => boolean;
	onSelectionChangeShouldSetResponderCapture?: (e: any) => boolean;
	onStartShouldSetResponder?: (e: any) => boolean;
	onStartShouldSetResponderCapture?: (e: any) => boolean;
	pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
	style?: GenericStyleProp<ViewStyle>;
	testID?: string | null | undefined;
	// unstable
	dataSet?: Object | null | undefined;
	onMouseDown?: (e: any) => void;
	onMouseEnter?: (e: any) => void;
	onMouseLeave?: (e: any) => void;
	onMouseMove?: (e: any) => void;
	onMouseOver?: (e: any) => void;
	onMouseOut?: (e: any) => void;
	onMouseUp?: (e: any) => void;
	onScroll?: (e: any) => void;
	onTouchCancel?: (e: any) => void;
	onTouchCancelCapture?: (e: any) => void;
	onTouchEnd?: (e: any) => void;
	onTouchEndCapture?: (e: any) => void;
	onTouchMove?: (e: any) => void;
	onTouchMoveCapture?: (e: any) => void;
	onTouchStart?: (e: any) => void;
	onTouchStartCapture?: (e: any) => void;
	onWheel?: (e: any) => void;
	href?: string | null | undefined;
	rel?: string | null | undefined;
	target?: string | null | undefined;
};
