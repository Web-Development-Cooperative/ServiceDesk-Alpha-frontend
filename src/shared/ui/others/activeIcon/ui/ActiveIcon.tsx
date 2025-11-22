import { clsx } from 'clsx';

import styles from './ActiveIcon.module.css';
import type { FC } from 'react';
import type { ActiveIconProps } from '../model/activeIcon.types';

const ActiveIcon: FC<ActiveIconProps> = ({
	children,
	typeActive = 'primary',
	className,
	...rest
}) => {
	return (
		<div
			className={clsx(
				styles['wrapper-icon'],
				styles[typeActive],
				className
			)}
			{...rest}
		>
			{children}
		</div>
	);
};

export { ActiveIcon };
