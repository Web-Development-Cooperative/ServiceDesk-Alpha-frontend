import { clsx } from 'clsx';

import { BaseButton } from '~~>shared/ui/buttons';
import { UniList } from '~~>shared/ui/others';
import { Arrow } from '~~>shared/ui/icons';

import {
	MAX_VISIBLE_PAGES,
	HALF_VISIBLE,
	PAGE_WINDOW_OFFSET,
	GAP_LEFT_THRESHOLD,
	LEFT_REMAINS,
	GAP_RIGHT_THRESHOLD,
	RIGHT_REMAINS,
} from '../model/paginationBar.consts';
import styles from './PaginationBar.module.css';
import type { FC } from 'react';
import type { PaginationBarProps } from '../model/paginationBar.types';

const PaginationBar: FC<PaginationBarProps> = ({
	minPage = 1,
	maxPage,
	name,
	totalElements,
	cardinality,
	currentPage,
	onPageChange,
	onPageInc,
	onPageDec,
}) => {
	return (
		<div className={styles['pagination-wrapper']}>
			<p className={styles.description}>
				Показано {name || 'филиалов'}: {cardinality} из {totalElements}
			</p>
			<div className={styles.pagination}>
				<BaseButton
					onClick={onPageDec}
					disabled={currentPage <= minPage}
					typeButton="base"
					withoutText
				>
					<Arrow className={styles['svg_rotate-90']} />
				</BaseButton>
				<UniList
					className={styles.pages}
					items={[
						...(+maxPage > MAX_VISIBLE_PAGES &&
						+currentPage - GAP_LEFT_THRESHOLD > 0
							? +currentPage - GAP_LEFT_THRESHOLD === LEFT_REMAINS
								? [{ id: 1, val: 1 }]
								: [
										{ id: 1, val: 1 },
										{
											id: 'dots_start',
											val: '...',
											desc: 'dots',
										},
								  ]
							: []),
						...Array.from(
							{
								length:
									+maxPage > MAX_VISIBLE_PAGES
										? MAX_VISIBLE_PAGES
										: +maxPage,
							},
							(_, i) => {
								const start = Math.max(
									1,
									Math.min(
										currentPage - HALF_VISIBLE,
										+maxPage - PAGE_WINDOW_OFFSET
									)
								);
								const value = start + i;
								return { id: value, val: value };
							}
						),
						...(+maxPage > MAX_VISIBLE_PAGES &&
						+maxPage - +currentPage - GAP_RIGHT_THRESHOLD > 0
							? +maxPage - +currentPage - GAP_RIGHT_THRESHOLD ===
							  RIGHT_REMAINS
								? [
										{
											id: maxPage,
											val: maxPage,
										},
								  ]
								: [
										{
											id: 'dots_end',
											val: '...',
											desc: 'dots',
										},
										{
											id: maxPage,
											val: maxPage,
										},
								  ]
							: []),
					]}
					renderItem={(item) => (
						<BaseButton
							key={item.id}
							className={clsx(styles.page)}
							onClick={() =>
								!('desc' in item) && onPageChange(item.val)
							}
							typeButton={
								item.val === currentPage ? 'danger' : 'base'
							}
							disabled={'desc' in item}
						>
							{item.val}
						</BaseButton>
					)}
				/>
				<BaseButton
					onClick={onPageInc}
					disabled={maxPage <= currentPage}
					typeButton="base"
					withoutText
				>
					<Arrow className={styles.svg_rotate180} />
				</BaseButton>
			</div>
		</div>
	);
};

export { PaginationBar };
