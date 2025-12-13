import { useEffect, useState } from 'react';

import {
	useLazyGetTicketCategoryByIdQuery,
	usePutTicketCategoryByIdMutation,
} from '~~>entities/ticketCategory';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { TicketCategoryRequestBody } from '~~>entities/ticketCategory';
import type { Option } from '~~>shared/ui/inputs';
import type { PRIORITY } from '~~>shared/model/baseConsts';

const useApplicationsCategoryEdit = (
	setPopupState: Dispatch<SetStateAction<boolean>>,
	applicationsCategoryId: string
) => {
	const [trigger, { data: branchData }] = useLazyGetTicketCategoryByIdQuery();
	const [postTicketCategory] = usePutTicketCategoryByIdMutation();

	const [data, setData] = useState<TicketCategoryRequestBody>({
		name: branchData?.name || '',
		description: branchData?.description || '',
		deadlineHours: branchData?.deadlineHours || 0,
		priority: branchData?.priority || 'NORMAL',
		params: {
			needApproval: branchData?.params.needApproval || false,
			needMedia: branchData?.params.needMedia || false,
		},
		active: branchData?.active || false,
	});

	const onChangeInputField = (e: ChangeEvent<HTMLInputElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const onChangeInputNumberField = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const name = e.target.name;

		if (value == '' || !/^\d*$/.test(value)) return;

		setData((cv) => ({
			...cv,
			[name]: +value.replace(/^0+(?=\d)/, ''),
		}));
	};

	const onChangeTextareaField = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const onChangeSelectField = (
		value: Option<keyof typeof PRIORITY>,
		name: keyof Pick<TicketCategoryRequestBody, 'priority'>
	) =>
		setData((cv) => ({
			...cv,
			[name]: value.value,
		}));

	const closePopup = () => setPopupState(false);
	const onSubmit = async () => {
		try {
			await postTicketCategory({
				url: applicationsCategoryId,
				body: data,
			}).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		trigger(applicationsCategoryId);
	}, []);

	useEffect(() => {
		setData({
			name: branchData?.name || '',
			description: branchData?.description || '',
			deadlineHours: branchData?.deadlineHours || 0,
			priority: branchData?.priority || 'NORMAL',
			params: {
				needApproval: branchData?.params.needApproval || false,
				needMedia: branchData?.params.needMedia || false,
			},
			active: branchData?.active || false,
		});
	}, [branchData]);

	return {
		data,
		onChangeInputField,
		onChangeInputNumberField,
		onChangeTextareaField,
		onChangeSelectField,
		onSubmit,
		closePopup,
	};
};

export { useApplicationsCategoryEdit };
