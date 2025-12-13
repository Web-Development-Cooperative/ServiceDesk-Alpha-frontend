import { BasePopup, ApplicationsCategoryPopup } from '~~>shared/ui/popups';

import { useApplicationsCategoryAdd } from '../lib/useApplicationsCategoryAdd';
import type { FC } from 'react';
import type { ApplicationsCategoryAddProps } from '../model/applicationsCategoryAdd.types';

const ApplicationsCategoryAdd: FC<ApplicationsCategoryAddProps> = ({
	setIsOpen,
}) => {
	const {
		data,
		onChangeInputField,
		onChangeInputNumberField,
		onChangeTextareaField,
		onChangeSelectField,
		onSubmit,
		closePopup,
	} = useApplicationsCategoryAdd(setIsOpen);

	return (
		<BasePopup setIsOpen={setIsOpen} withCross>
			<ApplicationsCategoryPopup
				title="Добавить категорию"
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

export { ApplicationsCategoryAdd };
