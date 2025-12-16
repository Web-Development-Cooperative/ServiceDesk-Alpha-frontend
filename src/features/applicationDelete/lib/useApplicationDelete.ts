import { useDeleteBranchByIdMutation } from '~~>entities/branch';

import type { ApplicationDeleteProps } from '../model/applicationDelete.types';

const useApplicationDelete = ({
	setIsOpen,
	applicationId,
}: ApplicationDeleteProps) => {
	const [deleteBranch] = useDeleteBranchByIdMutation();

	const closePopup = () => setIsOpen(false);
	const onSubmit = async () => {
		try {
			await deleteBranch(applicationId).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	return { closePopup, onSubmit };
};

export { useApplicationDelete };
