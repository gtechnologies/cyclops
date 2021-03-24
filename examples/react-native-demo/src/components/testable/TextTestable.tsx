import React from 'react';
import { Text, VFlex } from 'cyclops/native';

export const TextTestable = () => {
	return (
		<VFlex>
			<Text style= {{fontFamily: 'Inter'}} type="h1">Heading 1</Text>
            <Text type="h2">Heading 2</Text>
            <Text type="h3">Heading 3</Text>
            <Text type="h4">Heading 4</Text>
            <Text type="h5">Heading 5</Text>
            <Text type="h6">Heading 6</Text>
            <Text type="subtitle1">Subtitle 1</Text>
            <Text type="subtitle2">Subtitle 2</Text>
            <Text type="body">Body</Text>
            <Text type="metadata1">Metadata 1</Text>
            <Text type="metadata2">Metadata 2</Text>
            <Text type="overline1">Overline 1</Text>
            <Text type="overline2">Overline 2</Text>
            <Text type="button">Button</Text>
		</VFlex>
	);
};
