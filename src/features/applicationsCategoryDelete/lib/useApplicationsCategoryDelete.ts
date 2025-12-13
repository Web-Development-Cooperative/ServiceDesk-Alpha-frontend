import { useDeleteTicketCategoryByIdMutation } from '~~>entities/ticketCategory';

import type { ApplicationsCategoryDeleteProps } from '../model/applicationsCategoryDelete.types';

const useApplicationsCategoryDelete = ({
	setIsOpen,
	applicationsCategoryId,
}: ApplicationsCategoryDeleteProps) => {
	const [deleteBranch] = useDeleteTicketCategoryByIdMutation();

	const closePopup = () => setIsOpen(false);
	const onSubmit = async () => {
		try {
			await deleteBranch(applicationsCategoryId).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	return { closePopup, onSubmit };
};

export { useApplicationsCategoryDelete };
