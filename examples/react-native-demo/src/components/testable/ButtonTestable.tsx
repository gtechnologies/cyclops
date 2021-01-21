import React from 'react';
import { Button } from 'cyclops/native';

interface ButtonTestableProps {}
interface ButtonTestableState {
	loading: boolean;
}
export class ButtonTestable extends React.Component<
	ButtonTestableProps,
	ButtonTestableState
> {
	constructor(props: ButtonTestableProps) {
		super(props);
		this.state = {
			loading: false,
		};
	}
	render() {
		const { loading } = this.state;
		return (
			<Button
				label="Hello"
				loading={loading}
				onClick={() => this.setState({ loading: !loading })}
				//style={{ height: 200 }}
			/>
		);
	}
}
