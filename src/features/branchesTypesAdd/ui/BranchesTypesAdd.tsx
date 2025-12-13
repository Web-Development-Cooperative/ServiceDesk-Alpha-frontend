import { BasePopup, BranchesTypesPopup } from '~~>shared/ui/popups';

import { useBranchesTypesAdd } from '../lib/useBranchesTypesAdd';
import type { FC } from 'react';
import type { BranchesTypesAddProps } from '../model/BranchesTypesAdd.types';

const BranchesTypesAdd: FC<BranchesTypesAddProps> = ({ setIsOpen }) => {
	const { data, onChangeInputField, onSubmit, closePopup } =
		useBranchesTypesAdd(setIsOpen);

	return (
		<BasePopup setIsOpen={setIsOpen} withCross>
			<BranchesTypesPopup
				title="Добавить тип"
				data={data}
				onChangeInputField={onChangeInputField}
				onSubmit={onSubmit}
				submitText="Сохранить"
				onCancel={closePopup}
				cancelText="Отмена"
			/>
		</BasePopup>
	);
};

export { BranchesTypesAdd };
