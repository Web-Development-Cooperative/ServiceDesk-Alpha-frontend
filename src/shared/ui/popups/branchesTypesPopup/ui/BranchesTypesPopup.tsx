import { BaseInput } from '~~>shared/ui/inputs';
import { BaseButton } from '~~>shared/ui/buttons';

import styles from './BranchesTypesPopup.module.css';
import type { FC } from 'react';
import type { BranchesTypesPopupProps } from '../model/BranchesTypesPopup.types';

const BranchesTypesPopup: FC<BranchesTypesPopupProps> = ({
	title,
	data,
	onChangeInputField,
	onCancel,
	cancelText,
	onSubmit,
	submitText,
}) => {
	return (
		<>
			<div className={styles.header}>
				<h3>{title}</h3>
			</div>
			<div className={styles.body}>
				<div className={styles.row}>
					<p>
						Название типа <b>*</b>
					</p>
					<BaseInput
						placeholder="Введите название типа..."
						value={data.name}
						name="name"
						onChange={onChangeInputField}
					/>
				</div>
			</div>
			<div className={styles.footer}>
				<BaseButton typeButton="base" onClick={onCancel}>
					{cancelText}
				</BaseButton>
				<BaseButton onClick={onSubmit}>{submitText}</BaseButton>
			</div>
		</>
	);
};

export { BranchesTypesPopup };
