import { useDeleteBranchTypeByIdMutation } from '~~>entities/branchTypes';

import type { BranchesTypesDeleteProps } from '../model/BranchesTypesDelete.types';

const useBranchesTypesDelete = ({
	setIsOpen,
	branchesTypesId,
}: BranchesTypesDeleteProps) => {
	const [deleteBranchType] = useDeleteBranchTypeByIdMutation();

	const closePopup = () => setIsOpen(false);
	const onSubmit = async () => {
		try {
			await deleteBranchType(branchesTypesId).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	return { closePopup, onSubmit };
};

export { useBranchesTypesDelete };
