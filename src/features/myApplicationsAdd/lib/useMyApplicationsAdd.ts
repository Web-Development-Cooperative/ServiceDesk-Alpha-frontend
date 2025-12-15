import { useState } from 'react';

import { usePostTicketCategoryMutation } from '~~>entities/ticketCategory';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { TicketCategoryRequestBody } from '~~>entities/ticketCategory';
import type { Option } from '~~>shared/ui/inputs';
import type { PRIORITY } from '~~>shared/model/baseConsts';

const useMyApplicationsAdd = (
	setPopupState: Dispatch<SetStateAction<boolean>>
) => {
	const [postTicketCategory] = usePostTicketCategoryMutation();

	const [data, setData] = useState<TicketCategoryRequestBody>({
		name: '',
		description: '',
		deadlineHours: 0,
		priority: 'NORMAL',
		params: {
			needApproval: false,
			needMedia: false,
		},
		active: false,
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
			await postTicketCategory(data).unwrap();
			closePopup();
		} catch (error) {
			console.error(error);
		}
	};

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

export { useMyApplicationsAdd };
