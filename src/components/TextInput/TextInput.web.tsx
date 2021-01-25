// TODO: bring this up to part with the mobile methods
import React from 'react';
import {
	TextInput as RNWTextInput,
	TextInputProps,
	TextInputStyle,
} from 'react-native-web';

export class TextInput extends React.PureComponent<TextInputProps> {
	static defaultProps = {
		type: 'none',
	};

	ref = React.createRef<RNWTextInput>();

	render() {
		const { props } = this;
		return <RNWTextInput ref={this.ref} {...props} />;
	}
}
