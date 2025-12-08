import { Link } from 'react-router';

import { Arrow } from '~~>shared/ui/icons';
import { BrightBackground } from '~~>shared/ui/others';

import styles from './BranchDisplay.module.css';

const BranchDisplay = () => {
	return (
		<div className={styles['branch-info']}>
			<div className={styles.name}>
				<p>Название филиала:</p>
				<p>Данные</p>
			</div>
			<div className={styles.addres}>
				<p>Адрес:</p>
				<p>Данные</p>
			</div>
			<div className={styles.code}>
				<p>Код филиала:</p>
				<BrightBackground typeBG="inProgress">MSK_1</BrightBackground>
			</div>
			<div className={styles.type}>
				<p>Тип филиала:</p>
				<BrightBackground>MSK_1</BrightBackground>
			</div>
			<div className={styles.parent}>
				<p>Родительский филиал:</p>
				<Link to="#">
					<Arrow />
					Данные
				</Link>
			</div>
		</div>
	);
};

export { BranchDisplay };
