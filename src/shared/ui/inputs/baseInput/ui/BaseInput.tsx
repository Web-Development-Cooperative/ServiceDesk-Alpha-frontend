import { clsx } from 'clsx';

import styles from './BaseInput.module.css';
import type { FC } from 'react';
import type { BaseInputProps } from '../model/types';

const BaseInput: FC<BaseInputProps> = (props) => {
	const {
		className,
		iStretch = false,
		disabled,
		type = 'text',
		...rest
	} = props;
	return (
		<input
			className={clsx(styles['base-input'], className, {
				[styles.isStretch]: iStretch,
				[styles.isDisabled]: disabled,
			})}
			type={type}
			disabled={disabled}
			{...rest}
		/>
	);
};

export { BaseInput };
