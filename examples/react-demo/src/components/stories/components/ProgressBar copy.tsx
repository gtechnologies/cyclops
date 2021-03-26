/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import { Animated, Easing, StyleSheet, View } from 'react-native-web';

interface ProgressBarProps {
	index: number;
	duration: number;
	isNewStory: boolean;
	currentIndex: number;
	next: () => void;
	length: number;
	active: 0 | 1 | 2;
	isLoaded: boolean;
	pause: boolean;
}

const ProgressBar = (props: ProgressBarProps) => {
	const { index, currentIndex, duration, length, active } = props;
	const [pauseTime, setPauseTime] = useState<number | null>(null);
	const [startTime, setStartTime] = useState<number | null>(null);
	const scale = useRef(new Animated.Value(0)).current;
	const [width, setWidth] = useState(0);

	const onLayoutAdded = (evt: any) => {
		setWidth(evt.width);
	};

	useEffect(() => {
		switch (active) {
			case 2:
				return scale.setValue(width);
			case 1:
				return props.isLoaded && !props.isNewStory
					? Animated.timing(scale, {
							toValue: width,
							duration: getDuration(),
							easing: Easing.linear,
							useNativeDriver: true,
					  }).start(({ finished }) => {
							if (finished) props.next();
					  })
					: scale.setValue(0);
			case 0:
				return scale.setValue(0);
			default:
				return scale.setValue(0);
		}
	});

	const getDuration = () => {
		const totalPlaytime = duration * 1000;

		if (props.pause) {
			return 50000;
		}

		if (pauseTime === null) {
			return totalPlaytime;
		}

		const lastTime = pauseTime - startTime;
		return totalPlaytime - lastTime;
	};

	useEffect(() => {
		if (index === currentIndex) {
			if (props.pause) {
				const endtime = Date.now();
				console.log('endtime', endtime);
				setPauseTime(endtime);
			}

			if (startTime === null) {
				setStartTime(Date.now());
			}
		}
	}, [props.pause]);

	return (
		<View
			onLayout={(evt) => onLayoutAdded(evt.nativeEvent.layout)}
			style={styles.container}
		>
			<Animated.View
				style={[
					styles.container,
					{
						width: scale,
						backgroundColor:
							index <= currentIndex ? 'white' : '#555',
						position: 'absolute',
						top: 0,
						margin: 0,
					},
				]}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 4,
		flex: 1,
		backgroundColor: '#555',
		margin: 2,
	},
});

export default ProgressBar;
