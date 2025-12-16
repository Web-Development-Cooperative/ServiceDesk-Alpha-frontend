import { clsx } from 'clsx';

import { BaseButton } from '~~>shared/ui/buttons';
import { ArrowInstall } from '~~>shared/ui/icons';

import styles from './AttachmentItem.module.css';
import type { FC } from 'react';
import type { AttachmentItemProps } from '../model/attachmentItem.types';

const AttachmentItem: FC<AttachmentItemProps> = ({ item }) => {
	return (
		<div className={styles.attachment}>
			<div
				className={clsx(
					styles.attachment__icon,
					styles[`attachment__icon--${item.type}`]
				)}
			>
				{item.type.toUpperCase()}
			</div>
			<div className={styles.attachment__info}>
				<p className={styles.attachment__name}>{item.name}</p>
				<span className={styles.attachment__size}>{item.size}</span>
			</div>
			<a
				href={item.url}
				download
				className={styles.attachment__download}
				aria-label="Скачать файл"
			>
				<BaseButton typeButton="base" withoutText>
					<ArrowInstall />
				</BaseButton>
			</a>
		</div>
	);
};

export { AttachmentItem };
