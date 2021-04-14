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
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';
// import Modal from 'react-native-modalbox';

import CubeNavigationHorizontal from '../external/CubeNavigationHorizontal';
import StoryBlockContainer from '../components/StoryBlockContainer';
import UserView from '../components/UserView';

import { Story, StoryBlock } from '../types';

const CIRCLE_SIZE = 66;

interface StoriesProps {
	storyBlocks: StoryBlock[] | undefined;
	/** Render a loading screen */
	loading?: boolean;
	renderStory: (story: Story) => React.ReactNode;
	renderStoryModal?: (story: Story) => React.ReactNode;
	renderStoryBlockHeader?: (
		storyBlock: StoryBlock,
		index: number,
	) => React.ReactNode;
}

const Stories: React.FC<StoriesProps> = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	const [currentScrollValue, setCurrentScrollValue] = useState(0);
	const modalScroll = useRef(null);

	const {
		storyBlocks,
		loading,
		renderStory,
		renderStoryModal,
		renderStoryBlockHeader,
	} = props;

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
			{loading ? (
				<ContentLoader
					width={500}
					height={100}
					viewBox="0 0 500 100"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
					{...props}
				>
					<Circle cx="46" cy="38" r={CIRCLE_SIZE / 2} />
					<Rect x="34" y="83" rx="5" ry="5" width="25" height="10" />
					<Circle cx="137" cy="38" r={CIRCLE_SIZE / 2} />
					<Rect x="124" y="83" rx="5" ry="5" width="25" height="10" />
					<Circle cx="228" cy="38" r={CIRCLE_SIZE / 2} />
					<Rect x="215" y="83" rx="5" ry="5" width="25" height="10" />
					<Circle cx="320" cy="38" r={CIRCLE_SIZE / 2} />
					<Rect x="307" y="83" rx="5" ry="5" width="25" height="10" />
					<Circle cx="410" cy="38" r={CIRCLE_SIZE / 2} />
					<Rect x="398" y="83" rx="5" ry="5" width="25" height="10" />
				</ContentLoader>
			) : (
				<FlatList
					data={storyBlocks}
					horizontal
					renderItem={({ item, index }) => (
						<TouchableOpacity
							onPress={() => onStorySelect(index)}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								width: 80,
							}}
						>
							<Image
								style={styles.circle}
								source={{ uri: item.profile }}
								// @ts-ignore
								isHorizontal
							/>
							<Text style={styles.title} numberOfLines={1}>
								{item.title}
							</Text>
						</TouchableOpacity>
					)}
				/>
			)}

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
										return renderStory(story);
									}}
									renderStoryModal={(story: Story) => {
										return renderStoryModal
											? renderStoryModal(story)
											: null;
									}}
									renderStoryBlockHeader={(
										// @ts-ignore
										storyBlock,
										// @ts-ignore
										storyIndex,
									) => {
										return renderStoryBlockHeader ? (
											renderStoryBlockHeader(
												storyBlock,
												storyIndex,
											)
										) : (
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
		display: 'flex',
		justifyContent: 'flex-start',
	},
	circle: {
		width: CIRCLE_SIZE,
		margin: 4,
		height: CIRCLE_SIZE,
		borderRadius: CIRCLE_SIZE / 2,
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
