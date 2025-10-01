import type { HTMLAttributes, ReactNode, RefAttributes } from 'react';

type UniListProps<T> = HTMLAttributes<HTMLUListElement> &
	RefAttributes<HTMLUListElement> & {
		items: T[];
		renderItem: (_item: T, _index: number) => ReactNode;
	};

export type { UniListProps };
