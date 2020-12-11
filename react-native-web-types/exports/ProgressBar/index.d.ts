import React from 'react';

import type { ColorValue } from '../../types';
import type { ViewProps } from '../View';

export type ProgressBarProps = ViewProps & {
	color?: ColorValue;
	indeterminate?: boolean;
	progress?: number;
	trackColor?: ColorValue;
};

export default class ProgressBar extends React.Component<ViewProps> {}
