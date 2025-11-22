import { Bell } from '~~>shared/ui/icons';

import { Badge } from '../../badge/Badge';
import styles from './Notification.module.css';
import type { FC } from 'react';
import type { NotificationProps } from '../model/notification.types';

const Notification: FC<NotificationProps> = ({ data }) => {
	return (
		<div className={styles.notification}>
			{data && +data > 0 && (
				<Badge className={styles.badge}>{data}</Badge>
			)}
			<Bell />
		</div>
	);
};

export { Notification };
