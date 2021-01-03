import React from 'react';
import { CheckBox } from 'cyclops/web';

interface CheckBoxTestableState {
	checked: boolean;
}
export class CheckBoxTestable extends React.PureComponent<
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
