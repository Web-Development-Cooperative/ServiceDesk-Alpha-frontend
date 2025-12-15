import { useApplicationDataDisplay } from '../lib/useApplicationDataDisplay';
import styles from './ApplicationDataDisplay.module.css';

const ApplicationDataDisplay = () => {
	const { data } = useApplicationDataDisplay();

	return (
		<div className={styles['application-data']}>
			<div className={styles.name}>
				<p>Рабочее место:</p>
				<p>{data?.name || 'Загрузка'}</p>
			</div>
			<div className={styles.addres}>
				<p>Ответственный исполнитель:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
			<div className={styles.addres}>
				<p>Прикрепленные файлы:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
			<div className={styles.addres}>
				<p>Описание заявки:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
		</div>
	);
};

export { ApplicationDataDisplay };
