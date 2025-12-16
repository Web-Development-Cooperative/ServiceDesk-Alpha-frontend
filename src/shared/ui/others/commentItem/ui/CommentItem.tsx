import { clsx } from 'clsx';

import { UniList, CommentFileItem } from '~~>shared/ui/others';

import styles from './CommentItem.module.css';
import type { FC } from 'react';
import type { CommentItemProps } from '../model/commentItem.types';

const CommentItem: FC<CommentItemProps> = ({ item }) => {
	const initials = item.author
		.split(' ')
		.map((w) => w[0])
		.slice(0, -1)
		.join('');

	return (
		<div className={styles.comment}>
			<div className={styles.comment__header}>
				<div
					className={clsx(
						styles.comment__avatar,
						styles[`comment__avatar--${item.role}`]
					)}
				>
					{initials}
				</div>
				<div className={styles.comment__author}>
					<p className={styles.comment__name}>{item.author}</p>
					<span className={styles.comment__role}>
						{item.role === 'user' ? 'Заявитель' : 'Исполнитель'}
					</span>
				</div>
				<time className={styles.comment__date}>{item.date}</time>
			</div>
			<div className={styles.comment__body}>{item.text}</div>
			{item.attachments && (
				<UniList
					className={styles.comment__attachments}
					items={item.attachments}
					renderItem={(item) => <CommentFileItem item={item} />}
				/>
			)}
		</div>
	);
};

export { CommentItem };
