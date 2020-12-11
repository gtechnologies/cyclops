/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { ColorValue, GenericStyleProp } from '../../types';
import { TextStyle } from '../Text/types';
import { ViewProps } from '../View/types';

export type TextInputStyle = TextStyle & {
	caretColor?: ColorValue;
	resize?: 'none' | 'vertical' | 'horizontal' | 'both';
};

export type TextInputProps = ViewProps & {
	autoCapitalize?: 'characters' | 'none' | 'sentences' | 'words';
	autoComplete?: string | null | undefined;
	autoCompleteType?: string | null | undefined;
	// Compat with React Native (Bug react-native#26003)
	autoCorrect?: boolean | null | undefined;
	autoFocus?: boolean | null | undefined;
	blurOnSubmit?: boolean | null | undefined;
	clearTextOnFocus?: boolean | null | undefined;
	defaultValue?: string | null | undefined;
	dir?: ('auto' | 'ltr' | 'rtl') | null | undefined;
	disabled?: boolean | null | undefined;
	editable?: boolean | null | undefined;
	inputAccessoryViewID?: string | null | undefined;
	keyboardType?:
		| 'default'
		| 'email-address'
		| 'number-pad'
		| 'numbers-and-punctuation'
		| 'numeric'
		| 'phone-pad'
		| 'search'
		| 'url'
		| 'web-search';
	maxLength?: number | null | undefined;
	multiline?: boolean | null | undefined;
	numberOfLines?: number | null | undefined;
	onChange?: (e: any) => void;
	onChangeText?: (e: string) => void;
	onContentSizeChange?: (e: any) => void;
	onEndEditing?: (e: any) => void;
	onKeyPress?: (e: any) => void;
	onSelectionChange?: (e: any) => void;
	onScroll?: (e: any) => void;
	onSubmitEditing?: (e: any) => void;
	placeholder?: string | null | undefined;
	placeholderTextColor?: ColorValue | null | undefined;
	returnKeyType?:
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'search'
		| 'send';
	secureTextEntry?: boolean | null | undefined;
	selectTextOnFocus?: boolean | null | undefined;
	selection?: {
		start: number;
		end?: number;
	};
	selectionColor?: ColorValue | null | undefined;
	spellCheck?: boolean | null | undefined;
	style?: GenericStyleProp<TextInputStyle> | null | undefined;
	value?: string | null | undefined;
};
