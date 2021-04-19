import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import {
	ActivityIndicator,
	Animated,
	Dimensions,
	//Modal,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	// WebView,
} from 'react-native';
// import Modal from 'react-native-modalbox';
// import GestureRecognizer from 'react-native-swipe-gestures';
import StoryView from './StoryView';
import ProgressArray from './ProgressArray';

const SCREEN_WIDTH = Dimensions.get('window').width;

const StoryBlockContainer = (props) => {
	const { user } = props;
	const { stories = [] } = user || {};
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModelOpen, setModel] = useState(false);
	const [isPause, setIsPause] = useState(false);
	const [isLoaded, setLoaded] = useState(true);
	const [duration, setDuration] = useState(3);
	const story = stories.length ? stories[currentIndex] : {};
	const { isReadMore, url } = story || {};

	// const onVideoLoaded = (length) => {
	//   props.onVideoLoaded(length.duration);
	// };

	const changeStory = (evt) => {
		console.log(' a click just happened');
		console.log(evt);
		if (evt.locationX > SCREEN_WIDTH / 2) {
			nextStory();
		} else {
			prevStory();
		}
	};

	const nextStory = () => {
		if (stories.length - 1 > currentIndex) {
			setCurrentIndex(currentIndex + 1);
			// setLoaded(false);
			setDuration(3);
		} else {
			setCurrentIndex(0);
			props.onStoryNext();
		}
	};

	const prevStory = () => {
		if (currentIndex > 0 && stories.length) {
			setCurrentIndex(currentIndex - 1);
			// setLoaded(false);
			setDuration(3);
		} else {
			setCurrentIndex(0);
			props.onStoryPrevious();
		}
	};

	const onImageLoaded = () => {
		setLoaded(true);
	};

	const onVideoLoaded = (length) => {
		setLoaded(true);
		setDuration(length.duration);
	};

	const onPause = (result) => {
		setIsPause(result);
	};

	const onReadMoreOpen = () => {
		setIsPause(true);
		setModel(true);
	};
	const onReadMoreClose = () => {
		setIsPause(false);
		setModel(false);
	};

	const loading = () => {
		if (!isLoaded) {
			return (
				<View style={styles.loading}>
					<View style={{ width: 1, height: 1 }}>
						<StoryView
							onImageLoaded={onImageLoaded}
							pause
							onVideoLoaded={onVideoLoaded}
							story={story}
						/>
					</View>
					<ActivityIndicator color="white" />
				</View>
			);
		}
	};

	const config = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80,
	};

	const onSwipeDown = () => {
		if (!isModelOpen) {
			props.onClose();
		} else {
			setModel(false);
		}
	};

	const onSwipeUp = () => {
		if (!isModelOpen && isReadMore) {
			setModel(true);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, width: '100%' }}>
			{/* <GestureRecognizer
				onSwipeDown={onSwipeDown}
				onSwipeUp={onSwipeUp}
				config={config}
				style={styles.container}
			> */}
			<TouchableOpacity
				activeOpacity={1}
				delayLongPress={300}
				onPress={(e) => changeStory(e.nativeEvent)}
				onLongPress={() => onPause(true)}
				onPressOut={() => onPause(false)}
				style={styles.container}
			>
				<View style={styles.container}>
					{/* <StoryView
						onImageLoaded={onImageLoaded}
						pause={isPause}
						isNewStory={props.isNewStory}
						onVideoLoaded={onVideoLoaded}
						story={story}
					/>

					{loading()} */}

					<View
						style={{
							marginTop: 10,
							marginBottom: 10,
							width: '95%',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<ProgressArray
							next={nextStory}
							isLoaded={isLoaded}
							duration={duration}
							pause={isPause}
							isNewStory={props.isNewStory}
							stories={stories}
							currentIndex={currentIndex}
							currentStory={stories[currentIndex]}
							length={stories.map((_, i) => i)}
							progress={{ id: currentIndex }}
						/>
						<View style={{ width: '100%', flexDirection: 'row' }}>
							<View style={{ flex: 1 }}>
								{props.renderStoryBlockHeader(
									user,
									currentIndex,
								)}
							</View>
							<TouchableOpacity onPress={props.onClose}>
								<MaterialIcon
									size={40}
									name="close"
									color="white"
								/>
							</TouchableOpacity>
						</View>
					</View>
					{props.renderStory(story)}
				</View>
				{/* <Modal
				style={styles.modal}
				position="bottom"
				isOpen={isModelOpen}
				onClosed={onReadMoreClose}
			>
				<View style={styles.bar} />
				<WebView source={{ uri: 'https://www.google.com' }} />
			</Modal> */}
			</TouchableOpacity>
			{/* </GestureRecognizer> */}
			<View
				style={{
					width: '100%',
					height: 100,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					paddingBottom: 20,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						onReadMoreOpen();
					}}
				>
					<Text style={{ color: 'white', fontSize: 20 }}>
						See More
					</Text>
				</TouchableOpacity>
			</View>
			{isModelOpen && (
				<View
					style={{
						position: 'absolute',
						bottom: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'white',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						overflow: 'hidden',
					}}
				>
					<TouchableOpacity
						onPress={() => {
							onReadMoreClose();
						}}
					>
						<Text>Close</Text>
					</TouchableOpacity>
					{props.renderStoryModal(story)}
				</View>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: '#5568E5',
	},
	userView: {
		flexDirection: 'row',
		position: 'absolute',
		top: 55,
		width: '98%',
		alignItems: 'center',
	},
	name: {
		fontSize: 18,
		fontWeight: '500',
		marginLeft: 12,
		color: 'white',
	},
	time: {
		fontSize: 12,
		fontWeight: '400',
		marginTop: 3,
		marginLeft: 12,
		color: 'white',
	},
	content: { width: '100%', height: '100%' },
	loading: {
		backgroundColor: 'black',
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		width: '100%',
		height: '90%',
		backgroundColor: 'white',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	bar: {
		width: 50,
		height: 8,
		backgroundColor: 'gray',
		alignSelf: 'center',
		borderRadius: 4,
		marginTop: 8,
	},
});

export default StoryBlockContainer;
