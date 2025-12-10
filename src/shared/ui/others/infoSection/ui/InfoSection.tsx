import styles from './InfoSection.module.css';
import type { FC, PropsWithChildren } from 'react';
import type { InfoSectionProps } from '../model/infoSection.types';

const InfoSection: FC<PropsWithChildren<InfoSectionProps>> = ({
	children,
	title,
	controls,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h3>{title}</h3>
				{controls}
			</div>
			<div className={styles.body}>{children}</div>
		</div>
	);
};

export { InfoSection };
