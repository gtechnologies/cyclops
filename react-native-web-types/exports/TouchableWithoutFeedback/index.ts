/**
 * TouchableWithoutFeedback
 *
 * Notes:
 * - react-native-web's implementation of TouchableWithoutFeedback doesn't allow for styling the element itself and just returns children
 */

import * as React from 'react';

import type { PressResponderConfig } from '../../modules/usePressEvents/PressResponder';
import type { ViewProps } from '../View';

export type TouchableWithoutFeedbackProps = {
	accessibilityLabel?: ViewProps['accessibilityLabel'];
	accessibilityLiveRegion?: ViewProps['accessibilityLiveRegion'];
	accessibilityRole?: ViewProps['accessibilityRole'];
	accessibilityState?: ViewProps['accessibilityState'];
	accessibilityValue?: ViewProps['accessibilityValue'];
	accessible?: ViewProps['accessible'];
	children?: React.ReactNode | null | undefined;
	delayLongPress?: number | null | undefined;
	delayPressIn?: number | null | undefined;
	delayPressOut?: number | null | undefined;
	disabled?: boolean | null | undefined;
	focusable?: boolean | null | undefined;
	importantForAccessibility?: ViewProps['importantForAccessibility'];
	nativeID?: ViewProps['nativeID'];
	onBlur?: ViewProps['onBlur'];
	onFocus?: ViewProps['onFocus'];
	onLayout?: ViewProps['onLayout'];
	onLongPress?: PressResponderConfig['onLongPress'];
	onPress?: PressResponderConfig['onPress'];
	onPressIn?: PressResponderConfig['onPressStart'];
	onPressOut?: PressResponderConfig['onPressEnd'];
	rejectResponderTermination?: boolean | null | undefined;
	testID?: ViewProps['testID'];
};
