import type { HTMLAttributes, ReactNode, RefAttributes } from 'react';

type UniTableProps<T> = HTMLAttributes<HTMLTableElement> &
	RefAttributes<HTMLTableElement> & {
		data: T[];
		renderHead: () => ReactNode;
		renderBody: (_item: T, _index: number) => ReactNode;
	};

export type { UniTableProps };
