type Attachment = {
	id: string;
	name: string;
	size: string;
	type: 'jpg' | 'png' | 'pdf' | 'doc' | 'other';
	url: string;
};

type AttachmentItemProps = {
	item: Attachment;
};

export type { AttachmentItemProps, Attachment };
