import type { ButtonHTMLAttributes, RefAttributes } from 'react';

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	RefAttributes<HTMLButtonElement> & {
		typeButton?: 'danger' | 'base';
		withoutText?: boolean;
	};

export { type BaseButtonProps };
