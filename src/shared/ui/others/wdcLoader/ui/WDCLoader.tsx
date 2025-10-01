import styles from './WDCLoader.module.css';
import type { FC } from 'react';

const WDCLoader: FC = () => {
	return (
		<div className={styles['loader-container']}>
			<p className={styles['loader-title']}>LOADING</p>
			<div className={styles['loader-ring']}>
				{Array.from({ length: 12 }).map((_, i) => (
					<span
						key={i}
						style={{
							transform: `rotate(${
								i * 30
							}deg) translateX(-110%) translateY(-0%)`,
						}}
					/>
				))}
			</div>
			<p className={styles['loader-sub']}>BY WEB DEV COOP</p>
		</div>
	);
};

export { WDCLoader };
