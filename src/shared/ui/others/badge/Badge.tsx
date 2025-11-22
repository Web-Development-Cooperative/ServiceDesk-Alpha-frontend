import { clsx } from 'clsx';

import styles from './Badge.module.css';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

const Badge: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
	children,
	className,
}) => {
	return <div className={clsx(styles.badge, className)}>{children}</div>;
};

export { Badge };
