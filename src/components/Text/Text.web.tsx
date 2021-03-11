import React from 'react';
import { Text as RNWText, TextStyle } from 'react-native-web';

import { TextPropsWeb as TextProps, TextType, TextTypeEnum } from './TextTypes';
import { View } from '../View/View.web';
import { GenericStyleProp } from 'react-native-web/types';

import './Text.css';

const textStyleDictionary: { [type: string]: TextStyle } = {
    [TextTypeEnum.h1]: {
        fontWeight: '700',
        fontSize: '28px',
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h2]: {
        fontWeight: '700',
        fontSize: '24px',
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h3]: {
        fontWeight: '600',
        fontSize: '18px',
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h4]: {
        fontWeight: '600',
        fontSize: '16px',
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h5]: {
        fontWeight: '500',
        fontSize: '16px',
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.h6]: {
        fontWeight: '600',
        fontSize: '14px',
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.subtitle1]: {
        fontWeight: '400',
        fontSize: '14px',
        color: '#727982',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.subtitle2]: {
        fontWeight: '400',
        fontSize: '13px',
        color: '#B2B2B2',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.metadata1]: {
        fontWeight: '600',
        fontSize: '14px',
        color: 'black',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.metadata2]: {
        fontWeight: '500',
        fontSize: '12px',
        color: '#727982',
        fontFamily: 'Inter'
    },
    [TextTypeEnum.overline1]: {
        fontWeight: '600',
        fontSize: '12px',
        color: 'black',
        fontFamily: 'Inter',
        textTransform: 'uppercase',
    },
    [TextTypeEnum.overline2]: {
        fontWeight: '800',
        fontSize: '11px',
        color: '#596BE4',
        fontFamily: 'Inter',
        textTransform: 'uppercase',
    },
    [TextTypeEnum.button]: {
        fontWeight: '500',
        fontSize: '14px',
        color: 'black',
        fontFamily: 'Inter'
    },


    [TextTypeEnum.pagetitle]: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '2em',
        color: 'black',
        fontFamily: 'Inter',
    },
    [TextTypeEnum.title]: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '1.5em',
        color: 'black',
        fontFamily: 'Inter',
    },
    [TextTypeEnum.subtitle]: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: '1.17em',
        color: 'black',
        fontFamily: 'Inter',
    },
    [TextTypeEnum.headline]: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '1em',
        color: 'black',
        fontFamily: 'Inter',
    },
    [TextTypeEnum.body]: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: '14px',
        color: 'black',
        fontFamily: 'Inter',
    },
};

export const Text = (props: TextProps) => {
    let textType = props.type ? props.type : TextTypeEnum.body;
    let style: GenericStyleProp<TextStyle> = {
        ...textStyleDictionary[textType],
        ...(props.style as TextStyle),
    };

    return <RNWText {...props} style={style} />;
};
