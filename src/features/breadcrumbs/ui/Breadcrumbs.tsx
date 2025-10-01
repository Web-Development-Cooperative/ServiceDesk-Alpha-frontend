import { Link, useLocation } from 'react-router';

import { useAppSelector } from '~~>shared/lib';
import { Skeleton } from '~~>shared/ui/others';

import styles from './Breadcrumbs.module.css';
import { getBreadcrumbs } from '../lib/getBreadcrumbs';

const Breadcrumbs = () => {
	const location = useLocation();
	const state = useAppSelector((state) => state);

	const crumbs = getBreadcrumbs(location.pathname, state);

	return (
		<nav className={styles.breadcrumbs}>
			<ul>
				{crumbs.map((item, index) => (
					<li key={index}>
						{item.path ? (
							<Link to={item.path}>
								{item.label ? item.label : <Skeleton />}
							</Link>
						) : (
							<span>
								{item.label ? item.label : <Skeleton />}
							</span>
						)}
						{index < crumbs.length - 1 && ' → '}
					</li>
				))}
			</ul>
		</nav>
	);
};

export { Breadcrumbs };
