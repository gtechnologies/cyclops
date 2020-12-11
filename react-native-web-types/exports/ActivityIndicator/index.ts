import React from 'react';

import type { ViewProps } from '../View';

export type ActivityIndicatorProps = ViewProps & {
	animating?: boolean;
	color?: string | null | undefined;
	hidesWhenStopped?: boolean;
	size?: 'small' | 'large' | number;
};

export default class ActivityIndicator extends React.Component<ActivityIndicatorProps> {}
