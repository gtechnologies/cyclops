import { ButtonProps as RNWButtonProps } from "react-native-web";

export type ButtonProps = RNWButtonProps & {
	onClick: () => void;
};
