import React from 'react';
import { TouchableOpacity, View } from 'cyclops/web';

interface TouchableOpacityTestableProps {}
interface TouchableOpacityTestableState {
	loading: boolean;
}
export class TouchableOpacityTestable extends React.Component<
	TouchableOpacityTestableProps,
	TouchableOpacityTestableState
> {
	constructor(props: TouchableOpacityTestableProps) {
		super(props);
		this.state = {
			loading: false,
		};
	}
	render() {
		const { loading } = this.state;
		return (
			<View style={{ backgroundColor: 'black' }}>
				<TouchableOpacity
					onClick={() => this.setState({ loading: !loading })}
					//style={{ height: 200 }}
					style={{ backgroundColor: 'red', borderRadius: 30 }}
				>
					<View style={{ height: 100, width: 100 }}></View>
					<View
						style={{
							backgroundColor: 'blue',
							position: 'absolute',
							height: 40,
							width: 40,
							bottom: -20,
						}}
					></View>
				</TouchableOpacity>
			</View>
		);
	}
}
