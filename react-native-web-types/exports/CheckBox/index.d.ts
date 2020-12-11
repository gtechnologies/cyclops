import React from 'react';

import type { ColorValue } from '../../types';
import type { ViewProps } from '../View';

export type CheckBoxProps = ViewProps & {
	color?: ColorValue | null | undefined;
	disabled?: boolean;
	onChange?: (e: any) => void | null | undefined;
	onValueChange?: (e: any) => void | null | undefined;
	value?: boolean;
};

export default class CheckBox extends React.Component<CheckBoxProps> {}
