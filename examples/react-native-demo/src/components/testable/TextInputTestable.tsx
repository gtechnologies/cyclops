import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInput, VFlex } from 'cyclops/native';

export class TextInputTestable extends React.Component {
	rnTextInputRef = React.createRef<RNTextInput>();
	cyclopsTextInputRef = React.createRef<TextInput>();

	render() {
		return (
			<VFlex>
				<VFlex style={{ height: 20 }} />
				<RNTextInput
					ref={this.rnTextInputRef}
					autoFocus={true}
					onEndEditing={() =>
						this.cyclopsTextInputRef.current?.focus()
					}
					style={{ backgroundColor: 'red' }}
				/>
				<TextInput
					ref={this.cyclopsTextInputRef}
					style={{
						width: '100%',
						marginTop: 20,
					}}
					placeholder="Hallo"
					//multiline={true}
					type="rounded"
				/>
			</VFlex>
		);
	}
}
