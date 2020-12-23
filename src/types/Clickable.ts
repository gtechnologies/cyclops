export interface ClickableProps {
	onClick?: any;
}

/**
 * convert onClick/onPress to all work with onPress for react-native parity
 * @param props
 */
export const getOnPressFromProps = (props: any): any => {
	return { onPress: props.onClick ? props.onClick : props.onPress };
};
