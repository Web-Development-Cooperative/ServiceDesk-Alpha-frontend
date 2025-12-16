import { AttachmentItem, UniList } from '~~>shared/ui/others';

import { useApplicationDataDisplay } from '../lib/useApplicationDataDisplay';
import { FILES } from '../model/applicationDataDisplay.consts';
import styles from './ApplicationDataDisplay.module.css';

const ApplicationDataDisplay = () => {
	const { data } = useApplicationDataDisplay();

	return (
		<div className={styles['application-data']}>
			<div className={styles.workplace}>
				<p>Рабочее место:</p>
				<p>{data?.name || 'Загрузка'}</p>
			</div>
			<div className={styles.responsible}>
				<p>Ответственный исполнитель:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
			<div className={styles.files}>
				<p>Прикрепленные файлы:</p>
				{FILES.length ? (
					<UniList
						items={FILES}
						renderItem={(item) => <AttachmentItem item={item} />}
					/>
				) : (
					<p>Данных нет</p>
				)}
			</div>
			<div className={styles.description}>
				<p>Описание заявки:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
		</div>
	);
};

export { ApplicationDataDisplay };
