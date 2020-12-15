import React, { useState } from 'react';
import { Card, Text, View, Button, Image, TextInput } from 'cyclops/native';

export const CreatePost: React.FunctionComponent = () => {
	const [height, setHeight] = useState(40);
	const [color, setColor] = useState('grey');
	const [clearTextOnFocus, setClearTextOnFocus] = useState(true);
	return (
		<Card
			style={{
				display: 'flex',
				margin: 10,
				width: '100%',
			}}
		>
			<View style={{ minHeight: 150 }}>
				<View
					alignItemsV="center"
					style={{ display: 'flex', flexDirection: 'row' }}
				>
					<Image
						style={{
							width: 50,
							height: 50,
							borderRadius: 50,
							display: 'flex',
							marginRight: 8,
						}}
						source={{
							uri:
								'https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg',
						}}
					/>

					<Text
						type="subtitle"
						style={{
							marginRight: 8,
							display: 'flex',
						}}
					>
						Disguised Toast
					</Text>
				</View>
				<TextInput
					style={{
						borderColor: 'lightgrey',
						borderWidth: 1,
						width: '95%',
						minHeight: 40,
						margin: 10,
						padding: 5,
						height: height,
						color: color,
						fontSize: 22,
					}}
					defaultValue="Post to your group! 🚀"
					multiline={true}
					clearTextOnFocus={clearTextOnFocus}
					onContentSizeChange={(e: any) => {
						console.log(e.nativeEvent.contentSize.height);
						setHeight(e.nativeEvent.contentSize.height + 10);
					}}
					onChange={() => {
						setColor('black');
						setClearTextOnFocus(false);
					}}
				></TextInput>
				<View
					alignItemsV="center"
					style={{ display: 'flex', flexDirection: 'row' }}
				>
					<Button
						style={{
							width: 100,
							marginLeft: 10,
						}}
						alignItemsH="center"
						label={'Post'}
						labelType={'body'}
						type={'filled'}
					/>
					<Text type="subtitle" style={{ padding: 5 }}>
						{' '}
						‣ Hearthstone
					</Text>
				</View>
			</View>
		</Card>
	);
};
