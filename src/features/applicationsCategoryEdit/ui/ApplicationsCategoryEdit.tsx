import { BasePopup, ApplicationsCategoryPopup } from '~~>shared/ui/popups';

import { useApplicationsCategoryEdit } from '../lib/useApplicationsCategoryEdit';
import type { FC } from 'react';
import type { ApplicationsCategoryEditProps } from '../model/ApplicationsCategoryEdit.types';

const ApplicationsCategoryEdit: FC<ApplicationsCategoryEditProps> = ({
	setIsOpen,
	applicationsCategoryId,
}) => {
	const {
		data,
		onChangeInputField,
		onChangeInputNumberField,
		onChangeTextareaField,
		onChangeSelectField,
		onSubmit,
		closePopup,
	} = useApplicationsCategoryEdit(setIsOpen, applicationsCategoryId);

	return (
		<BasePopup setIsOpen={setIsOpen} withCross>
			<ApplicationsCategoryPopup
				title="Изменить категорию"
				data={data}
				onChangeInputField={onChangeInputField}
				onChangeInputNumberField={onChangeInputNumberField}
				onChangeTextareaField={onChangeTextareaField}
				onChangeSelectField={onChangeSelectField}
				onSubmit={onSubmit}
				submitText="Сохранить"
				onCancel={closePopup}
				cancelText="Отмена"
			/>
		</BasePopup>
	);
};

export { ApplicationsCategoryEdit };
