import type { InputHTMLAttributes, RefAttributes } from 'react';

type Option<T extends string | number = string> = {
	value: T;
	label: string;
};
type SelectProps<T extends string | number = string> = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
> &
	RefAttributes<HTMLInputElement> & {
		options: Option<T>[];
		value: string;
		onChange: (value: Option<T>) => void;
	};

export type { SelectProps };
