type ClickEvent = any;
type KeyboardEvent = any;
type ResponderEvent = any;

export type PressResponderConfig = {
	// The gesture can be interrupted by a parent gesture, e.g., scroll.
	// Defaults to true.
	cancelable?: boolean | null | undefined;
	// Whether to disable initialization of the press gesture.
	disabled?: boolean | null | undefined;
	// Duration (in addition to `delayPressStart`) after which a press gesture is
	// considered a long press gesture. Defaults to 500 (milliseconds).
	delayLongPress?: number | null | undefined;
	// Duration to wait after press down before calling `onPressStart`.
	delayPressStart?: number | null | undefined;
	// Duration to wait after letting up before calling `onPressEnd`.
	delayPressEnd?: number | null | undefined;
	// Called when a long press gesture has been triggered.
	onLongPress?: (event: ResponderEvent) => void | null | undefined;
	// Called when a press gestute has been triggered.
	onPress?: (event: ClickEvent) => void | null | undefined;
	// Called when the press is activated to provide visual feedback.
	onPressChange?: (event: ResponderEvent) => void | null | undefined;
	// Called when the press is activated to provide visual feedback.
	onPressStart?: (event: ResponderEvent) => void | null | undefined;
	// Called when the press location moves. (This should rarely be used.)
	onPressMove?: (event: ResponderEvent) => void | null | undefined;
	// Called when the press is deactivated to undo visual feedback.
	onPressEnd?: (event: ResponderEvent) => void | null | undefined;
};

export type EventHandlers = $ReadOnly<{
	onClick: (event: ClickEvent) => void;
	onContextMenu: (event: ClickEvent) => void;
	onKeyDown: (event: KeyboardEvent) => void;
	onResponderGrant: (event: ResponderEvent) => void;
	onResponderMove: (event: ResponderEvent) => void;
	onResponderRelease: (event: ResponderEvent) => void;
	onResponderTerminate: (event: ResponderEvent) => void;
	onResponderTerminationRequest: (event: ResponderEvent) => boolean;
	onStartShouldSetResponder: (event: ResponderEvent) => boolean;
}>;
