import { useDeleteBranchByIdMutation } from '~~>entities/branch';

import type { BranchDeleteProps } from '../model/branchDelete.types';

const useBranchDelete = ({ setIsOpen, branchId }: BranchDeleteProps) => {
	const [deleteBranch] = useDeleteBranchByIdMutation();

	const closePopup = () => setIsOpen(false);
	const onSubmit = async () => {
		try {
			await deleteBranch(branchId).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	return { closePopup, onSubmit };
};

export { useBranchDelete };
