import React from 'react';

import type { ColorValue } from '../../types';
import type { ViewProps } from '../View';

export type SwitchProps = ViewProps & {
	activeThumbColor?: ColorValue;
	activeTrackColor?: ColorValue;
	disabled?: boolean;
	onValueChange?: (e: any) => void;
	thumbColor?: ColorValue;
	trackColor?: ColorValue | { false: ColorValue; true: ColorValue };
	value?: boolean;
};

export default class Switch extends React.Component<SwitchProps> {}
