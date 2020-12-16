import React from 'react';
import { Card, Text, View, Button, Image } from 'cyclops/native';
import { Padding } from 'cyclops/styles';

interface Props {
	group?: string;
	author: string;
	profilePicUrl?: string;
	body: string;
	reactions: any[];
	// type?: string;
	// votes?: Object;
	timestamp: string;
}

export const Post: React.FunctionComponent<Props> = (props: Props) => {
	const reactionButtons = props.reactions.map((reaction) => {
		return (
			<Button
				style={{
					display: 'flex',
				}}
				label={reaction.emoji + ' ' + reaction.users.length}
				labelType={'body'}
				type={'ghost'}
			/>
		);
	});
	return (
		<Card style={{ margin: 10, width: '100%' }}>
			<View style={{ width: '100%' }}>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
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

					<View style={{ display: 'flex', flexDirection: 'column' }}>
						<Text
							type="subtitle"
							style={{
								marginRight: 8,
								display: 'flex',
							}}
						>
							{props.author} {props.group && ' ‣ ' + props.group}
						</Text>
						<Text
							type="body"
							style={{
								color: 'grey',
								display: 'flex',
							}}
						>
							Posted at: {props.timestamp}
						</Text>
					</View>
				</View>
				<Text type="body" style={{ padding: Padding.ELEMENT_NATIVE }}>
					{props.body}
				</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						borderTopColor: 'lightgrey',
						borderTopWidth: 1,
						marginTop: 12,
					}}
					alignItemsV="center"
				>
					{reactionButtons.map((reactionButton) => reactionButton)}
					<Button
						style={{
							display: 'flex',
						}}
						label={'+ React'}
						labelType={'body'}
						type={'ghost'}
					/>
					<Button
						style={{
							display: 'flex',
						}}
						label={'Comment'}
						type={'ghost'}
						labelType={'body'}
					/>
				</View>
			</View>
		</Card>
	);
};
