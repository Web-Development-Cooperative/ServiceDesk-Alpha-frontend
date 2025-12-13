import { useState } from 'react';

import { usePostBranchTypeMutation } from '~~>entities/branchTypes';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { BranchTypeRequestBody } from '~~>entities/branchTypes';

const useBranchesTypesAdd = (
	setPopupState: Dispatch<SetStateAction<boolean>>
) => {
	const [postBranchesTypes] = usePostBranchTypeMutation();

	const [data, setData] = useState<BranchTypeRequestBody>({ name: '' });

	const onChangeInputField = (e: ChangeEvent<HTMLInputElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const closePopup = () => setPopupState(false);
	const onSubmit = async () => {
		try {
			await postBranchesTypes(data).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	return {
		data,
		onChangeInputField,
		onSubmit,
		closePopup,
	};
};

export { useBranchesTypesAdd };
