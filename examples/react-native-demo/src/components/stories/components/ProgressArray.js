import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';

const ProgressArray = (props) => {
	const opacity = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		if (props.pause) {
			Animated.timing(opacity, {
				toValue: 0,
				timing: 300,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(opacity, {
				toValue: 1,
				timing: 300,
				useNativeDriver: true,
			}).start();
		}
	}, [props.pause]);

	return (
		<Animated.View style={[styles.progressBarArray, { opacity }]}>
			{props.length.map((i, index) => (
				<ProgressBar
					index={index}
					duration={props.duration || 3}
					isNewStory={props.isNewStory}
					currentIndex={props.currentIndex}
					next={props.next}
					length={props.stories.length}
					active={
						i === props.currentIndex
							? 1
							: i < props.currentIndex
							? 2
							: 0
					}
					isLoaded={props.isLoaded}
					pause={props.pause}
				/>
			))}
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	progressBarArray: {
		flexDirection: 'row',
		width: '100%',
		height: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default ProgressArray;