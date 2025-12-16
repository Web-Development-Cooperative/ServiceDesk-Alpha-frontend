type Attachment = {
	id: string;
	name: string;
	size: string;
	type: 'jpg' | 'png' | 'pdf' | 'doc' | 'other';
	url: string;
};

type CommentFileItemProps = {
	type?: 'new' | 'old';
	onClick?: (id: string) => void;
	item: Attachment;
};

export type { CommentFileItemProps };
