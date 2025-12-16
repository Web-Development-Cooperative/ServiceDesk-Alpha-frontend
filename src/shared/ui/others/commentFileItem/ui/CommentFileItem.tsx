import { PaperClip, PopupCross } from '~~>shared/ui/icons';

import styles from './CommentFileItem.module.css';
import type { FC } from 'react';
import type { CommentFileItemProps } from '../model/commentFileItem.types';

const CommentFileItem: FC<CommentFileItemProps> = ({
	type = 'old',
	item,
	onClick,
}) => {
	return (
		<div className={styles.file}>
			{type === 'old' && (
				<a href={item.url} download className={styles.cross}>
					<PaperClip />
				</a>
			)}

			<p className={styles.name}>
				{item.name}
				{type === 'new' && '\u00A0\u00A0'}
				{type == 'new' && <span>({item.size})</span>}
			</p>
			{type === 'new' && (
				<button
					className={styles.cross}
					onClick={() => onClick && onClick(item.id)}
				>
					<PopupCross />
				</button>
			)}
		</div>
	);
};

export { CommentFileItem };
