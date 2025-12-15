import { Clock } from '~~>shared/ui/icons';
import { BrightBackground } from '~~>shared/ui/others';

import { useApplicationMainDisplay } from '../lib/useApplicationMainDisplay';
import styles from './ApplicationMainDisplay.module.css';

const ApplicationMainDisplay = () => {
	const { data } = useApplicationMainDisplay();

	return (
		<div className={styles['application-info']}>
			<div className={styles.name}>
				<p>Тема заявки:</p>
				<p>{data?.name || 'Загрузка'}</p>
			</div>
			<div className={styles.code}>
				<p>Статус:</p>
				<BrightBackground typeBG="inProgress">
					{data?.code.name || 'Загрузка'}
				</BrightBackground>
			</div>
			<div className={styles.addres}>
				<p>Инициатор:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
			<div className={styles.addres}>
				<p>Дата создания:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
			<div className={styles.addres}>
				<p>Категория:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
			<div className={styles.code}>
				<p>Приоритет:</p>
				<BrightBackground typeBG="inProgress">
					{data?.code.name || 'Загрузка'}
				</BrightBackground>
			</div>
			<div className={styles.type}>
				<p>Ожидаемое время выполнения:</p>
				<BrightBackground className={styles.time}>
					<Clock />
					{data?.type.name || 'Загрузка'}
				</BrightBackground>
			</div>
		</div>
	);
};

export { ApplicationMainDisplay };
