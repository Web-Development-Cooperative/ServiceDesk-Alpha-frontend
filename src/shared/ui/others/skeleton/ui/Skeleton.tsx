import { clsx } from 'clsx';

import styles from './Skeleton.module.css';
import type { FC } from 'react';
import type { SkeletonProps } from '../model/types';

const Skeleton: FC<SkeletonProps> = (props) => {
	const { width, height, text, circle = false, className, ...rest } = props;

	return (
		<div className={styles.wrapper} {...rest}>
			<span className={styles.text}>{text ?? 'Это базовый текст!'}</span>
			<div
				className={clsx(styles.skeleton, className, {
					[styles.circle]: circle,
				})}
				style={{ width, height }}
			></div>
		</div>
	);
};

export { Skeleton };
