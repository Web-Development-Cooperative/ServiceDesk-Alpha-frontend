import { clsx } from 'clsx';

import { ARRAY } from '../../model/applicationsSummary.consts';
import styles from './SummaryItem.module.css';
import type { FC } from 'react';

const SummaryItem: FC<Record<'item', (typeof ARRAY)[number]>> = ({ item }) => {
	const renderText = (key: (typeof ARRAY)[number]['id']) => {
		switch (key) {
			case 'all':
				return 'Всего заявок';
			case 'new':
				return 'Новые';
			case 'in-work':
				return 'В работе';
			case 'completed':
				return 'Завершены';

			default:
				return 'Неизвестный тип!!!';
		}
	};
	return (
		<div className={clsx(styles['sum-item'], styles[item.id])}>
			<div className={clsx(styles['bright-header'])}>
				<p>{item.name}</p>
				<p>{renderText(item.id)}</p>
			</div>
		</div>
	);
};

export { SummaryItem };
