import React from 'react';

import type { ColorValue } from '../../types';
import type { ViewProps } from '../View';

export type RefreshControlProps = ViewProps & {
	colors?: Array<ColorValue>;
	enabled?: boolean;
	onRefresh?: () => void;
	progressBackgroundColor?: ColorValue;
	progressViewOffset?: number;
	refreshing: boolean;
	size?: 0 | 1;
	tintColor?: ColorValue;
	title?: string;
	titleColor?: ColorValue;
};

export default class RefreshControl extends React.Component<RefreshControlProps> {}
