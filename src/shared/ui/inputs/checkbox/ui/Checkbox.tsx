import styles from './Checkbox.module.css';
import type { FC } from 'react';
import type { CheckboxProps } from '~~>shared/ui/inputs/checkbox/model/types';

const Checkbox: FC<CheckboxProps> = ({ onChange, ...rest }) => {
	return (
		<input
			type="checkbox"
			onChange={onChange}
			className={styles.checkbox}
			{...rest}
		></input>
	);
};

export { Checkbox };
