import { clsx } from 'clsx';
import { NavLink, useLocation } from 'react-router';

import styles from './NavigationText.module.css';
import type { FC, PropsWithChildren, RefAttributes } from 'react';
import type { NavLinkProps } from 'react-router';

const NavigationText: FC<
	PropsWithChildren<NavLinkProps & RefAttributes<HTMLAnchorElement>>
> = ({ children, className, to, ...rest }) => {
	const location = useLocation();

	const isPartiallyActive = location.pathname.startsWith(to.toString());

	return (
		<NavLink
			to={to}
			className={clsx(
				styles['navigation-text'],
				{ [styles.active]: isPartiallyActive },
				className
			)}
			{...rest}
		>
			{children}
		</NavLink>
	);
};

export { NavigationText };
