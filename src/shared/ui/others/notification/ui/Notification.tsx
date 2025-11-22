import { clsx } from 'clsx';

import { Bell } from '~~>shared/ui/icons';

import { Badge } from '../../badge/Badge';
import styles from './Notification.module.css';
import type { FC } from 'react';
import type { NotificationProps } from '../model/notification.types';

const Notification: FC<NotificationProps> = ({ data, className }) => {
	return (
		<div className={clsx(styles.notification, className)}>
			{data && +data > 0 && (
				<Badge className={styles.badge}>{data}</Badge>
			)}
			<Bell />
		</div>
	);
};

export { Notification };
