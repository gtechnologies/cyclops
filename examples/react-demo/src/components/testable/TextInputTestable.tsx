import React from 'react';
import { TextInput, VFlex } from 'cyclops/web';

export class TextInputTestable extends React.Component {
	render() {
		return (
			<VFlex style={{ height: 300, backgroundColor: 'blue' }}>
				<TextInput
					style={{
						width: '100%',
						marginTop: 20,
					}}
					placeholder="Hallo"
					multiline={true}
					type="rounded"
					numberOfLines={2}
				/>
			</VFlex>
		);
	}
}
