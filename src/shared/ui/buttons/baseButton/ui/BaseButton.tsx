import { clsx } from 'clsx';

import styles from './BaseButton.module.css';
import type { FC } from 'react';
import type { BaseButtonProps } from '../model/types';

const BaseButton: FC<BaseButtonProps> = (props) => {
	const {
		children,
		className,
		typeButton = 'danger',
		withoutText = false,
		...rest
	} = props;
	return (
		<button
			{...rest}
			className={clsx(
				styles.btn,
				styles[typeButton],
				{ [styles['without-text']]: withoutText },
				className
			)}
		>
			{children}
		</button>
	);
};

export { BaseButton };
