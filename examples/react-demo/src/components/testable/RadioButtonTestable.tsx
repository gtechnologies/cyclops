import React from 'react';
import { RadioButton } from 'cyclops/web';

interface RadioButtonTestableState {
	selected: boolean;
}

export class RadioButtonTestable extends React.Component<
	{},
	RadioButtonTestableState
> {
	state: RadioButtonTestableState = {
		selected: true,
	};

	render() {
		const { selected } = this.state;
		return (
			<RadioButton
				selected={selected}
				onValueChange={(value) => this.setState({ selected: value })}
			/>
		);
	}
}
