import type { InputHTMLAttributes } from 'react';

type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
	value: string;
};

export type { SearchBarProps };
