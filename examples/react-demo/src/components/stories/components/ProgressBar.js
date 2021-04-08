/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native-web';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
	const { index, currentIndex, duration, length, active } = props;
	const [pauseTime, setPauseTime] = useState(null);
	const [startTime, setStartTime] = useState(null);
	const scale = useRef(new Animated.Value(0)).current;
	const [width, setWidth] = useState(0);

	const onLayoutAdded = (evt) => {
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
							// set to false to enable the progress bar setting width
							// https://stackoverflow.com/questions/43022281/react-native-animation-event-style-property-is-not-supported/43538181
							useNativeDriver: false,
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
						// https://stackoverflow.com/questions/63976219/style-property-width-is-not-supported-by-native-animated-module-need-advice-f
						width: scale,
						//width,
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

ProgressBar.propTypes = {
	index: PropTypes.number,
	currentIndex: PropTypes.number,
};

const styles = StyleSheet.create({
	container: {
		height: 4,
		flex: 1,
		backgroundColor: '#555',
		margin: 2,
		borderRadius: 2,
	},
});

export default ProgressBar;