import { BasePopup } from '~~>shared/ui/popups';
import { BaseButton } from '~~>shared/ui/buttons';

import styles from './DeletePopup.module.css';
import type { FC } from 'react';
import type { DeletePopupProps } from '../model/DeletePopup.types';

const DeletePopup: FC<DeletePopupProps> = ({
	setIsOpen,
	title,
	text,
	onSubmit,
	onCancel,
	submitText,
	cancelText,
}) => {
	return (
		<BasePopup setIsOpen={setIsOpen} withCross>
			<div className={styles.header}>
				<h3>{title}</h3>
			</div>
			<div className={styles.body}>{text}</div>
			<div className={styles.footer}>
				<BaseButton typeButton="base" onClick={onCancel}>
					{cancelText}
				</BaseButton>
				<BaseButton onClick={onSubmit}>{submitText}</BaseButton>
			</div>
		</BasePopup>
	);
};

export { DeletePopup };
