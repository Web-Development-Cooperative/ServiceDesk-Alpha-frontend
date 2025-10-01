import type { RefAttributes, TextareaHTMLAttributes } from 'react';

type BaseTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
	RefAttributes<HTMLTextAreaElement> & {
		iStretch?: boolean;
	};

export { type BaseTextareaProps };
