import React, { useState } from 'react';
import { Card, Text, View, Button, Image, TextInput } from 'cyclops/native';
import { Padding } from 'cyclops/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props {
	userName: string;
	group: string;
	profilePicUrl?: string;
}

export const CreatePost: React.FunctionComponent<Props> = (props: Props) => {
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
					{props.profilePicUrl && (
						<Image
							style={{
								width: 50,
								height: 50,
								borderRadius: 50,
								display: 'flex',
								marginRight: 8,
							}}
							source={{
								uri: props.profilePicUrl,
							}}
						/>
					)}

					<Text
						type="subtitle"
						style={{
							marginRight: 8,
							display: 'flex',
						}}
					>
						{props.userName}
					</Text>
				</View>
				<TextInput
					style={{
						borderColor: Colors.LIGHT_GRAY,
						borderWidth: 1,
						width: '95%',
						minHeight: 40,
						margin: 10,
						padding: Padding.ELEMENT_NATIVE,
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
					<Text type="subtitle"> ‣ {props.group}</Text>
				</View>
			</View>
		</Card>
	);
};
