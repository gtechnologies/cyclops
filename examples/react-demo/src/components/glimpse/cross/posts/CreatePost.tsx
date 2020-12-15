import React, { useState } from 'react';
import { Card, Text, View, Button, Image, TextInput } from 'cyclops/web';

export const CreatePost: React.FunctionComponent = () => {
	const [height, setHeight] = useState(40);
	const [color, setColor] = useState('grey');
	const [clearTextOnFocus, setClearTextOnFocus] = useState(true);
	return (
		<Card style={{ margin: 10, width: '100%' }}>
			<View
				alignItemsV="center"
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<Image
					style={{
						width: 50,
						height: 50,
						borderRadius: '50%',
						display: 'block',
						marginRight: 8,
					}}
					alignItemsV={'top'}
					source="https://pbs.twimg.com/profile_images/711015457134813188/7Qcunhqi_400x400.jpg"
				/>

				<Text
					type="subtitle"
					style={{
						width: 'fit-content',
						marginRight: 8,
						display: 'block',
					}}
				>
					Disguised Toast
				</Text>
			</View>
			<TextInput
				style={{
					border: '1px solid lightgrey',
					width: '95%',
					minHeight: 40,
					caretColor: 'black',
					margin: 10,
					padding: 5,
					height: height,
					fontWeight: '500',
					fontSize: '1.17em',
					color: color,
					fontFamily: 'SFProText-Regular',
				}}
				defaultValue="Post to your group! 🚀"
				alignItemsV="top"
				multiline="true"
				clearTextOnFocus={clearTextOnFocus}
				onContentSizeChange={(e: any) => {
					console.log(e.nativeEvent.contentSize.height);
					setHeight(e.nativeEvent.contentSize.height + 2);
				}}
				onChange={() => {
					setColor('black');
					setClearTextOnFocus(false);
				}}
			></TextInput>
			<View style={{ display: 'flex', flexDirection: 'row' }}>
				<Button
					style={{
						width: 100,
						display: 'inline',
						marginLeft: 10,
						textAlign: 'center',
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
		</Card>
	);
};
