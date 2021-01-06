import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Image, Text, TouchableOpacity, View } from 'cyclops/web';

import { Colors } from 'cyclops/lib/styles';

import { ProfileIconProps } from './ProfileIconTypes';

// ERROR: fix the error

export const ProfileIcon: React.FunctionComponent<ProfileIconProps> = (
	props,
) => {
	const { first_name, last_name, profile_pic_url, size, style } = props;

	let initials = '';
	if (first_name) {
		initials += first_name.toUpperCase().charAt(0);
		if (last_name) {
			initials += last_name.toUpperCase().charAt(0);
		}
	}

	let iconSize = size ? size : 40;

	let content = profile_pic_url ? (
		<Image
			source={{ uri: profile_pic_url }}
			style={{ height: '100%', width: '100%' }}
		/>
	) : initials ? (
		<Text>{initials}</Text>
	) : (
		<AccountCircle style={{ color: 'white' }} />
	);

	if (props.onClick) {
		return (
			<TouchableOpacity>
				<View
					style={{
						height: size,
						width: size,
						backgroundColor: Colors.BASE,
						borderRadius: iconSize / 2,
						overflow: 'hidden',
						...style,
					}}
					alignItemsH="center"
					alignItemsV="center"
				>
					{content}
				</View>
			</TouchableOpacity>
		);
	}

	return (
		<View
			style={{
				height: size,
				width: size,
				backgroundColor: Colors.BASE,
				borderRadius: iconSize / 2,
				overflow: 'hidden',
				...style,
			}}
			alignItemsH="center"
			alignItemsV="center"
		>
			{content}
		</View>
	);
};

ProfileIcon.defaultProps = {
	size: 40,
};
