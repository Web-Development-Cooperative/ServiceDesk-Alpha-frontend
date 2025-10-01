import type { HTMLAttributes, RefAttributes } from 'react';

type NavBarProps<T> = HTMLAttributes<HTMLElement> &
	RefAttributes<HTMLElement> & {
		items: T[];
	};

export type { NavBarProps };
