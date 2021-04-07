import React, { useRef, useState } from 'react';
import {
	FlatList,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native-web';
// import Modal from 'react-native-modalbox';
import CubeNavigationHorizontal from '../external/CubeNavigationHorizontal';
import AllStories from '../constants/AllStories';
import StoryBlockContainer from '../components/StoryBlockContainer';
import UserView from '../components/UserView';

const Stories = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	const [currentScrollValue, setCurrentScrollValue] = useState(0);
	const modalScroll = useRef(null);

	const onStorySelect = (index) => {
		setCurrentUserIndex(index);
		setIsModalOpen(true);
	};

	const onStoryClose = () => {
		setIsModalOpen(false);
	};

	const onStoryNext = (isScroll) => {
		const newIndex = currentUserIndex + 1;
		if (AllStories.length - 1 > currentUserIndex) {
			setCurrentUserIndex(newIndex);
			if (!isScroll) {
				modalScroll.current.scrollTo(newIndex, true);
			}
		} else {
			setIsModalOpen(false);
		}
	};

	const onStoryPrevious = (isScroll) => {
		const newIndex = currentUserIndex - 1;
		if (currentUserIndex > 0) {
			setCurrentUserIndex(newIndex);
			if (!isScroll) {
				modalScroll.current.scrollTo(newIndex, true);
			}
		}
	};

	const onScrollChange = (scrollValue) => {
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

	const renderSeperator = () => (
		<View style={{ height: 1, backgroundColor: '#ccc' }} />
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={AllStories}
				horizontal
				renderItem={({ item, index }) => (
					<TouchableOpacity onPress={() => onStorySelect(index)}>
						<Image
							style={styles.circle}
							source={{ uri: item.profile }}
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
					onShow={() => {
						if (currentUserIndex > 0) {
							modalScroll.current.scrollTo(
								currentUserIndex,
								false,
							);
						}
					}}
					onRequestClose={onStoryClose}
				>
					{/* eslint-disable-next-line max-len */}
					<CubeNavigationHorizontal
						callBackAfterSwipe={(g) => onScrollChange(g)}
						ref={modalScroll}
						style={styles.container}
						initialPage={currentUserIndex}
					>
						{AllStories.map((item, index) => (
							<StoryBlockContainer
								onClose={onStoryClose}
								onStoryNext={onStoryNext}
								onStoryPrevious={onStoryPrevious}
								user={item}
								isNewStory={index !== currentUserIndex}
								renderStory={(story) => {
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
									storyBlock,
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

export default Stories;
