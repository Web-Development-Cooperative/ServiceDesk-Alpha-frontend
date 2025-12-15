import { Link } from 'react-router';
import { clsx } from 'clsx';

import { ROUTES } from '~~>shared/model/routes';
import { StatusBadge, UniTable } from '~~>shared/ui/others';

import { useMyApplicationsDisplay } from '../lib/useMyApplicationsDisplay';
import styles from './MyApplicationsDisplay.module.css';

const MyApplicationsDisplay = () => {
	const { data } = useMyApplicationsDisplay();

	const renderHead = () => (
		<>
			<th className={styles.name}>Заявка</th>
			<th className={styles.category}>Категория заявки</th>
			<th className={styles.status}>Статус заявки</th>
			<th className={styles.initiator}>Инициатор</th>
			<th className={styles.date}>Дата создания</th>
		</>
	);
	const renderBody = (
		item: NonNullable<typeof data>[number],
		_index: number
	) => (
		<>
			<td
				className={clsx(styles['col-value'], styles['col-value__name'])}
			>
				<Link
					to={`${ROUTES.MY_APPLICATIONS}/${item.id}`}
					className={styles['link-name']}
				>
					<p>Очень медленный интернет</p>
				</Link>
			</td>
			<td
				className={clsx(
					styles['col-value'],
					styles['col-value__category']
				)}
			>
				<Link
					to={`${ROUTES.MY_APPLICATIONS}/${item.id}`}
					className={styles['link-category']}
				>
					<p>Технические проблемы и доступы </p>
				</Link>
			</td>
			<td
				className={clsx(
					styles['col-value'],
					styles['col-value__status']
				)}
			>
				<Link
					to={`${ROUTES.MY_APPLICATIONS}/${item.id}`}
					className={styles['link-status']}
				>
					<StatusBadge typeBadge="inProgress" />
				</Link>
			</td>
			<td
				className={clsx(
					styles['col-value'],
					styles['col-value__initiator']
				)}
			>
				<Link
					to={`${ROUTES.MY_APPLICATIONS}/${item.id}`}
					className={styles['link-initiator']}
				>
					<p>Петров П. П.</p>
				</Link>
			</td>
			<td
				className={clsx(styles['col-value'], styles['col-value__date'])}
			>
				<Link
					to={`${ROUTES.MY_APPLICATIONS}/${item.id}`}
					className={styles['link-date']}
				>
					<p>20.09.2025</p>
				</Link>
			</td>
		</>
	);

	return (
		<>
			<UniTable
				data={data || []}
				renderHead={renderHead}
				renderBody={renderBody}
			/>
		</>
	);
};

export { MyApplicationsDisplay };
