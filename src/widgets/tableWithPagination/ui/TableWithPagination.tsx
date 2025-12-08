import styles from './TableWithPagination.module.css';
import type { FC, PropsWithChildren } from 'react';

const TableWithPagination: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles['table-wrapper']}>{children}</div>;
};

export { TableWithPagination };
