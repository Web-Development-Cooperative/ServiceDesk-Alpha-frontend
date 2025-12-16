import type { Attachment } from '~~>shared/ui/others';

type Comment = {
	id: string;
	author: string;
	role: 'user' | 'executor';
	text: string;
	date: string;
	attachments?: Array<Attachment>;
};

type CommentItemProps = {
	item: Comment;
};

export type { CommentItemProps, Comment };
