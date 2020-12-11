import React from 'react';

import type { TouchableWithoutFeedbackProps } from '../TouchableWithoutFeedback';
import type { ViewProps } from '../View';

type ViewStyle = ViewProps['style'];

export type TouchableOpacityProps = TouchableWithoutFeedbackProps & {
	activeOpacity?: number | null | undefined;
	style?: ViewStyle | null | undefined;
};

export default class TouchableOpacity extends React.Component<TouchableOpacityProps> {}
