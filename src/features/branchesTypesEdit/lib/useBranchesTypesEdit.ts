import { useEffect, useState } from 'react';

import {
	useLazyGetBranchTypeByIdQuery,
	usePutBranchTypeByIdMutation,
} from '~~>entities/branchTypes';

import type { ChangeEvent } from 'react';
import type { BranchesTypesEditProps } from '../model/BranchesTypesEdit.types';
import type { BranchTypeRequestBody } from '~~>entities/branchTypes';

const useBranchesTypesEdit = ({
	setIsOpen,
	branchesTypesId,
}: BranchesTypesEditProps) => {
	const [trigger, { data: branchesTypesData }] =
		useLazyGetBranchTypeByIdQuery();
	const [putTicketCategory] = usePutBranchTypeByIdMutation();

	const [data, setData] = useState<BranchTypeRequestBody>({
		name: branchesTypesData?.name || '',
	});

	const onChangeInputField = (e: ChangeEvent<HTMLInputElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const closePopup = () => setIsOpen(false);
	const onSubmit = async () => {
		try {
			await putTicketCategory({
				url: branchesTypesId,
				body: data,
			}).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		trigger(branchesTypesId);
	}, []);

	useEffect(() => {
		setData({
			name: branchesTypesData?.name || '',
		});
	}, [branchesTypesData]);

	return {
		data,
		onChangeInputField,
		onSubmit,
		closePopup,
	};
};

export { useBranchesTypesEdit };
