import { clsx } from 'clsx';

import styles from './UniTable.module.css';
import type { UniTableProps } from '../model/uniTable.types';

const UniTable = <T extends { id: number | string }>(
	props: UniTableProps<T>
) => {
	const { data, renderHead, renderBody, className = '', ...rest } = props;
	return (
		<>
			<table className={clsx(styles['table'], className)} {...rest}>
				<thead>
					<tr>{renderHead()}</tr>
				</thead>
				<tbody>
					{!!data.length &&
						data.map((item, index) => (
							<tr key={item.id}>{renderBody(item, index)}</tr>
						))}
				</tbody>
			</table>
			{!data.length && <p style={{ color: 'red' }}>Данных нет</p>}
		</>
	);
};

export { UniTable };
