import { clsx } from 'clsx';
import { NavLink } from 'react-router';

import styles from './NavigationText.module.css';
import type { FC, PropsWithChildren, RefAttributes } from 'react';
import type { NavLinkProps } from 'react-router';

const NavigationText: FC<
	PropsWithChildren<NavLinkProps & RefAttributes<HTMLAnchorElement>>
> = ({ children, className, to, ...rest }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				clsx(
					styles['navigation-text'],
					{ [styles.active]: isActive },
					className
				)
			}
			{...rest}
		>
			{children}
		</NavLink>
	);
};

export { NavigationText };
