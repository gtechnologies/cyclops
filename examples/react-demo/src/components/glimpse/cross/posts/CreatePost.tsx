import React, { useState } from 'react';
import { Card, Text, View, Button, Image, TextInput } from 'cyclops/web';
import { Padding, Colors } from 'cyclops/styles';

interface Props {
	userName: string;
	group: string;
	profilePicUrl?: string;
}

export const CreatePost: React.FunctionComponent<Props> = (props: Props) => {
	const [height, setHeight] = useState(40);
	const [color, setColor] = useState(Colors.GRAY);
	const [clearTextOnFocus, setClearTextOnFocus] = useState(true);
	return (
		<Card style={{ margin: 10, width: '100%' }}>
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
						width: 'fit-content',
						marginRight: 8,
						display: 'block',
					}}
				>
					{props.userName}
				</Text>
			</View>
			<TextInput
				style={{
					// @ts-ignore
					border: '1px solid',
					borderColor: Colors.LIGHT_GRAY,
					borderRadius: 8,
					width: '95%',
					minHeight: 40,
					caretColor: Colors.DARK_GRAY,
					margin: 10,
					padding: Padding.ELEMENT_WEB,
					height: height,
					fontWeight: '500',
					fontSize: '1.17em',
					color: color,
					fontFamily: 'SFProText-Regular',
				}}
				defaultValue="Post to your group! 🚀"
				alignItemsV="top"
				multiline={true}
				clearTextOnFocus={clearTextOnFocus}
				onContentSizeChange={(e: any) => {
					console.log(e.nativeEvent.contentSize.height);
					setHeight(e.nativeEvent.contentSize.height);
				}}
				onChange={() => {
					setColor(Colors.DARK_GRAY);
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
					label={'Post'}
					labelType={'body'}
					type={'filled'}
				/>
				<Text type="subtitle"> ‣ {props.group}</Text>
			</View>
		</Card>
	);
};
