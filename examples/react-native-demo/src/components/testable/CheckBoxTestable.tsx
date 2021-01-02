import React from 'react';
import { CheckBox } from 'cyclops/native';

interface CheckBoxTestableState {
	checked: boolean;
}
export class CheckBoxTestable extends React.Component<
	{},
	CheckBoxTestableState
> {
	state: CheckBoxTestableState = {
		checked: false,
	};

	render() {
		const { checked } = this.state;
		return (
			<CheckBox
				value={checked}
				onValueChange={(value) => {
					this.setState({ checked: value });
				}}
				size={30}
			/>
		);
	}
}
