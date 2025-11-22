import { clsx } from 'clsx';

import { STATUS_APPLICATION } from '../model/consts';
import styles from './StatusBadge.module.css';
import type { FC } from 'react';
import type { StatusBadgeProps } from '../model/statusBadge.types';

const StatusBadge: FC<StatusBadgeProps> = ({
	className,
	typeBadge = 'primary',
}) => {
	return (
		<span
			className={clsx(
				styles['status-badge'],
				styles[typeBadge],
				className
			)}
		>
			{STATUS_APPLICATION[typeBadge]}
		</span>
	);
};

export { StatusBadge };
