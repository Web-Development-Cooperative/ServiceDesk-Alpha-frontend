import { clsx } from 'clsx';

import { Loupe } from '~~>shared/ui/icons';

import styles from './SearchBar.module.css';
import type { FC } from 'react';
import type { SearchBarProps } from '../model/searchBar.types';

const SearchBar: FC<SearchBarProps> = ({
	className,
	value,
	onChange,
	...rest
}) => {
	return (
		<div className={clsx(styles['search-bar'], className)} {...rest}>
			<Loupe />
			<input
				type="text"
				name="search-bar"
				value={value}
				onChange={onChange}
				placeholder="Поиск..."
			/>
		</div>
	);
};

export { SearchBar };
