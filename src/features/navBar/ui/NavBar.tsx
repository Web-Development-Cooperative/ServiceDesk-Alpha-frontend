import { NavLink } from 'react-router';
import { clsx } from 'clsx';

import { UniList } from '~~>shared/ui/others';

import styles from './NavBar.module.css';
import type { ReactNode } from 'react';
import type { NavBarProps } from '../model/types';

const NavBar = <T extends { id: number | string; text: string; path: string }>(
	props: NavBarProps<T>
): ReactNode => {
	const { items, ...rest } = props;

	const renderItem: (_item: T, _index: number) => ReactNode = (item, _) => (
		<NavLink
			key={item.path}
			className={({ isActive }) =>
				clsx(styles['nav-link'], {
					[styles['active-link']]: isActive,
				})
			}
			to={item.path}
			end
		>
			{item.text}
		</NavLink>
	);

	return (
		<nav className={styles['nav-bar']} {...rest}>
			<UniList
				className={styles.list}
				items={items}
				renderItem={renderItem}
			/>
		</nav>
	);
};

export { NavBar };
