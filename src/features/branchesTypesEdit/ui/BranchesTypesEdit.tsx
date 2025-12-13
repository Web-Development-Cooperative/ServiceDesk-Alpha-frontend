import { BasePopup, BranchesTypesPopup } from '~~>shared/ui/popups';

import { useBranchesTypesEdit } from '../lib/useBranchesTypesEdit';
import type { FC } from 'react';
import type { BranchesTypesEditProps } from '../model/BranchesTypesEdit.types';

const BranchesTypesEdit: FC<BranchesTypesEditProps> = ({
	setIsOpen,
	branchesTypesId,
}) => {
	const { data, onChangeInputField, onSubmit, closePopup } =
		useBranchesTypesEdit({ setIsOpen, branchesTypesId });

	return (
		<BasePopup setIsOpen={setIsOpen} withCross>
			<BranchesTypesPopup
				title="Изменить тип"
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

export { BranchesTypesEdit };
