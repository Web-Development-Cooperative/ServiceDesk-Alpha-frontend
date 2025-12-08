import { Notification } from '~~>shared/ui/others';

import styles from './FetchNotification.module.css';
import { useFetchNotification } from '../lib/useFetchNotification';
import type { FC } from 'react';

const FetchNotification: FC = () => {
	const { count } = useFetchNotification();
	return <Notification data={count.toString()} className={styles.notif} />;
};

export { FetchNotification };
