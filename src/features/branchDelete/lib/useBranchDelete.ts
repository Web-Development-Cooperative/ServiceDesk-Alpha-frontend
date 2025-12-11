import { useDeleteBranchByIdMutation } from '~~>entities/branch';

import type { BranchDeleteProps } from '../model/branchDelete.types';

const useBranchDelete = ({ setIsOpen, branchId }: BranchDeleteProps) => {
	const [deleteBranch] = useDeleteBranchByIdMutation();

	const closePopup = () => setIsOpen(false);
	const onSubmit = () => {
		deleteBranch(branchId);
		closePopup();
	};

	return { closePopup, onSubmit };
};

export { useBranchDelete };
