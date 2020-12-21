import { FlexDirection } from './Flex';

// justify-content
// https://www.w3schools.com/cssref/css3_pr_justify-content.asp

// align-items
// https://www.w3schools.com/cssref/css3_pr_align-items.asp
// default: stretch


export type AlignItemsHOptions =
	| 'left'
	| 'center'
	| 'right'
	| 'space-around'
	| 'space-between'
	| 'space-evenly';

export type AlignItemsVOptions =
	| 'top'
	| 'center'
	| 'bottom'
	| 'space-around'
	| 'space-between'
	| 'space-evenly';

export interface AlignItems {
	alignItemsH?: AlignItemsHOptions;
	alignItemsV?: AlignItemsVOptions;
}

export const getAlignStyle = (
	style?: any,
	alignItemsH?: AlignItemsHOptions,
	alignItemsV?: AlignItemsVOptions,
): {} => {
	if (!alignItemsH && !alignItemsV) return {};

	let alignStyle: any = {};

	let flexDirection: FlexDirection = 'column';
	if (style && style.flexDirection) flexDirection = style.flexDirection;

	if (flexDirection === 'column') {
		if (alignItemsV === 'top' || alignItemsV === 'bottom') {
			alignStyle.justifyContent =
				alignItemsV === 'top' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.justifyContent = alignItemsV;
		}
		if (alignItemsH === 'left' || alignItemsH === 'right') {
			alignStyle.alignItems =
				alignItemsH === 'left' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.alignItems = alignItemsH;
		}
	} else if (flexDirection === 'column-reverse') {
		if (alignItemsV === 'top' || alignItemsV === 'bottom') {
			alignStyle.justifyContent =
				alignItemsV === 'bottom' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.justifyContent = alignItemsV;
		}
		if (alignItemsH === 'left' || alignItemsH === 'right') {
			alignStyle.alignItems =
				alignItemsH === 'right' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.alignItems = alignItemsH;
		}
	} else if (flexDirection === 'row') {
		if (alignItemsH === 'left' || alignItemsH === 'right') {
			alignStyle.justifyContent =
				alignItemsH === 'left' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.justifyContent = alignItemsH;
		}
		if (alignItemsV === 'top' || alignItemsV === 'bottom') {
			alignStyle.alignItems =
				alignItemsV === 'top' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.alignItems = alignItemsV;
		}
	} else if (flexDirection === 'row-reverse') {
		if (alignItemsH === 'left' || alignItemsH === 'right') {
			alignStyle.justifyContent =
				alignItemsH === 'right' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.justifyContent = alignItemsH;
		}
		if (alignItemsV === 'top' || alignItemsV === 'bottom') {
			alignStyle.alignItems =
				alignItemsV === 'bottom' ? 'flex-start' : 'flex-end';
		} else {
			alignStyle.justifyContent = alignItemsV;
		}
	}

	return alignStyle;
};
