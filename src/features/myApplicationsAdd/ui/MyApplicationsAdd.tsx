import { BasePopup, ApplicationsCategoryPopup } from '~~>shared/ui/popups';

import { useMyApplicationsAdd } from '../lib/useMyApplicationsAdd';
import type { FC } from 'react';
import type { MyApplicationsAddProps } from '../model/myApplicationsAdd.types';

const MyApplicationsAdd: FC<MyApplicationsAddProps> = ({ setIsOpen }) => {
	const {
		data,
		onChangeInputField,
		onChangeInputNumberField,
		onChangeTextareaField,
		onChangeSelectField,
		onSubmit,
		closePopup,
	} = useMyApplicationsAdd(setIsOpen);

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

export { MyApplicationsAdd };
