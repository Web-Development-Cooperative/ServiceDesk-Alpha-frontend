import { DeletePopup } from '~~>shared/ui/others';

import { useBranchDelete } from '../lib/useBranchDelete';
import type { FC } from 'react';
import type { BranchDeleteProps } from '../model/branchDelete.types';

const BranchDelete: FC<BranchDeleteProps> = ({ setIsOpen, branchId }) => {
	const { closePopup, onSubmit } = useBranchDelete({ setIsOpen, branchId });
	const text = 'Вы уверены, что хотите удалить филиал?';

	return (
		<DeletePopup
			setIsOpen={setIsOpen}
			title="Удаление филиала"
			text={text}
			onSubmit={onSubmit}
			submitText="Удалить"
			onCancel={closePopup}
			cancelText="Отмена"
		/>
	);
};

export { BranchDelete };
