import React from 'react';
import { Card, Text, View, Button, Image } from 'cyclops/lib/web';
import { Padding, Colors } from 'cyclops/lib/styles';

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
					width: 'fit-content',
					display: 'inline',
				}}
				label={reaction.emoji + ' ' + reaction.users.length}
				labelType={'body'}
				type={'ghost'}
				color={Colors.GRAY}
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
								borderRadius: '50%',
								display: 'block',
								marginRight: 8,
							}}
							source={props.profilePicUrl}
						/>
					)}

					<View style={{ display: 'flex', flexDirection: 'column' }}>
						<Text
							type="subtitle"
							style={{
								width: 'fit-content',
								marginRight: 8,
								display: 'block',
							}}
						>
							{props.author} {props.group && ' ‣ ' + props.group}
						</Text>
						<Text
							type="body"
							style={{
								color: Colors.GRAY,
								width: 'fit-content',
								display: 'block',
							}}
						>
							Posted at: {props.timestamp}
						</Text>
					</View>
				</View>
				<Text type="body" style={{ padding: Padding.ELEMENT_WEB }}>
					{props.body}
				</Text>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						// @ts-ignore
						borderTop: '1px solid lightgrey',
						marginTop: 12,
					}}
					alignItemsV="center"
					color={Colors.GRAY}
				>
					{reactionButtons.map((reactionButton) => reactionButton)}
					<Button
						style={{
							width: 'fit-content',
							display: 'inline',
						}}
						label={'+ React'}
						labelType={'body'}
						type={'ghost'}
						color={Colors.GRAY}
					/>
					<Button
						style={{
							width: 'fit-content',
							display: 'inline',
						}}
						label={'Comment'}
						type={'ghost'}
						labelType={'body'}
						color={Colors.GRAY}
					/>
				</View>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					borderTopColor: Colors.LIGHT_GRAY,
					borderTopWidth: 1,
					padding: Padding.ELEMENT_WEB,
				}}
			>
				<Image
					style={{
						width: 50,
						height: 50,
						borderRadius: '50%',
						display: 'block',
						marginRight: 8,
					}}
					source={props.profilePicUrl}
				></Image>
				<View style={{ flex: 1 }}>
					<Text type="body" style={{ padding: Padding.ELEMENT_WEB }}>
						This is a comment on this post, I am just commenting on
						this post because I could not agree more with what it
						says.
					</Text>
				</View>
			</View>
		</Card>
	);
};
