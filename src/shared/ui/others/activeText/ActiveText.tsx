import { clsx } from 'clsx';

import styles from './ActiveText.module.css';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

const ActiveText: FC<
	PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>
> = ({ children, className }) => {
	return <p className={clsx(styles['active-text'], className)}>{children}</p>;
};

export { ActiveText };
