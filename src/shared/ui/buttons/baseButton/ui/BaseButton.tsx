import { clsx } from 'clsx';

import styles from './BaseButton.module.css';
import type { FC } from 'react';
import type { BaseButtonProps } from '../model/types';

const BaseButton: FC<BaseButtonProps> = (props) => {
	const { children, className, ...rest } = props;
	return (
		<button {...rest} className={clsx(styles.btn, className)}>
			{children ? children : 'Click me!'}
		</button>
	);
};

export { BaseButton };
