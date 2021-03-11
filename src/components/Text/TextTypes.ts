import {
    TextProps as RNTextProps,
    TextStyle as RNTextStyle,
} from 'react-native';
import {
    TextProps as RNWTextProps,
    TextStyle as RNWTextStyle,
} from 'react-native-web';

export enum TextTypeEnum {
    pagetitle = 'pagetitle',
    title = 'title',
    subtitle = 'subtitle',
    // a bolder body
    headline = 'headline',
    body = 'body',
    
    h1= 'h1',
    h2= 'h2',
    h3 = 'h3',
    h4 = ' h4',
    h5 = 'h5',
    h6 = 'h6',
    subtitle1 = 'subtitle1',
    subtitle2 = 'subtitle2',
    metadata1 = 'metadata1',
    metadata2 = 'metadata2',
    overline1 = 'overline1',
    overline2 = 'overline2',
    button = 'button'
    
}
export type TextType = 'pagetitle' | 'title' | 'subtitle' | 'headline' | 'body' |
 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'metadata1' | 'metadata2' |
 'overline1' | 'overline2' | 'button' ;

export type TextPropsWeb = RNWTextProps & {
    type?: TextType;
};
export type TextPropsNative = RNTextProps & {
    type?: TextType;
    children?: any | null | undefined;
};