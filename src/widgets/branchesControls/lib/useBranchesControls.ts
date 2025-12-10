import { useState } from 'react';

import type { ChangeEvent } from 'react';
import type { BranchRequestModel } from '~~>entities/branch';
import type { Option } from '~~>shared/ui/inputs';

const useBranchesControls = () => {
	const [popupState, setPopupState] = useState(false);
	const [data, setData] = useState<BranchRequestModel>({
		parent: { id: '-1', name: '' },
		type: { id: '-1', name: '' },
		code: { id: '-1', name: '' },
		name: '',
		area: '',
		address: '',
	});
	const CODES = [
		{ id: '1', name: 'FIR' },
		{ id: '2', name: 'SEC' },
		{ id: '3', name: 'THI' },
		{ id: '4', name: 'FOO' },
		{ id: '5', name: 'FIF' },
	];

	const onChangeInputField = (e: ChangeEvent<HTMLInputElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const onChangeTextareaField = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setData((cv) => ({ ...cv, [e.target.name]: e.target.value }));

	const onChangeSelectField = (
		value: Option<string>,
		name: keyof Pick<BranchRequestModel, 'parent' | 'code' | 'type'>
	) =>
		setData((cv) => ({
			...cv,
			[name]: { id: value.value, name: value.label },
		}));

	const openPopup = () => setPopupState(true);
	const closePopup = () => setPopupState(false);

	return {
		popupState,
		data,
		brancCodes: CODES,
		setPopupState,
		onChangeInputField,
		onChangeTextareaField,
		onChangeSelectField,
		openPopup,
		closePopup,
	};
};

export { useBranchesControls };
