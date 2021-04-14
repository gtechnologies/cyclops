import React from 'react';
import { View } from 'react-native';

import AllStories from './constants/AllStories';
import UserView from './components/UserView';
import { default as Stories } from './screens/Stories';

export const StoriesDemo: React.FC = (props) => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

	return (
		<Stories
			storyBlocks={AllStories}
			loading={loading}
			renderStory={(story: any) => {
				return (
					<View
						style={{
							flex: 1,
							width: '100%',
							backgroundColor: 'blue',
						}}
					></View>
				);
			}}
		/>
	);
};
