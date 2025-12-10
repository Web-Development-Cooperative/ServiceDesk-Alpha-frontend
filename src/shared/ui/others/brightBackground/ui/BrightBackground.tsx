import { clsx } from 'clsx';

import styles from './BrightBackground.module.css';
import type { FC, PropsWithChildren } from 'react';
import type { BrightBackgroundProps } from '../model/statusBadge.types';

const BrightBackground: FC<PropsWithChildren<BrightBackgroundProps>> = ({
	children,
	className,
	isAction = false,
	typeBG = 'primary',
	...props
}) => {
	return (
		<span
			className={clsx(
				styles['status-badge'],
				styles[typeBG],
				{ [styles.isAction]: isAction },
				className
			)}
			{...props}
		>
			{children}
		</span>
	);
};

export { BrightBackground };
