import { Link } from 'react-router';

import { Arrow } from '~~>shared/ui/icons';
import { BrightBackground } from '~~>shared/ui/others';
import { ROUTES } from '~~>shared/model/routes';

import { useBranchDisplay } from '../lib/useBranchDisplay';
import styles from './BranchDisplay.module.css';

const BranchDisplay = () => {
	const { data } = useBranchDisplay();

	return (
		<div className={styles['branch-info']}>
			<div className={styles.name}>
				<p>Название филиала:</p>
				<p>{data?.name || 'Загрузка'}</p>
			</div>
			<div className={styles.addres}>
				<p>Адрес:</p>
				<p>{data?.address || 'Загрузка'}</p>
			</div>
			<div className={styles.code}>
				<p>Код филиала:</p>
				<BrightBackground typeBG="inProgress">
					{data?.code.name || 'Загрузка'}
				</BrightBackground>
			</div>
			<div className={styles.type}>
				<p>Тип филиала:</p>
				<BrightBackground>
					{data?.type.name || 'Загрузка'}
				</BrightBackground>
			</div>
			<div className={styles.parent}>
				<p>Родительский филиал:</p>
				<Link
					to={
						data?.parent
							? `${ROUTES.BRANCHES}/${data.parent.id}`
							: '#'
					}
				>
					<Arrow />
					{data
						? data.parent
							? data.parent.name
							: 'Нет родителя'
						: 'Загрузка'}
				</Link>
			</div>
		</div>
	);
};

export { BranchDisplay };
