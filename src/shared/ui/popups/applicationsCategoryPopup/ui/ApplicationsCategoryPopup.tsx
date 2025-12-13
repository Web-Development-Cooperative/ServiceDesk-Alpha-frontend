import { BaseInput, Select, Textarea, type Option } from '~~>shared/ui/inputs';
import { BaseButton } from '~~>shared/ui/buttons';
import { PRIORITY } from '~~>shared/model/baseConsts';

import styles from './ApplicationsCategoryPopup.module.css';
import type { FC } from 'react';
import type { ApplicationsCategoryPopupProps } from '../model/applicationsCategoryPopup.types';

const ApplicationsCategoryPopup: FC<ApplicationsCategoryPopupProps> = ({
	title,
	data,
	onChangeInputField,
	onChangeInputNumberField,
	onChangeTextareaField,
	onChangeSelectField,
	onCancel,
	cancelText,
	onSubmit,
	submitText,
}) => {
	// TODO тип времени пока декоративен
	const TIME_TYPE = [
		{
			id: '1',
			name: 'Часов',
		},
	];

	const ARR_PRIORITY = Object.keys(PRIORITY);
	return (
		<>
			<div className={styles.header}>
				<h3>{title}</h3>
			</div>
			<div className={styles.body}>
				<div className={styles.row}>
					<p>
						Название категории <b>*</b>
					</p>
					<BaseInput
						placeholder="Введите название категории..."
						value={data.name}
						name="name"
						onChange={onChangeInputField}
					/>
				</div>
				<div className={styles['row']}>
					<p>
						Описание категории <b>*</b>
					</p>
					<Textarea
						placeholder="Опишите категорию заявки. Например: Проблемы с доступом к сетевым ресурсам, настройка VPN, дианостика сетевого оборудования..."
						value={data.description}
						name="description"
						onChange={onChangeTextareaField}
					/>
				</div>
				<div className={styles['row']}>
					<p>
						Приоритет <b>*</b>
					</p>
					<Select
						placeholder="Введите полный адрес филиала. Например: г. Москва, ул. Тверская, д. 10..."
						value={data.priority}
						options={ARR_PRIORITY.map((v) => ({
							value: v,
							label: v,
						}))}
						onChange={(v) =>
							onChangeSelectField(
								v as Option<keyof typeof PRIORITY>,
								'priority'
							)
						}
						name="priority"
					/>
				</div>
				<div className={styles['row']}>
					<p>
						Ожидаемое время выполнения <b>*</b>
					</p>
					<div className={styles.deadline}>
						<BaseInput
							placeholder="Ввведите число..."
							type="number"
							min={0}
							value={String(data.deadlineHours)}
							onChange={onChangeInputNumberField}
							name="deadlineHours"
						/>
						<Select
							options={TIME_TYPE.map((o) => ({
								value: o.id,
								label: o.name,
							}))}
							value={TIME_TYPE[0].name}
							onChange={() => {}}
						/>
					</div>
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

export { ApplicationsCategoryPopup };
