/**
 * A single story
 */
export interface Story {
	author?: any;

	id: string | number;
	type?: any;

	/** Duration in seconds */
	duration?: number;
	content?: any;

	// legacy from original design
	url?: string;
	isReadMore?: boolean;
	isSeen?: boolean;
	isPaused?: boolean;
}

/**
 * A set of stories grouped to the same source
 */
export interface StoryBlock {
	/** Possibly a Group or a User, determines what to render for the row*/
	source?: any;
	unreadCount?: number;

	stories: Story[];

	// legacy from original design
	title: string;
	profile: string;
}
