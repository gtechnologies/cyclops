import React from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';

import {
	TextPropsNative as TextProps,
	TextType,
	TextTypeEnum,
} from './TextTypes';


// font styles based on iOS Human Interface Guidelines: Typography
// https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/
const textStyleDictionary: { [type: string]: TextStyle } = {
	[TextTypeEnum.h1]: {
        fontWeight: '700',
        fontSize: 28,
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h2]: {
        fontWeight: '700',
        fontSize: 24,
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h3]: {
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h4]: {
        fontWeight: '600',
        fontSize: 16,
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h5]: {
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h6]: {
        fontWeight: '600',
        fontSize: 14,
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.subtitle1]: {
        fontWeight: '400',
        fontSize: 14,
        color: '#727982',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.subtitle2]: {
        fontWeight: '400',
        fontSize: 13,
        color: '#B2B2B2',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.metadata1]: {
        fontWeight: '600',
        fontSize: 14,
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.metadata2]: {
        fontWeight: '500',
        fontSize: 12,
        color: '#727982',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.overline1]: {
        fontWeight: '600',
        fontSize: 12,
        color: 'black',
        fontFamily: 'Inter',
        textTransform: 'uppercase',
    },
    [TextTypeEnum.overline2]: {
        fontWeight: '800',
        fontSize: 11,
        color: '#596BE4',
        fontFamily: 'Inter',
        textTransform: 'uppercase',
    },
    [TextTypeEnum.button]: {
        fontWeight: '500',
		fontSize: 14,
        color: 'black',
        fontFamily: 'Inter'
    },


	[TextTypeEnum.pagetitle]: {
		textAlign: 'left',
		fontWeight: 'normal',
		fontSize: 34,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.title]: {
		textAlign: 'left',
		fontWeight: 'normal',
		fontSize: 28,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.subtitle]: {
		textAlign: 'left',
		fontWeight: 'normal',
		fontSize: 22,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.headline]: {
		textAlign: 'left',
		fontWeight: '600',
		fontSize: 17,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
	[TextTypeEnum.body]: {
		textAlign: 'left',
		fontWeight: 'normal',
		fontSize: 17,
		color: 'black',
		//fontFamily: 'San Francisco',
	},
};

export const Text = (props: TextProps) => {
	let textType = props.type ? props.type : TextTypeEnum.body;
	let style: StyleProp<TextStyle> = {
		...textStyleDictionary[textType],
		...(props.style as TextStyle),
	};

	return <RNText {...props} style={style} />;
};
