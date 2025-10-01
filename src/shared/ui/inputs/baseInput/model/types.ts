import type { InputHTMLAttributes, RefAttributes } from 'react';

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> &
	RefAttributes<HTMLInputElement> & {
		iStretch?: boolean;
	};

export { type BaseInputProps };
