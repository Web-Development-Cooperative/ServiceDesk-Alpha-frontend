import { DeletePopup } from '~~>shared/ui/others';

import { useBranchesTypesDelete } from '../lib/useBranchesTypesDelete';
import type { FC } from 'react';
import type { BranchesTypesDeleteProps } from '../model/BranchesTypesDelete.types';

const BranchesTypesDelete: FC<BranchesTypesDeleteProps> = ({
	setIsOpen,
	branchesTypesId,
}) => {
	const { closePopup, onSubmit } = useBranchesTypesDelete({
		setIsOpen,
		branchesTypesId,
	});
	const text = 'Вы уверены, что хотите удалить тип?';

	return (
		<DeletePopup
			setIsOpen={setIsOpen}
			title="Удаление типа"
			text={text}
			onSubmit={onSubmit}
			submitText="Удалить"
			onCancel={closePopup}
			cancelText="Отмена"
		/>
	);
};

export { BranchesTypesDelete };
