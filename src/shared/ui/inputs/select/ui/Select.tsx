import { clsx } from 'clsx';

import { SelectArrow } from '~~>shared/ui/icons';

import { useSelect } from '../lib/useSelect';
import styles from './Select.module.css';
import type { SelectProps } from '../model/select.types';

const Select = <T extends string | number = string>(props: SelectProps<T>) => {
	const { options, value, onChange, disabled, className } = props;
	const { handleSelect, toggleDropdown, containerRef, isOpen } =
		useSelect(onChange);

	const toRender = (data: SelectProps<T>['options']) => {
		if (!data.length) return 'Данных нет...';

		return data.map((item) => (
			<li
				key={item.value}
				className={styles.option}
				onClick={() => handleSelect(item)}
			>
				{item.label}
			</li>
		));
	};

	return (
		<div
			className={clsx(
				styles['search-select'],
				{ [styles.open]: isOpen },
				className
			)}
			ref={containerRef}
			onMouseDown={toggleDropdown}
		>
			<span className={clsx({ [styles.placeholder]: !value.length })}>
				{value.length ? value : 'Выберите...'}
			</span>
			{!disabled && <SelectArrow className={styles.chevron} />}
			{isOpen && (
				<ul
					className={styles['options']}
					onMouseDown={(e) => e.stopPropagation()}
				>
					{toRender(options)}
				</ul>
			)}
		</div>
	);
};

export { Select };
