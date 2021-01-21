import React from 'react';
import { TextInput } from 'cyclops/native';

export class TextInputTestable extends React.Component {
	render() {
		return (
			<TextInput
				style={{
					width: '100%',
					marginTop: 20,
				}}
				placeholder="Hallo"
				//multiline={true}
				type="rounded"
			/>
		);
	}
}
