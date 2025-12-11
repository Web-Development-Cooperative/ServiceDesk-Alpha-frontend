import { BasePopup } from '~~>shared/ui/popups';
import { BaseButton } from '~~>shared/ui/buttons';
import { BaseInput, Select, Textarea } from '~~>shared/ui/inputs';

import styles from './BranchPopup.module.css';
import type { FC } from 'react';
import type { BranchPopupProps } from '../model/branchPopup.types';

const BranchPopup: FC<BranchPopupProps> = ({
	setIsOpen,
	title,
	data,
	brancCodes,
	brancTypes,
	onChangeInputField,
	onChangeTextareaField,
	onChangeSelectField,
	openParentsPopup,
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
			<div className={styles.body}>
				<div className={styles.row}>
					<p>
						Название филиала <b>*</b>
					</p>
					<BaseInput
						placeholder="Введите название филиала..."
						value={data.name}
						name="name"
						onChange={onChangeInputField}
					/>
				</div>
				<div className={styles['row']}>
					<p>
						Регион/область <b>*</b>
					</p>
					<BaseInput
						placeholder="Введите название региона/области..."
						value={data.area}
						name="area"
						onChange={onChangeInputField}
					/>
				</div>
				<div className={styles['row']}>
					<p>
						Адрес филиала <b>*</b>
					</p>
					<Textarea
						placeholder="Введите полный адрес филиала. Например: г. Москва, ул. Тверская, д. 10..."
						value={data.address}
						onChange={onChangeTextareaField}
						name="address"
					/>
				</div>
				<div className={styles['row']}>
					<p>
						Код филиала <b>*</b>
					</p>
					<Select
						options={brancCodes.map((o) => ({
							value: o.id,
							label: o.name,
						}))}
						placeholder="Введите код филиала..."
						value={data.code.name}
						onChange={(v) => onChangeSelectField(v, 'code')}
					/>
				</div>
				<div className={styles['row']}>
					<p>
						Тип филиала <b>*</b>
					</p>
					<Select
						options={brancTypes.map((o) => ({
							value: o.id,
							label: o.name,
						}))}
						placeholder="Введите тип филиала..."
						value={data.type.name}
						onChange={(v) => onChangeSelectField(v, 'type')}
					/>
				</div>
				<div className={styles['row']}>
					<p>Родительский филиал</p>
					<BaseInput
						placeholder="Нажмите, чтобы выбрать филиал"
						value={data.parent.name}
						onClick={openParentsPopup}
						name="parent"
					/>
				</div>
			</div>
			<div className={styles.footer}>
				<BaseButton typeButton="base" onClick={onCancel}>
					{cancelText}
				</BaseButton>
				<BaseButton onClick={onSubmit}>{submitText}</BaseButton>
			</div>
		</BasePopup>
	);
};

export { BranchPopup };
