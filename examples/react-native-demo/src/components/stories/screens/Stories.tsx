import React, { useRef, useState } from 'react';
import {
	FlatList,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
// import Modal from 'react-native-modalbox';
import CubeNavigationHorizontal from '../external/CubeNavigationHorizontal';
import AllStories from '../constants/AllStories';
import StoryBlockContainer from '../components/StoryBlockContainer';
import UserView from '../components/UserView';

import { StoryBlock } from '../types';
interface StoriesProps {
	storyBlocks: StoryBlock[] | undefined;
}

const Stories: React.FC<StoriesProps> = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	const [currentScrollValue, setCurrentScrollValue] = useState(0);
	const modalScroll = useRef(null);

	const { storyBlocks } = props;

	const onStorySelect = (index: number) => {
		setCurrentUserIndex(index);
		setIsModalOpen(true);
	};

	const onStoryClose = () => {
		setIsModalOpen(false);
	};

	const onStoryNext = (isScroll?: boolean) => {
		const newIndex = currentUserIndex + 1;
		if (storyBlocks && storyBlocks.length - 1 > currentUserIndex) {
			setCurrentUserIndex(newIndex);
			if (!isScroll) {
				// @ts-ignore
				modalScroll.current.scrollTo(newIndex, true);
			}
		} else {
			setIsModalOpen(false);
		}
	};

	const onStoryPrevious = (isScroll?: boolean) => {
		const newIndex = currentUserIndex - 1;
		if (currentUserIndex > 0) {
			setCurrentUserIndex(newIndex);
			if (!isScroll) {
				// @ts-ignore
				modalScroll.current.scrollTo(newIndex, true);
			}
		}
	};

	const onScrollChange = (scrollValue: number) => {
		if (currentScrollValue > scrollValue) {
			onStoryNext(true);
			console.log('next');
			setCurrentScrollValue(scrollValue);
		}
		if (currentScrollValue < scrollValue) {
			onStoryPrevious();
			console.log('previous');
			setCurrentScrollValue(scrollValue);
		}
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={storyBlocks}
				horizontal
				renderItem={({ item, index }) => (
					<TouchableOpacity onPress={() => onStorySelect(index)}>
						<Image
							style={styles.circle}
							source={{ uri: item.profile }}
							// @ts-ignore
							isHorizontal
						/>
						<Text style={styles.title}>{item.title}</Text>
					</TouchableOpacity>
				)}
			/>

			{isModalOpen && (
				<Modal
					animationType="slide"
					transparent={false}
					visible={isModalOpen}
					style={styles.modal}
					onRequestClose={onStoryClose}
				>
					{/* eslint-disable-next-line max-len */}
					<CubeNavigationHorizontal
						callBackAfterSwipe={(g: any) => onScrollChange(g)}
						ref={modalScroll}
						style={styles.container}
						initialPage={currentUserIndex}
					>
						{storyBlocks &&
							storyBlocks.map((item, index) => (
								<StoryBlockContainer
									onClose={onStoryClose}
									onStoryNext={onStoryNext}
									onStoryPrevious={onStoryPrevious}
									user={item}
									isNewStory={index !== currentUserIndex}
									renderStory={(story: any) => {
										return (
											<View
												style={{
													flex: 1,
													width: '100%',
													backgroundColor: 'orange',
												}}
											></View>
										);
									}}
									renderStoryBlockHeader={(
										// @ts-ignore
										storyBlock,
										// @ts-ignore
										storyIndex,
									) => {
										return (
											<UserView
												name={storyBlock.title}
												profile={storyBlock.profile}
											/>
										);
									}}
								/>
							))}
					</CubeNavigationHorizontal>
				</Modal>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingVertical: 50,
		backgroundColor: 'rgba(255,255,255,255)',
	},
	circle: {
		width: 66,
		margin: 4,
		height: 66,
		borderRadius: 33,
		borderWidth: 2,
		borderColor: '#72bec5',
	},
	modal: {
		flex: 1,
	},
	title: {
		fontSize: 9,
		textAlign: 'center',
	},
});

Stories.defaultProps = {
	storyBlocks: AllStories,
};

export default Stories;
