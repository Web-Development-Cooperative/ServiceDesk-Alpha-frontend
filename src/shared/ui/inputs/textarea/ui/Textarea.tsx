import { clsx } from 'clsx';

import styles from './Textarea.module.css';
import type { BaseTextareaProps } from '../model/types';
import type { FC } from 'react';

const Textarea: FC<BaseTextareaProps> = (props) => {
	const { className, iStretch = false, disabled, rows = 4, ...rest } = props;
	return (
		<textarea
			className={clsx(styles['base-textarea'], className, {
				[styles.isStretch]: iStretch,
				[styles.isDisabled]: disabled,
			})}
			disabled={disabled}
			rows={rows}
			{...rest}
		/>
	);
};

export { Textarea };
