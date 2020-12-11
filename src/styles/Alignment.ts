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
