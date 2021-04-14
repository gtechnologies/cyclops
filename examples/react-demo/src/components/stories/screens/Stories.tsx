import React, { useRef, useState } from 'react';
import {
	ActivityIndicator,
	// @ts-ignore
	FlatList,
	Image,
	Modal,
	// @ts-ignore
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native-web';
import ContentLoader from 'react-content-loader';
// import Modal from 'react-native-modalbox';

import CubeNavigationHorizontal from '../external/CubeNavigationHorizontal';
import AllStories from '../constants/AllStories';
import StoryBlockContainer from '../components/StoryBlockContainer';
import UserView from '../components/UserView';

import { Story, StoryBlock } from '../types';

const CIRCLE_SIZE = 66;

interface StoriesProps {
	storyBlocks: StoryBlock[] | undefined;
	/** Render a loading screen */
	loading?: boolean;
	renderStory?: (story: Story) => React.ReactNode;
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
					<circle cx="46" cy="38" r={CIRCLE_SIZE / 2} />
					<rect x="34" y="83" rx="5" ry="5" width="25" height="10" />
					<circle cx="137" cy="38" r={CIRCLE_SIZE / 2} />
					<rect x="124" y="83" rx="5" ry="5" width="25" height="10" />
					<circle cx="228" cy="38" r={CIRCLE_SIZE / 2} />
					<rect x="215" y="83" rx="5" ry="5" width="25" height="10" />
					<circle cx="320" cy="38" r={CIRCLE_SIZE / 2} />
					<rect x="307" y="83" rx="5" ry="5" width="25" height="10" />
					<circle cx="410" cy="38" r={CIRCLE_SIZE / 2} />
					<rect x="398" y="83" rx="5" ry="5" width="25" height="10" />
				</ContentLoader>
			) : (
				<FlatList
					data={storyBlocks}
					horizontal
					renderItem={({
						// @ts-ignore
						item,
						// @ts-ignore
						index,
					}) => (
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
					transparent={true}
					visible={isModalOpen}
					// @ts-ignore
					style={styles.modal}
					onRequestClose={onStoryClose}
				>
					{/* eslint-disable-next-line max-len */}
					<View
						style={{
							display: 'flex',
							flexDirection: 'column',
							backgroundColor: 'rgba(100,100,100,0.5)',
							width: '100%',
							height: '100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<View
							style={{
								width: '100%',
								maxWidth: 400,
								height: '100%',
								maxHeight: 711,
								backgroundColor: 'black',
								position: 'relative',
								// padding: 40,
								// justifyContent: 'center',
								// alignItems: 'center',
							}}
						>
							<CubeNavigationHorizontal
								callBackAfterSwipe={(g: any) =>
									onScrollChange(g)
								}
								ref={modalScroll}
								style={styles.container}
								initialPage={currentUserIndex}
								width={400}
								height={711}
							>
								{storyBlocks &&
									storyBlocks.map((item, index) => (
										<StoryBlockContainer
											onClose={onStoryClose}
											onStoryNext={onStoryNext}
											onStoryPrevious={onStoryPrevious}
											user={item}
											isNewStory={
												index !== currentUserIndex
											}
											renderStory={(story: any) => {
												return renderStory ? (
													renderStory(story)
												) : (
													<View
														style={{
															flex: 1,
															width: '100%',
															backgroundColor:
																'blue',
														}}
													></View>
												);
											}}
											renderStoryModal={(
												story: Story,
											) => {
												return renderStoryModal
													? renderStoryModal(story)
													: null;
											}}
											renderStoryBlockHeader={(
												storyBlock: any,
												storyIndex: any,
											) => {
												return renderStoryBlockHeader ? (
													renderStoryBlockHeader(
														storyBlock,
														storyIndex,
													)
												) : (
													<UserView
														name={storyBlock.title}
														profile={
															storyBlock.profile
														}
													/>
												);
											}}
										/>
									))}
							</CubeNavigationHorizontal>
						</View>
					</View>
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

Stories.defaultProps = {
	storyBlocks: AllStories,
	loading: true,
};

export default Stories;
