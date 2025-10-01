import type { ReactNode } from 'react';
import type { UniListProps } from '../model/types';

const UniList = <T extends { id: number | string }>({
	items,
	renderItem,
	...rest
}: UniListProps<T>): ReactNode => {
	return (
		<ul {...rest}>
			{items.map((item, index) => (
				<li key={item.id}>{renderItem(item, index)}</li>
			))}
		</ul>
	);
};
export { UniList };
